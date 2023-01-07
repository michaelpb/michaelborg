var currentModulo = new Modulo(modulo);
currentModulo.fetchQueue.data = modulo.fetchQueue.data = {"/libraries/core.html":"\n<!-- Define my core Page component -->\n<Component name=\"Page\" mode=\"vanish-into-document\">\n\n    <Props\n        pagetitle\n        tabtitle\n        archivedid\n        redirect\n        bc1\n        bc1path\n        bc2\n        bc2path\n    ></Props>\n    <Template -src=\"/libraries/core/Page.html\"></Template>\n    <StaticData -src=\"/libraries/core/Page-blogArchiveMeta.json\"></StaticData>\n    <Script>\n        function initializedCallback() {\n            // \"auto404\" will attempt to auto-redirect based on archived article json\n            if (props.redirect && props.redirect === 'auto404') {\n                const url = '' + window.location.pathname;\n                for (const page of staticdata) {\n                    if (url.includes(page.slug)) {\n                        const newPath = '/archive/articles/' + page.id + '.html';\n                        window.location.replace(newPath);\n                        break;\n                    }\n                }\n            }\n\n            return {\n                year: (new Date()).getFullYear(),\n            }\n        }\n    </Script>\n</Component>\n\n\n<Component name=\"ArchiveSidebar\">\n    <Props\n        qid\n        title\n    ></Props>\n    <Template -src=\"/libraries/core/ArchiveSidebar.html\"></Template>\n    <!-- NOTE: For some reason, absolute ones broke here! -->\n    <StaticData -src=\"/archive/article/dir_listing.json\"></StaticData>\n    <State\n        showall:=false\n        showcomments:=false\n    ></State>\n    <Script>\n        function showComments() {\n            state.showcomments = true;\n            var disqus_shortname = 'michaelb'; // required: replace example with your forum shortname\n            var disqus_identifier = String(props.qid);\n            /* * * DON'T EDIT BELOW THIS LINE * * */\n            (function() {\n                    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\n                    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';\n                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\n            })();\n        }\n    </Script>\n\n    <Style -src=\"/libraries/core/ArchiveSidebar.css\"></Style>\n</Component>\n\n\n\n<Component name=\"ArchiveList\" mode=\"vanish\">\n    <Props\n        qid\n    ></Props>\n    <Template>\n        {% for info in staticdata|reversed %}\n            <li>#{{ info.id }} -\n                <a class=\"{% if info.id == props.qid %}active{% endif %}\"\n                    href=\"/archive/article/{{ info.id }}.html\">{{ info.title|safe }}</a>\n            </li>\n        {% endfor %}\n    </Template>\n    <StaticData -src=\"/archive/article/dir_listing.json\"></StaticData>\n</Component>\n\n\n<Component name=\"SoundcloudButton\">\n    <Template>\n        {% if state.isvisible %}\n            <iframe width=\"100%\" height=\"100\" scrolling=\"no\" frameborder=\"no\"\n            src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367015547&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true\"></iframe>\n        {% else %}\n            <a class=\"Btn\" @click:=script.show>\n                <img\n                    src=\"/static/img/music_related/soundcloud_the_mission_begins.png\"\n                    alt=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\"\n                    title=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\"\n                />\n            </a>\n        {% endif %}\n    </Template>\n    <State\n        isvisible:=false\n    ></State>\n    <Script>\n        function show(target, e) {\n            state.isvisible = true;\n        }\n    </Script>\n    <!-- NOTE: For some reason, absolute ones broke here! -->\n    <StaticData -src=\"/archive/article/dir_listing.json\"></StaticData>\n    <Style>\n        a {\n            cursor: pointer;\n        }\n    </Style>\n</Component>\n\n","/libraries/core/Page.html":"<head>\n    <title>{{ props.tabtitle|default:props.pagetitle }}</title>\n    <meta charset=\"utf8\" />\n    <link rel=\"stylesheet\" href=\"/libraries/core/Page.css\">\n    <link rel=\"stylesheet\" href=\"/libraries/core/Page-reset.css\">\n    <link rel=\"stylesheet\" href=\"/libraries/core/Page-article.css\">\n</head>\n\n<body>\n    <main class=\"Page-wrapper\">\n        <div class=\"Page Page-relative\">\n            {% comment %}\n            {% if props.pagetitle %}\n                <nav class=\"Page-trNav\">\n                    <ul>\n                        <li><a href=\"/\">HOME</a></li>\n                        <!--<li><a href=\"/hiring.html\">EMPLOYMENT</a></li>-->\n                        <li><a href=\"/projects/\">PROJECTS</a></li>\n                        <li><a href=\"/articles/\">ARTICLES</a></li>\n                    </ul>\n                </nav>\n            {% endif %}\n            {% endcomment %}\n            {% if props.archivedid %}\n                <h1>michaelb.org #{{ props.archivedid }}</h1>\n                <hr />\n            {% endif %}\n            <img src=\"/static/img/misc_images/logo_2.png\" />\n            {% if props.pagetitle %}\n                <h2 class=\"Page-articleTitle\"><span>{{ props.pagetitle|safe }}</span></h2>\n\n                <nav class=\"Page-bcNav\">\n                    <ul>\n                        <li><a href=\"/\">HOME</a></li>\n                        {% if props.bc1 %}\n                            <li><a href=\"/{{ props.bc1path }}\">{{ props.bc1|upper }}</a></li>\n                        {% endif %}\n                        {% if props.bc2 %}\n                            <li><a href=\"/{{ props.bc2path }}\">{{ props.bc2|upper }}</a></li>\n                        {% endif %}\n                        <li><a href=\"#\">{{ props.pagetitle|upper }}</a></li>\n                    </ul>\n                </nav>\n\n            {% endif %}\n        </div>\n        <slot class=\"Page\n            {% if props.archivedid %}\n                Page-article\n            {% endif %}\n        \"></slot>\n        <div class=\"Page\">\n            {% if props.archivedid %}\n                <x-ArchiveSidebar\n                    style=\"margin-top: 100px\"\n                    qid:={{ props.archivedid }}\n                    title=\"{{ props.pagetitle }}\"\n                ></x-ArchiveSidebar>\n            {% endif %}\n        </div>\n    </main>\n    <footer>\n        &copy; {{ script.exports.year }} Michael Bethencourt - All original\n        content here is licensed under <a\n        href=\"https://creativecommons.org/licenses/by-nd/4.0/\">CC BY-ND</a>,\n        unless otherwise noted\n    </footer>\n</body>\n","/libraries/core/ArchiveSidebar.html":"\n\n<nav>\n    <ul  {% if state.showall %}class=\"active\"{% endif %}>\n        <p>\n            #{{ props.qid }} -\n            <a class=\"active\" href=\"#\">{{ props.title }}</a> <br />\n            <span>This article is from a previous blog, actively published\n            between 2016-2019.</span>\n        </p>\n\n\n        <h2>Popular</h2>\n\n        {# TODO refactor the loop into a snippet #}\n        {% for info in staticdata|reversed %}\n            {% if info.id|add:\",\" in \"5,11,33,38,\" %}\n                <li>#{{ info.id }} -\n                    <a class=\"{% if info.id == props.qid %}active{% endif %}\"\n                        href=\"/archive/article/{{ info.id }}.html\">{{ info.title|safe }}</a>\n                </li>\n            {% endif %}\n        {% endfor %}\n\n        <h2>All archived articles</h2>\n        {% for info in staticdata|reversed %}\n            <li>#{{ info.id }} -\n                <a class=\"{% if info.id == props.qid %}active{% endif %}\"\n                    href=\"/archive/article/{{ info.id }}.html\">{{ info.title|safe }}</a>\n            </li>\n        {% endfor %}\n\n    </ul>\n\n    {% if not state.showall %}\n        <div class=\"visibility-controls\">\n            <div class=\"visible-toggle-overlay\"></div>\n            <label>\n                <input [state.bind] name=\"showall\" type=\"checkbox\">\n                Read more from the archive...\n            </label>\n        </div>\n    {% endif %}\n</nav>\n\n{% if not state.showcomments %}\n    <div class=\"comment-controls\">\n        <button @click:=script.showComments>\n            Read Comment Section (Disqus)\n        </button>\n    </div>\n{% endif %}\n\n<div class=\"rainbow-square\" style=\"margin-top: 80px; padding: 10px\">\n    <div id=\"disqus_thread\"></div>\n</div>\n","/libraries/core/Page-blogArchiveMeta.json":"[\n  {\n    \"id\": -1,\n    \"title\": \"My Godot packages\",\n    \"slug\": \"godot-packages\"\n  },\n  {\n    \"id\": 5,\n    \"title\": \"Game development on Linux: Using Linux at every step of the process\",\n    \"slug\": \"getting-started-with-linux-game-development\"\n  },\n  {\n    \"id\": 6,\n    \"title\": \"Game dev with Godot: Unit testing your scripts\",\n    \"slug\": \"unit-tests-for-your-godot-scripts\"\n  },\n  {\n    \"id\": 7,\n    \"title\": \"Solo Game Dev Kanban Magic: I used to struggle with self-management, but my most recent technique seems to be working really well\",\n    \"slug\": \"solo-game-dev-kanban-magic\"\n  },\n  {\n    \"id\": 11,\n    \"title\": \"Getting started with music production on Linux: Three ways to get set up with pro-audio free software\",\n    \"slug\": \"getting-started-with-pro-audio-on-linux\"\n  },\n  {\n    \"id\": 12,\n    \"title\": \"Linux pro-audio: Trouble-shooting JACK on Ubuntu 16.04 (KXStudio repos)\",\n    \"slug\": \"troubleshooting-kxstudio-on-ubuntu-16-04\"\n  },\n  {\n    \"id\": 13,\n    \"title\": \"Snippet: NIUM&#x27;s 3D effect, in Godot\",\n    \"slug\": \"niums-3d-effect-in-godot\"\n  },\n  {\n    \"id\": 14,\n    \"title\": \"Game dev with Godot: I wrote a Godot package to crossfade between playlists and make adaptive music\",\n    \"slug\": \"game-dev-with-godot-adaptive-music-with-godot-music-mixer\"\n  },\n  {\n    \"id\": 15,\n    \"title\": \"Snippet: Godot Resource Queue\",\n    \"slug\": \"godot-resource-queue\"\n  },\n  {\n    \"id\": 16,\n    \"title\": \"Simple puzzle game graphics with Inkscape bevels\",\n    \"slug\": \"simple-puzzle-game-graphics-with-inkscape-bevels\"\n  },\n  {\n    \"id\": 17,\n    \"title\": \"Godot Pannable Camera: A re-usable camera helper for Godot\",\n    \"slug\": \"godot-pannable-camera\"\n  },\n  {\n    \"id\": 20,\n    \"title\": \"Wow, I&#x27;ve made quite a few free Godot packages by now\",\n    \"slug\": \"ive-written-quite-a-few-godot-packages\"\n  },\n  {\n    \"id\": 21,\n    \"title\": \"Godot Gestures: Pinch, twist, and drag gesture detection for mobile games\",\n    \"slug\": \"godot-gestures\"\n  },\n  {\n    \"id\": 22,\n    \"title\": \"My pre-post-mortem of rescuing my scope creeped-out puzzle game\",\n    \"slug\": \"sawdust-pre-post-mortem\"\n  },\n  {\n    \"id\": 24,\n    \"title\": \"Ludum Dare 38\",\n    \"slug\": \"ludum-dare-38\"\n  },\n  {\n    \"id\": 25,\n    \"title\": \"The Blocklings\",\n    \"slug\": \"the-blocklings\"\n  },\n  {\n    \"id\": 26,\n    \"title\": \"Sawdust\",\n    \"slug\": \"sawdust\"\n  },\n  {\n    \"id\": 27,\n    \"title\": \"Releasing Sawdust: Mini-post-mortem\",\n    \"slug\": \"releasing-sawdust\"\n  },\n  {\n    \"id\": 28,\n    \"title\": \"Porting a legacy browser graphics JS script (JSC3D) to Node.js with node-canvas and VM\",\n    \"slug\": \"porting-a-legacy-browserjs3cd-to-node-js-with-node-canvas\"\n  },\n  {\n    \"id\": 29,\n    \"title\": \"Bash profile trick: Open last used directory when starting a new terminal emulator\",\n    \"slug\": \"bash-profile-trick-open-last-used-directory-when-starting-a-new-terminal-emulator-2\"\n  },\n  {\n    \"id\": 30,\n    \"title\": \"The Right Way\\u2122 to do global npm install without sudo\",\n    \"slug\": \"the-right-way-to-do-global-npm-install-without-sudo\"\n  },\n  {\n    \"id\": 33,\n    \"title\": \"Web Developer to Game Developer: Understanding game dev as a web dev using Godot\",\n    \"slug\": \"webdev2gamedev\"\n  },\n  {\n    \"id\": 34,\n    \"title\": \"Snippet: Draining all pending coroutines with Python 3&#x27;s async features\",\n    \"slug\": \"snippet-draining-all-pending-coroutines-with-python-3s-async-features\"\n  },\n  {\n    \"id\": 35,\n    \"title\": \"JavaScript syntax cheat-sheet for total newbies\",\n    \"slug\": \"javascript-syntax-cheat-sheet-for-total-newbies\"\n  },\n  {\n    \"id\": 36,\n    \"title\": \"Snippet: Implement an ability cooldown (in the Godot game engine)\",\n    \"slug\": \"godot-ability-cooldown-snippet\"\n  },\n  {\n    \"id\": 37,\n    \"title\": \"Introducing: Whiteboard\",\n    \"slug\": \"introducing-whiteboard\"\n  },\n  {\n    \"id\": 38,\n    \"title\": \"react-jsc3d: Porting a legacy 3D rendering JavaScript library to a reusable React.js component on NPM\",\n    \"slug\": \"porting-a-jsc3d-to-react-js\"\n  },\n  {\n    \"id\": 39,\n    \"title\": \"Ardour 5.7 Review - Free software DAW\",\n    \"slug\": \"ardour-5-7-review\"\n  },\n  {\n    \"id\": 41,\n    \"title\": \"How to quickly install Mattermost on Digital Ocean\",\n    \"slug\": \"how-to-install-mattermost-on-digital-ocean\"\n  },\n  {\n    \"id\": 42,\n    \"title\": \"Installing Ubuntu 17.10 Linux on Acer Aspire 1\",\n    \"slug\": \"installing-ubuntu-17-10-linux-on-acer-aspire-1\"\n  },\n  {\n    \"id\": 43,\n    \"title\": \"Ubuntu 18.04 on Acer Aspire 1 - A114-31-C4HH and A114-31-C5GM\",\n    \"slug\": \"ubuntu-18-04-on-acer-aspire-1\"\n  },\n  {\n    \"id\": 45,\n    \"title\": \"Upgrading Mattermost using docker-compose\",\n    \"slug\": \"upgrading-mattermost\"\n  }\n]","/archive/article/dir_listing.json":"[\n  {\n    \"id\": -1,\n    \"path\": \"archive/article/-1.html\",\n    \"title\": \"My Godot packages\",\n    \"length\": 728\n  },\n  {\n    \"id\": 5,\n    \"path\": \"archive/article/5.html\",\n    \"title\": \"Game development on Linux: Using Linux at every step of the process\",\n    \"length\": 1365\n  },\n  {\n    \"id\": 6,\n    \"path\": \"archive/article/6.html\",\n    \"title\": \"Game dev with Godot: Unit testing your scripts\",\n    \"length\": 728\n  },\n  {\n    \"id\": 7,\n    \"path\": \"archive/article/7.html\",\n    \"title\": \"Solo Game Dev Kanban Magic: I used to struggle with self-management, but my most recent technique seems to be working really well\",\n    \"length\": 1787\n  },\n  {\n    \"id\": 11,\n    \"path\": \"archive/article/11.html\",\n    \"title\": \"Getting started with music production on Linux: Three ways to get set up with pro-audio free software\",\n    \"length\": 1309\n  },\n  {\n    \"id\": 12,\n    \"path\": \"archive/article/12.html\",\n    \"title\": \"Linux pro-audio: Trouble-shooting JACK on Ubuntu 16.04 (KXStudio repos)\",\n    \"length\": 550\n  },\n  {\n    \"id\": 13,\n    \"path\": \"archive/article/13.html\",\n    \"title\": \"Snippet: NIUM&#x27;s 3D effect, in Godot\",\n    \"length\": 246\n  },\n  {\n    \"id\": 14,\n    \"path\": \"archive/article/14.html\",\n    \"title\": \"Game dev with Godot: I wrote a Godot package to crossfade between playlists and make adaptive music\",\n    \"length\": 460\n  },\n  {\n    \"id\": 15,\n    \"path\": \"archive/article/15.html\",\n    \"title\": \"Snippet: Godot Resource Queue\",\n    \"length\": 84\n  },\n  {\n    \"id\": 16,\n    \"path\": \"archive/article/16.html\",\n    \"title\": \"Simple puzzle game graphics with Inkscape bevels\",\n    \"length\": 293\n  },\n  {\n    \"id\": 17,\n    \"path\": \"archive/article/17.html\",\n    \"title\": \"Godot Pannable Camera: A re-usable camera helper for Godot\",\n    \"length\": 475\n  },\n  {\n    \"id\": 20,\n    \"path\": \"archive/article/20.html\",\n    \"title\": \"Wow, I&#x27;ve made quite a few free Godot packages by now\",\n    \"length\": 172\n  },\n  {\n    \"id\": 21,\n    \"path\": \"archive/article/21.html\",\n    \"title\": \"Godot Gestures: Pinch, twist, and drag gesture detection for mobile games\",\n    \"length\": 417\n  },\n  {\n    \"id\": 22,\n    \"path\": \"archive/article/22.html\",\n    \"title\": \"My pre-post-mortem of rescuing my scope creeped-out puzzle game\",\n    \"length\": 1014\n  },\n  {\n    \"id\": 24,\n    \"path\": \"archive/article/24.html\",\n    \"title\": \"Ludum Dare 38\",\n    \"length\": 62\n  },\n  {\n    \"id\": 25,\n    \"path\": \"archive/article/25.html\",\n    \"title\": \"The Blocklings\",\n    \"length\": 100\n  },\n  {\n    \"id\": 26,\n    \"path\": \"archive/article/26.html\",\n    \"title\": \"Sawdust\",\n    \"length\": 200\n  },\n  {\n    \"id\": 27,\n    \"path\": \"archive/article/27.html\",\n    \"title\": \"Releasing Sawdust: Mini-post-mortem\",\n    \"length\": 381\n  },\n  {\n    \"id\": 28,\n    \"path\": \"archive/article/28.html\",\n    \"title\": \"Porting a legacy browser graphics JS script (JSC3D) to Node.js with node-canvas and VM\",\n    \"length\": 802\n  },\n  {\n    \"id\": 29,\n    \"path\": \"archive/article/29.html\",\n    \"title\": \"Bash profile trick: Open last used directory when starting a new terminal emulator\",\n    \"length\": 204\n  },\n  {\n    \"id\": 30,\n    \"path\": \"archive/article/30.html\",\n    \"title\": \"The Right Way\\u2122 to do global npm install without sudo\",\n    \"length\": 406\n  },\n  {\n    \"id\": 33,\n    \"path\": \"archive/article/33.html\",\n    \"title\": \"Web Developer to Game Developer: Understanding game dev as a web dev using Godot\",\n    \"length\": 1226\n  },\n  {\n    \"id\": 34,\n    \"path\": \"archive/article/34.html\",\n    \"title\": \"Snippet: Draining all pending coroutines with Python 3&#x27;s async features\",\n    \"length\": 102\n  },\n  {\n    \"id\": 35,\n    \"path\": \"archive/article/35.html\",\n    \"title\": \"JavaScript syntax cheat-sheet for total newbies\",\n    \"length\": 705\n  },\n  {\n    \"id\": 36,\n    \"path\": \"archive/article/36.html\",\n    \"title\": \"Snippet: Implement an ability cooldown (in the Godot game engine)\",\n    \"length\": 105\n  },\n  {\n    \"id\": 37,\n    \"path\": \"archive/article/37.html\",\n    \"title\": \"Introducing: Whiteboard\",\n    \"length\": 369\n  },\n  {\n    \"id\": 38,\n    \"path\": \"archive/article/38.html\",\n    \"title\": \"react-jsc3d: Porting a legacy 3D rendering JavaScript library to a reusable React.js component on NPM\",\n    \"length\": 810\n  },\n  {\n    \"id\": 39,\n    \"path\": \"archive/article/39.html\",\n    \"title\": \"Ardour 5.7 Review - Free software DAW\",\n    \"length\": 1580\n  },\n  {\n    \"id\": 41,\n    \"path\": \"archive/article/41.html\",\n    \"title\": \"How to quickly install Mattermost on Digital Ocean\",\n    \"length\": 551\n  },\n  {\n    \"id\": 42,\n    \"path\": \"archive/article/42.html\",\n    \"title\": \"Installing Ubuntu 17.10 Linux on Acer Aspire 1\",\n    \"length\": 731\n  },\n  {\n    \"id\": 43,\n    \"path\": \"archive/article/43.html\",\n    \"title\": \"Ubuntu 18.04 on Acer Aspire 1 - A114-31-C4HH and A114-31-C5GM\",\n    \"length\": 1242\n  },\n  {\n    \"id\": 45,\n    \"path\": \"archive/article/45.html\",\n    \"title\": \"Upgrading Mattermost using docker-compose\",\n    \"length\": 642\n  }\n]","/libraries/core/ArchiveSidebar.css":"/*\n:root {\n    --page-width: 800px;\n    --bg1: #ffffff;\n    --bg2: #e5e5f7;\n    --accent1: #f2cd54;\n    --accent2: #91d370;\n    --accent3: #bca0ff;\n    --leftoffset: -80px;\n}\n*/\n\na {\n    background: white;\n    color: black;\n}\n\na.active {\n    background: var(--accent1);\n}\nli {\n    font-size: 1.3rem;\n    line-height: 2.0rem;\n}\n\nnav {\n    border: 1px solid black;\n    padding-top: 20px;\n}\n\nul {\n    margin-left: -30px;\n}\n\nul > h2 {\n    font-size: 25px;\n    margin-top: 50px;\n    /*\n    float: left;\n    shape-outside: circle();\n    height: auto;\n    width: 125px;\n    */\n}\nul > h2 {\n    text-align: right;\n    background: black;\n    color: white;\n    height: 28px;\n}\n\nul > p > span  {\n    font-size: 16px;\n    background: white;\n    font-style: italic;\n}\n\n\n.visible-toggle {\n    display: none;\n}\n\n.visible-toggle-overlay {\n    opacity: 0.5;\n    position: relative;\n    top: -20px;\n    height: 20px;\n    background: repeating-linear-gradient(\n        -55deg,\n        transparent,\n        transparent 10px,\n        var(--accent1) 10px,\n        var(--accent1) 20px\n    );\n}\n\nul {\n    height: 400px;\n    overflow: hidden;\n}\n\nul.active {\n    height: auto;\n}\n\n.visibility-controls > label,\n.comment-controls > button {\n    margin-left: 20px;\n    font-size: 20px;\n    border: 3px var(--accent3) solid;\n    padding: 20px;\n}\n\n.comment-controls > button {\n    float: right;\n    margin-top: -20px;\n    background: transparent;\n    margin-right: 20px;\n}\n\n.visibility-controls > label:hover,\n.comment-controls > button:hover {\n    background: var(--accent3);\n    cursor: pointer;\n}\n\n.visibility-controls > label > input {\n    display: none;\n}\n\n@media (min-width: 1330px) {\n    nav {\n        position: absolute;\n        left: calc(2vw);\n        top: 100px;\n        z-index: 10;\n        width: calc(100px + 10vw);\n    }\n    ul {\n        height: auto;\n    }\n\n    .visibility-controls {\n        display: none;\n    }\n    .visible-toggle-overlay {\n        display: none;\n    }\n}\n\n\n\n"};currentModulo.assets.functions["1irpqj6"]= function (tagName, modulo){

    const { Props, Template, StaticData, Script } = modulo.registry.cparts;
    const confArray = modulo.defs['x_x_Page'];
    const initRenderObj = {};
    initRenderObj.staticdata = StaticData.factoryCallback(initRenderObj, confArray[2], modulo);
    initRenderObj.script = Script.factoryCallback(initRenderObj, confArray[3], modulo);
    class Page extends modulo.registry.utils.BaseElement {
        constructor() {
            super();
            this.modulo = modulo;
            this.defHash = 'x15vslm';
            this.initRenderObj = initRenderObj;
            this.moduloChildrenData = confArray;
            this.moduloComponentConf = modulo.parentDefs['x_x_Page'];
        }
    }
    modulo.globals.customElements.define(tagName, Page);
    //console.log("Registered: Page as " + tagName);
    return Page;

};
currentModulo.assets.functions["x1fnhbnv"]= function (tagName, modulo){

    const { Props, Template, StaticData, State, Script, Style } = modulo.registry.cparts;
    const confArray = modulo.defs['x_x_ArchiveSidebar'];
    const initRenderObj = {};
    initRenderObj.staticdata = StaticData.factoryCallback(initRenderObj, confArray[2], modulo);
    initRenderObj.script = Script.factoryCallback(initRenderObj, confArray[4], modulo);
    class ArchiveSidebar extends modulo.registry.utils.BaseElement {
        constructor() {
            super();
            this.modulo = modulo;
            this.defHash = '1cjkjfq';
            this.initRenderObj = initRenderObj;
            this.moduloChildrenData = confArray;
            this.moduloComponentConf = modulo.parentDefs['x_x_ArchiveSidebar'];
        }
    }
    modulo.globals.customElements.define(tagName, ArchiveSidebar);
    //console.log("Registered: ArchiveSidebar as " + tagName);
    return ArchiveSidebar;

};
currentModulo.assets.functions["1i82cog"]= function (tagName, modulo){

    const { Props, Template, StaticData } = modulo.registry.cparts;
    const confArray = modulo.defs['x_x_ArchiveList'];
    const initRenderObj = {};
    initRenderObj.staticdata = StaticData.factoryCallback(initRenderObj, confArray[2], modulo);
    class ArchiveList extends modulo.registry.utils.BaseElement {
        constructor() {
            super();
            this.modulo = modulo;
            this.defHash = 'xceoeun';
            this.initRenderObj = initRenderObj;
            this.moduloChildrenData = confArray;
            this.moduloComponentConf = modulo.parentDefs['x_x_ArchiveList'];
        }
    }
    modulo.globals.customElements.define(tagName, ArchiveList);
    //console.log("Registered: ArchiveList as " + tagName);
    return ArchiveList;

};
currentModulo.assets.functions["x4h29h5"]= function (tagName, modulo){

    const { Template, State, Script, StaticData, Style } = modulo.registry.cparts;
    const confArray = modulo.defs['x_x_SoundcloudButton'];
    const initRenderObj = {};
    initRenderObj.script = Script.factoryCallback(initRenderObj, confArray[2], modulo);
    initRenderObj.staticdata = StaticData.factoryCallback(initRenderObj, confArray[3], modulo);
    class SoundcloudButton extends modulo.registry.utils.BaseElement {
        constructor() {
            super();
            this.modulo = modulo;
            this.defHash = 'xg764v5';
            this.initRenderObj = initRenderObj;
            this.moduloChildrenData = confArray;
            this.moduloComponentConf = modulo.parentDefs['x_x_SoundcloudButton'];
        }
    }
    modulo.globals.customElements.define(tagName, SoundcloudButton);
    //console.log("Registered: SoundcloudButton as " + tagName);
    return SoundcloudButton;

};
currentModulo.assets.functions["x1fjljnn"]= function (CTX, G){
var OUT=[];
  OUT.push("<head>\n    <title>"); // "<head><title>"
  OUT.push(G.escapeText(G.filters["default"](CTX.props.tabtitle,CTX.props.pagetitle))); // "props.tabtitle|default:props.pagetitle"
  OUT.push("</title>\n    <meta charset=\"utf8\" />\n    <link rel=\"stylesheet\" href=\"/libraries/core/Page.css\">\n    <link rel=\"stylesheet\" href=\"/libraries/core/Page-reset.css\">\n    <link rel=\"stylesheet\" href=\"/libraries/core/Page-article.css\">\n</head>\n\n<body>\n    <main class=\"Page-wrapper\">\n        <div class=\"Page Page-relative\">\n            "); // "</title><meta charset=\"utf8\" /><link rel=\"stylesheet\" href=\"/libraries/core/Page.css\"><link rel=\"stylesheet\" href=\"/libraries/core/Page-reset.css\"><link rel=\"stylesheet\" href=\"/libraries/core/Page-article.css\"></head><body><main class=\"Page-wrapper\"><div class=\"Page Page-relative\">"
  /* // "comment"
  OUT.push("\n            "); // ""
  if (CTX.props.pagetitle) { // "if props.pagetitle"
  OUT.push("\n                <nav class=\"Page-trNav\">\n                    <ul>\n                        <li><a href=\"/\">HOME</a></li>\n                        <!--<li><a href=\"/hiring.html\">EMPLOYMENT</a></li>-->\n                        <li><a href=\"/projects/\">PROJECTS</a></li>\n                        <li><a href=\"/articles/\">ARTICLES</a></li>\n                    </ul>\n                </nav>\n            "); // "<nav class=\"Page-trNav\"><ul><li><a href=\"/\">HOME</a></li><!--<li><a href=\"/hiring.html\">EMPLOYMENT</a></li>--><li><a href=\"/projects/\">PROJECTS</a></li><li><a href=\"/articles/\">ARTICLES</a></li></ul></nav>"
  } // "endif"
  OUT.push("\n            "); // ""
  */ // "endcomment"
  OUT.push("\n            "); // ""
  if (CTX.props.archivedid) { // "if props.archivedid"
  OUT.push("\n                <h1>michaelb.org #"); // "<h1>michaelb.org #"
  OUT.push(G.escapeText(CTX.props.archivedid)); // "props.archivedid"
  OUT.push("</h1>\n                <hr />\n            "); // "</h1><hr />"
  } // "endif"
  OUT.push("\n            <img src=\"/static/img/misc_images/logo_2.png\" />\n            "); // "<img src=\"/static/img/misc_images/logo_2.png\" />"
  if (CTX.props.pagetitle) { // "if props.pagetitle"
  OUT.push("\n                <h2 class=\"Page-articleTitle\"><span>"); // "<h2 class=\"Page-articleTitle\"><span>"
  OUT.push(G.escapeText(G.filters["safe"](CTX.props.pagetitle))); // "props.pagetitle|safe"
  OUT.push("</span></h2>\n\n                <nav class=\"Page-bcNav\">\n                    <ul>\n                        <li><a href=\"/\">HOME</a></li>\n                        "); // "</span></h2><nav class=\"Page-bcNav\"><ul><li><a href=\"/\">HOME</a></li>"
  if (CTX.props.bc1) { // "if props.bc1"
  OUT.push("\n                            <li><a href=\"/"); // "<li><a href=\"/"
  OUT.push(G.escapeText(CTX.props.bc1path)); // "props.bc1path"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(G.filters["upper"](CTX.props.bc1))); // "props.bc1|upper"
  OUT.push("</a></li>\n                        "); // "</a></li>"
  } // "endif"
  OUT.push("\n                        "); // ""
  if (CTX.props.bc2) { // "if props.bc2"
  OUT.push("\n                            <li><a href=\"/"); // "<li><a href=\"/"
  OUT.push(G.escapeText(CTX.props.bc2path)); // "props.bc2path"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(G.filters["upper"](CTX.props.bc2))); // "props.bc2|upper"
  OUT.push("</a></li>\n                        "); // "</a></li>"
  } // "endif"
  OUT.push("\n                        <li><a href=\"#\">"); // "<li><a href=\"#\">"
  OUT.push(G.escapeText(G.filters["upper"](CTX.props.pagetitle))); // "props.pagetitle|upper"
  OUT.push("</a></li>\n                    </ul>\n                </nav>\n\n            "); // "</a></li></ul></nav>"
  } // "endif"
  OUT.push("\n        </div>\n        <slot class=\"Page\n            "); // "</div><slot class=\"Page"
  if (CTX.props.archivedid) { // "if props.archivedid"
  OUT.push("\n                Page-article\n            "); // "Page-article"
  } // "endif"
  OUT.push("\n        \"></slot>\n        <div class=\"Page\">\n            "); // "\"></slot><div class=\"Page\">"
  if (CTX.props.archivedid) { // "if props.archivedid"
  OUT.push("\n                <x-ArchiveSidebar\n                    style=\"margin-top: 100px\"\n                    qid:="); // "<x-ArchiveSidebar style=\"margin-top: 100px\" qid:="
  OUT.push(G.escapeText(CTX.props.archivedid)); // "props.archivedid"
  OUT.push("\n                    title=\""); // "title=\""
  OUT.push(G.escapeText(CTX.props.pagetitle)); // "props.pagetitle"
  OUT.push("\"\n                ></x-ArchiveSidebar>\n            "); // "\" ></x-ArchiveSidebar>"
  } // "endif"
  OUT.push("\n        </div>\n    </main>\n    <footer>\n        &copy; "); // "</div></main><footer> &copy;"
  OUT.push(G.escapeText(CTX.script.exports.year)); // "script.exports.year"
  OUT.push(" Michael Bethencourt - All original\n        content here is licensed under <a\n        href=\"https://creativecommons.org/licenses/by-nd/4.0/\">CC BY-ND</a>,\n        unless otherwise noted\n    </footer>\n</body>\n"); // "Michael Bethencourt - All original content here is licensed under <a href=\"https://creativecommons.org/licenses/by-nd/4.0/\">CC BY-ND</a>, unless otherwise noted </footer></body>"

return OUT.join("");
};
currentModulo.assets.functions["t722hv"]= function (){
return [
  {
    "id": -1,
    "title": "My Godot packages",
    "slug": "godot-packages"
  },
  {
    "id": 5,
    "title": "Game development on Linux: Using Linux at every step of the process",
    "slug": "getting-started-with-linux-game-development"
  },
  {
    "id": 6,
    "title": "Game dev with Godot: Unit testing your scripts",
    "slug": "unit-tests-for-your-godot-scripts"
  },
  {
    "id": 7,
    "title": "Solo Game Dev Kanban Magic: I used to struggle with self-management, but my most recent technique seems to be working really well",
    "slug": "solo-game-dev-kanban-magic"
  },
  {
    "id": 11,
    "title": "Getting started with music production on Linux: Three ways to get set up with pro-audio free software",
    "slug": "getting-started-with-pro-audio-on-linux"
  },
  {
    "id": 12,
    "title": "Linux pro-audio: Trouble-shooting JACK on Ubuntu 16.04 (KXStudio repos)",
    "slug": "troubleshooting-kxstudio-on-ubuntu-16-04"
  },
  {
    "id": 13,
    "title": "Snippet: NIUM&#x27;s 3D effect, in Godot",
    "slug": "niums-3d-effect-in-godot"
  },
  {
    "id": 14,
    "title": "Game dev with Godot: I wrote a Godot package to crossfade between playlists and make adaptive music",
    "slug": "game-dev-with-godot-adaptive-music-with-godot-music-mixer"
  },
  {
    "id": 15,
    "title": "Snippet: Godot Resource Queue",
    "slug": "godot-resource-queue"
  },
  {
    "id": 16,
    "title": "Simple puzzle game graphics with Inkscape bevels",
    "slug": "simple-puzzle-game-graphics-with-inkscape-bevels"
  },
  {
    "id": 17,
    "title": "Godot Pannable Camera: A re-usable camera helper for Godot",
    "slug": "godot-pannable-camera"
  },
  {
    "id": 20,
    "title": "Wow, I&#x27;ve made quite a few free Godot packages by now",
    "slug": "ive-written-quite-a-few-godot-packages"
  },
  {
    "id": 21,
    "title": "Godot Gestures: Pinch, twist, and drag gesture detection for mobile games",
    "slug": "godot-gestures"
  },
  {
    "id": 22,
    "title": "My pre-post-mortem of rescuing my scope creeped-out puzzle game",
    "slug": "sawdust-pre-post-mortem"
  },
  {
    "id": 24,
    "title": "Ludum Dare 38",
    "slug": "ludum-dare-38"
  },
  {
    "id": 25,
    "title": "The Blocklings",
    "slug": "the-blocklings"
  },
  {
    "id": 26,
    "title": "Sawdust",
    "slug": "sawdust"
  },
  {
    "id": 27,
    "title": "Releasing Sawdust: Mini-post-mortem",
    "slug": "releasing-sawdust"
  },
  {
    "id": 28,
    "title": "Porting a legacy browser graphics JS script (JSC3D) to Node.js with node-canvas and VM",
    "slug": "porting-a-legacy-browserjs3cd-to-node-js-with-node-canvas"
  },
  {
    "id": 29,
    "title": "Bash profile trick: Open last used directory when starting a new terminal emulator",
    "slug": "bash-profile-trick-open-last-used-directory-when-starting-a-new-terminal-emulator-2"
  },
  {
    "id": 30,
    "title": "The Right Way\u2122 to do global npm install without sudo",
    "slug": "the-right-way-to-do-global-npm-install-without-sudo"
  },
  {
    "id": 33,
    "title": "Web Developer to Game Developer: Understanding game dev as a web dev using Godot",
    "slug": "webdev2gamedev"
  },
  {
    "id": 34,
    "title": "Snippet: Draining all pending coroutines with Python 3&#x27;s async features",
    "slug": "snippet-draining-all-pending-coroutines-with-python-3s-async-features"
  },
  {
    "id": 35,
    "title": "JavaScript syntax cheat-sheet for total newbies",
    "slug": "javascript-syntax-cheat-sheet-for-total-newbies"
  },
  {
    "id": 36,
    "title": "Snippet: Implement an ability cooldown (in the Godot game engine)",
    "slug": "godot-ability-cooldown-snippet"
  },
  {
    "id": 37,
    "title": "Introducing: Whiteboard",
    "slug": "introducing-whiteboard"
  },
  {
    "id": 38,
    "title": "react-jsc3d: Porting a legacy 3D rendering JavaScript library to a reusable React.js component on NPM",
    "slug": "porting-a-jsc3d-to-react-js"
  },
  {
    "id": 39,
    "title": "Ardour 5.7 Review - Free software DAW",
    "slug": "ardour-5-7-review"
  },
  {
    "id": 41,
    "title": "How to quickly install Mattermost on Digital Ocean",
    "slug": "how-to-install-mattermost-on-digital-ocean"
  },
  {
    "id": 42,
    "title": "Installing Ubuntu 17.10 Linux on Acer Aspire 1",
    "slug": "installing-ubuntu-17-10-linux-on-acer-aspire-1"
  },
  {
    "id": 43,
    "title": "Ubuntu 18.04 on Acer Aspire 1 - A114-31-C4HH and A114-31-C5GM",
    "slug": "ubuntu-18-04-on-acer-aspire-1"
  },
  {
    "id": 45,
    "title": "Upgrading Mattermost using docker-compose",
    "slug": "upgrading-mattermost"
  }
];
};
currentModulo.assets.functions["xom3t1b"]= function (modulo, require, component, library, props, style, template, staticdata, script, state, element, cparts){var script = { exports: {} };  function __set(name, value) { if (name === 'modulo') modulo = value; if (name === 'require') require = value; if (name === 'component') component = value; if (name === 'library') library = value; if (name === 'props') props = value; if (name === 'style') style = value; if (name === 'template') template = value; if (name === 'staticdata') staticdata = value; if (name === 'script') script = value; if (name === 'state') state = value; if (name === 'element') element = value; if (name === 'cparts') cparts = value; }

        function initializedCallback() {
            // "auto404" will attempt to auto-redirect based on archived article json
            if (props.redirect && props.redirect === 'auto404') {
                const url = '' + window.location.pathname;
                for (const page of staticdata) {
                    if (url.includes(page.slug)) {
                        const newPath = '/archive/articles/' + page.id + '.html';
                        window.location.replace(newPath);
                        break;
                    }
                }
            }

            return {
                year: (new Date()).getFullYear(),
            }
        }
    
return { "initializedCallback": typeof initializedCallback !== "undefined" ? initializedCallback : undefined,
 setLocalVariable: __set, exports: script.exports}
};
currentModulo.assets.functions["ssaeej"]= function (CTX, G){
var OUT=[];
  OUT.push("\n\n<nav>\n    <ul  "); // "<nav><ul"
  if (CTX.state.showall) { // "if state.showall"
  OUT.push("class=\"active\""); // "class=\"active\""
  } // "endif"
  OUT.push(">\n        <p>\n            #"); // "><p> #"
  OUT.push(G.escapeText(CTX.props.qid)); // "props.qid"
  OUT.push(" -\n            <a class=\"active\" href=\"#\">"); // "- <a class=\"active\" href=\"#\">"
  OUT.push(G.escapeText(CTX.props.title)); // "props.title"
  OUT.push("</a> <br />\n            <span>This article is from a previous blog, actively published\n            between 2016-2019.</span>\n        </p>\n\n\n        <h2>Popular</h2>\n\n        "); // "</a><br /><span>This article is from a previous blog, actively published between 2016-2019.</span></p><h2>Popular</h2>"
  OUT.push("\n        "); // ""
  var ARR0=G.filters["reversed"](CTX.staticdata);for (var KEY in ARR0) {CTX. info=ARR0[KEY]; // "for info in staticdata|reversed"
  OUT.push("\n            "); // ""
  if (("5,11,33,38,").includes ? ("5,11,33,38,").includes(G.filters["add"](CTX.info.id,",")) : (G.filters["add"](CTX.info.id,",") in "5,11,33,38,")) { // "if info.id|add:\",\" in \"5,11,33,38,\""
  OUT.push("\n                <li>#"); // "<li>#"
  OUT.push(G.escapeText(CTX.info.id)); // "info.id"
  OUT.push(" -\n                    <a class=\""); // "- <a class=\""
  if (CTX.info.id === CTX.props.qid) { // "if info.id == props.qid"
  OUT.push("active"); // "active"
  } // "endif"
  OUT.push("\"\n                        href=\"/archive/article/"); // "\" href=\"/archive/article/"
  OUT.push(G.escapeText(CTX.info.id)); // "info.id"
  OUT.push(".html\">"); // ".html\">"
  OUT.push(G.escapeText(G.filters["safe"](CTX.info.title))); // "info.title|safe"
  OUT.push("</a>\n                </li>\n            "); // "</a></li>"
  } // "endif"
  OUT.push("\n        "); // ""
  } // "endfor"
  OUT.push("\n\n        <h2>All archived articles</h2>\n        "); // "<h2>All archived articles</h2>"
  var ARR0=G.filters["reversed"](CTX.staticdata);for (var KEY in ARR0) {CTX. info=ARR0[KEY]; // "for info in staticdata|reversed"
  OUT.push("\n            <li>#"); // "<li>#"
  OUT.push(G.escapeText(CTX.info.id)); // "info.id"
  OUT.push(" -\n                <a class=\""); // "- <a class=\""
  if (CTX.info.id === CTX.props.qid) { // "if info.id == props.qid"
  OUT.push("active"); // "active"
  } // "endif"
  OUT.push("\"\n                    href=\"/archive/article/"); // "\" href=\"/archive/article/"
  OUT.push(G.escapeText(CTX.info.id)); // "info.id"
  OUT.push(".html\">"); // ".html\">"
  OUT.push(G.escapeText(G.filters["safe"](CTX.info.title))); // "info.title|safe"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n\n    </ul>\n\n    "); // "</ul>"
  if (!(CTX.state.showall)) { // "if not state.showall"
  OUT.push("\n        <div class=\"visibility-controls\">\n            <div class=\"visible-toggle-overlay\"></div>\n            <label>\n                <input [state.bind] name=\"showall\" type=\"checkbox\">\n                Read more from the archive...\n            </label>\n        </div>\n    "); // "<div class=\"visibility-controls\"><div class=\"visible-toggle-overlay\"></div><label><input [state.bind] name=\"showall\" type=\"checkbox\"> Read more from the archive... </label></div>"
  } // "endif"
  OUT.push("\n</nav>\n\n"); // "</nav>"
  if (!(CTX.state.showcomments)) { // "if not state.showcomments"
  OUT.push("\n    <div class=\"comment-controls\">\n        <button @click:=script.showComments>\n            Read Comment Section (Disqus)\n        </button>\n    </div>\n"); // "<div class=\"comment-controls\"><button @click:=script.showComments> Read Comment Section (Disqus) </button></div>"
  } // "endif"
  OUT.push("\n\n<div class=\"rainbow-square\" style=\"margin-top: 80px; padding: 10px\">\n    <div id=\"disqus_thread\"></div>\n</div>\n"); // "<div class=\"rainbow-square\" style=\"margin-top: 80px; padding: 10px\"><div id=\"disqus_thread\"></div></div>"

return OUT.join("");
};
currentModulo.assets.functions["x17ak53k"]= function (){
return [
  {
    "id": -1,
    "path": "archive/article/-1.html",
    "title": "My Godot packages",
    "length": 728
  },
  {
    "id": 5,
    "path": "archive/article/5.html",
    "title": "Game development on Linux: Using Linux at every step of the process",
    "length": 1365
  },
  {
    "id": 6,
    "path": "archive/article/6.html",
    "title": "Game dev with Godot: Unit testing your scripts",
    "length": 728
  },
  {
    "id": 7,
    "path": "archive/article/7.html",
    "title": "Solo Game Dev Kanban Magic: I used to struggle with self-management, but my most recent technique seems to be working really well",
    "length": 1787
  },
  {
    "id": 11,
    "path": "archive/article/11.html",
    "title": "Getting started with music production on Linux: Three ways to get set up with pro-audio free software",
    "length": 1309
  },
  {
    "id": 12,
    "path": "archive/article/12.html",
    "title": "Linux pro-audio: Trouble-shooting JACK on Ubuntu 16.04 (KXStudio repos)",
    "length": 550
  },
  {
    "id": 13,
    "path": "archive/article/13.html",
    "title": "Snippet: NIUM&#x27;s 3D effect, in Godot",
    "length": 246
  },
  {
    "id": 14,
    "path": "archive/article/14.html",
    "title": "Game dev with Godot: I wrote a Godot package to crossfade between playlists and make adaptive music",
    "length": 460
  },
  {
    "id": 15,
    "path": "archive/article/15.html",
    "title": "Snippet: Godot Resource Queue",
    "length": 84
  },
  {
    "id": 16,
    "path": "archive/article/16.html",
    "title": "Simple puzzle game graphics with Inkscape bevels",
    "length": 293
  },
  {
    "id": 17,
    "path": "archive/article/17.html",
    "title": "Godot Pannable Camera: A re-usable camera helper for Godot",
    "length": 475
  },
  {
    "id": 20,
    "path": "archive/article/20.html",
    "title": "Wow, I&#x27;ve made quite a few free Godot packages by now",
    "length": 172
  },
  {
    "id": 21,
    "path": "archive/article/21.html",
    "title": "Godot Gestures: Pinch, twist, and drag gesture detection for mobile games",
    "length": 417
  },
  {
    "id": 22,
    "path": "archive/article/22.html",
    "title": "My pre-post-mortem of rescuing my scope creeped-out puzzle game",
    "length": 1014
  },
  {
    "id": 24,
    "path": "archive/article/24.html",
    "title": "Ludum Dare 38",
    "length": 62
  },
  {
    "id": 25,
    "path": "archive/article/25.html",
    "title": "The Blocklings",
    "length": 100
  },
  {
    "id": 26,
    "path": "archive/article/26.html",
    "title": "Sawdust",
    "length": 200
  },
  {
    "id": 27,
    "path": "archive/article/27.html",
    "title": "Releasing Sawdust: Mini-post-mortem",
    "length": 381
  },
  {
    "id": 28,
    "path": "archive/article/28.html",
    "title": "Porting a legacy browser graphics JS script (JSC3D) to Node.js with node-canvas and VM",
    "length": 802
  },
  {
    "id": 29,
    "path": "archive/article/29.html",
    "title": "Bash profile trick: Open last used directory when starting a new terminal emulator",
    "length": 204
  },
  {
    "id": 30,
    "path": "archive/article/30.html",
    "title": "The Right Way\u2122 to do global npm install without sudo",
    "length": 406
  },
  {
    "id": 33,
    "path": "archive/article/33.html",
    "title": "Web Developer to Game Developer: Understanding game dev as a web dev using Godot",
    "length": 1226
  },
  {
    "id": 34,
    "path": "archive/article/34.html",
    "title": "Snippet: Draining all pending coroutines with Python 3&#x27;s async features",
    "length": 102
  },
  {
    "id": 35,
    "path": "archive/article/35.html",
    "title": "JavaScript syntax cheat-sheet for total newbies",
    "length": 705
  },
  {
    "id": 36,
    "path": "archive/article/36.html",
    "title": "Snippet: Implement an ability cooldown (in the Godot game engine)",
    "length": 105
  },
  {
    "id": 37,
    "path": "archive/article/37.html",
    "title": "Introducing: Whiteboard",
    "length": 369
  },
  {
    "id": 38,
    "path": "archive/article/38.html",
    "title": "react-jsc3d: Porting a legacy 3D rendering JavaScript library to a reusable React.js component on NPM",
    "length": 810
  },
  {
    "id": 39,
    "path": "archive/article/39.html",
    "title": "Ardour 5.7 Review - Free software DAW",
    "length": 1580
  },
  {
    "id": 41,
    "path": "archive/article/41.html",
    "title": "How to quickly install Mattermost on Digital Ocean",
    "length": 551
  },
  {
    "id": 42,
    "path": "archive/article/42.html",
    "title": "Installing Ubuntu 17.10 Linux on Acer Aspire 1",
    "length": 731
  },
  {
    "id": 43,
    "path": "archive/article/43.html",
    "title": "Ubuntu 18.04 on Acer Aspire 1 - A114-31-C4HH and A114-31-C5GM",
    "length": 1242
  },
  {
    "id": 45,
    "path": "archive/article/45.html",
    "title": "Upgrading Mattermost using docker-compose",
    "length": 642
  }
];
};
currentModulo.assets.functions["p5rrj7"]= function (modulo, require, component, library, props, style, template, staticdata, script, state, element, cparts){var script = { exports: {} };  function __set(name, value) { if (name === 'modulo') modulo = value; if (name === 'require') require = value; if (name === 'component') component = value; if (name === 'library') library = value; if (name === 'props') props = value; if (name === 'style') style = value; if (name === 'template') template = value; if (name === 'staticdata') staticdata = value; if (name === 'script') script = value; if (name === 'state') state = value; if (name === 'element') element = value; if (name === 'cparts') cparts = value; }

        function showComments() {
            state.showcomments = true;
            var disqus_shortname = 'michaelb'; // required: replace example with your forum shortname
            var disqus_identifier = String(props.qid);
            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function() {
                    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        }
    
return { "showComments": typeof showComments !== "undefined" ? showComments : undefined,
 setLocalVariable: __set, exports: script.exports}
};
currentModulo.assets.functions["x1apmipg"]= function (CTX, G){
var OUT=[];
  OUT.push("\n        "); // ""
  var ARR0=G.filters["reversed"](CTX.staticdata);for (var KEY in ARR0) {CTX. info=ARR0[KEY]; // "for info in staticdata|reversed"
  OUT.push("\n            <li>#"); // "<li>#"
  OUT.push(G.escapeText(CTX.info.id)); // "info.id"
  OUT.push(" -\n                <a class=\""); // "- <a class=\""
  if (CTX.info.id === CTX.props.qid) { // "if info.id == props.qid"
  OUT.push("active"); // "active"
  } // "endif"
  OUT.push("\" href=\"/archive/article/"); // "\" href=\"/archive/article/"
  OUT.push(G.escapeText(CTX.info.id)); // "info.id"
  OUT.push(".html\">"); // ".html\">"
  OUT.push(G.escapeText(G.filters["safe"](CTX.info.title))); // "info.title|safe"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    "); // ""

return OUT.join("");
};
currentModulo.assets.functions["u07hrv"]= function (CTX, G){
var OUT=[];
  OUT.push("\n        "); // ""
  if (CTX.state.isvisible) { // "if state.isvisible"
  OUT.push("\n            <iframe width=\"100%\" height=\"100\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367015547&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true\"></iframe>\n        "); // "<iframe width=\"100%\" height=\"100\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367015547&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true\"></iframe>"
  } else { // "else"
  OUT.push("\n            <a class=\"Btn\" @click:=\"script.show\">\n                <img src=\"/static/img/music_related/soundcloud_the_mission_begins.png\" alt=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\" title=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\">\n            </a>\n        "); // "<a class=\"Btn\" @click:=\"script.show\"><img src=\"/static/img/music_related/soundcloud_the_mission_begins.png\" alt=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\" title=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\"></a>"
  } // "endif"
  OUT.push("\n    "); // ""

return OUT.join("");
};
currentModulo.assets.functions["1snm034"]= function (modulo, require, component, library, props, style, template, staticdata, script, state, element, cparts){var script = { exports: {} };  function __set(name, value) { if (name === 'modulo') modulo = value; if (name === 'require') require = value; if (name === 'component') component = value; if (name === 'library') library = value; if (name === 'props') props = value; if (name === 'style') style = value; if (name === 'template') template = value; if (name === 'staticdata') staticdata = value; if (name === 'script') script = value; if (name === 'state') state = value; if (name === 'element') element = value; if (name === 'cparts') cparts = value; }

        function show(target, e) {
            state.isvisible = true;
        }
    
return { "show": typeof show !== "undefined" ? show : undefined,
 setLocalVariable: __set, exports: script.exports}
};
currentModulo.assets.functions['1irpqj6']('x-page', currentModulo);

currentModulo.assets.functions['x1fnhbnv']('x-archivesidebar', currentModulo);

currentModulo.assets.functions['1i82cog']('x-archivelist', currentModulo);

currentModulo.assets.functions['x4h29h5']('x-soundcloudbutton', currentModulo);
