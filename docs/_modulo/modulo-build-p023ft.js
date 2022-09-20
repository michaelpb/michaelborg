Modulo.assets.functions["h69h2p"]= function (CTX, G){
var OUT=[];
OUT.push("<head>\n    <title>"); // "<head>\n    <title>"
OUT.push(G.escapeText(CTX.props.pagetitle)); // "props.pagetitle"
OUT.push("</title>\n    <meta charset=\"utf8\" />\n    <link rel=\"stylesheet\" href=\"/components/core/Page.css\">\n    <link rel=\"stylesheet\" href=\"/components/core/Page-reset.css\">\n    <link rel=\"stylesheet\" href=\"/components/core/Page-article.css\">\n</head>\n<body>\n    <main class=\"Page-wrapper\">\n        <div class=\"Page Page-relative\">\n            "); // "</title>\n    <meta charset=\"utf8\" />\n    <link rel=\"stylesheet\" href=\"/components/core/Page.css\">\n    <link rel=\"stylesheet\" href=\"/components/core/Page-reset.css\">\n    <link rel=\"stylesheet\" href=\"/components/core/Page-article.css\">\n</head>\n<body>\n    <main class=\"Page-wrapper\">\n        <div class=\"Page Page-relative\">"
/* // "comment"
OUT.push("\n            "); // ""
if (CTX.props.pagetitle) { // "if props.pagetitle"
OUT.push("\n                <nav class=\"Page-trNav\">\n                    <ul>\n                        <li><a href=\"/\">HOME</a></li>\n                        <!--<li><a href=\"/hiring.html\">EMPLOYMENT</a></li>-->\n                        <li><a href=\"/projects/\">PROJECTS</a></li>\n                        <li><a href=\"/articles/\">ARTICLES</a></li>\n                    </ul>\n                </nav>\n            "); // "<nav class=\"Page-trNav\">\n                    <ul>\n                        <li><a href=\"/\">HOME</a></li>\n                        <!--<li><a href=\"/hiring.html\">EMPLOYMENT</a></li>-->\n                        <li><a href=\"/projects/\">PROJECTS</a></li>\n                        <li><a href=\"/articles/\">ARTICLES</a></li>\n                    </ul>\n                </nav>"
} // "endif"
OUT.push("\n            "); // ""
*/ // "endcomment"
OUT.push("\n            "); // ""
if (CTX.props.archivedid) { // "if props.archivedid"
OUT.push("\n                <h1>michaelb.org #"); // "<h1>michaelb.org #"
OUT.push(G.escapeText(CTX.props.archivedid)); // "props.archivedid"
OUT.push("</h1>\n                <hr />\n            "); // "</h1>\n                <hr />"
} // "endif"
OUT.push("\n            <img src=\"/static/img/misc_images/logo_2.png\" />\n            "); // "<img src=\"/static/img/misc_images/logo_2.png\" />"
if (CTX.props.pagetitle) { // "if props.pagetitle"
OUT.push("\n                <h2 class=\"Page-articleTitle\"><span>"); // "<h2 class=\"Page-articleTitle\"><span>"
OUT.push(G.escapeText(G.filters["safe"](CTX.props.pagetitle))); // "props.pagetitle|safe"
OUT.push("</span></h2>\n\n                <nav class=\"Page-bcNav\">\n                    <ul>\n                        <li><a href=\"/\">HOME</a></li>\n                        "); // "</span></h2>\n\n                <nav class=\"Page-bcNav\">\n                    <ul>\n                        <li><a href=\"/\">HOME</a></li>"
if (CTX.props.bc1) { // "if props.bc1"
OUT.push("\n                            <li><a href=\"/"); // "<li><a href=\"/"
OUT.push(G.escapeText(CTX.props.bc1)); // "props.bc1"
OUT.push(".html\">"); // ".html\">"
OUT.push(G.escapeText(G.filters["upper"](CTX.props.bc1))); // "props.bc1|upper"
OUT.push("</a></li>\n                        "); // "</a></li>"
} // "endif"
OUT.push("\n                        "); // ""
if (CTX.props.bc2) { // "if props.bc2"
OUT.push("\n                            <li><a href=\"/"); // "<li><a href=\"/"
OUT.push(G.escapeText(CTX.props.bc2)); // "props.bc2"
OUT.push(".html\">"); // ".html\">"
OUT.push(G.escapeText(G.filters["upper"](CTX.props.bc2))); // "props.bc2|upper"
OUT.push("</a></li>\n                        "); // "</a></li>"
} // "endif"
OUT.push("\n                        <li><a href=\"#\">"); // "<li><a href=\"#\">"
OUT.push(G.escapeText(G.filters["upper"](CTX.props.pagetitle))); // "props.pagetitle|upper"
OUT.push("</a></li>\n                    </ul>\n                </nav>\n\n            "); // "</a></li>\n                    </ul>\n                </nav>"
} // "endif"
OUT.push("\n        </div>\n        <slot class=\"Page\n            "); // "</div>\n        <slot class=\"Page"
if (CTX.props.archivedid) { // "if props.archivedid"
OUT.push("\n                Page-article\n            "); // "Page-article"
} // "endif"
OUT.push("\n        \"></slot>\n        <div class=\"Page\">\n            "); // "\"></slot>\n        <div class=\"Page\">"
if (CTX.props.archivedid) { // "if props.archivedid"
OUT.push("\n                <x-ArchiveSidebar\n                    style=\"margin-top: 100px\"\n                    qid:="); // "<x-ArchiveSidebar\n                    style=\"margin-top: 100px\"\n                    qid:="
OUT.push(G.escapeText(CTX.props.archivedid)); // "props.archivedid"
OUT.push("\n                    title=\""); // "title=\""
OUT.push(G.escapeText(CTX.props.pagetitle)); // "props.pagetitle"
OUT.push("\"\n                ></x-ArchiveSidebar>\n            "); // "\"\n                ></x-ArchiveSidebar>"
} // "endif"
OUT.push("\n        </div>\n    </main>\n    <footer>\n        &copy; "); // "</div>\n    </main>\n    <footer>\n        &copy;"
OUT.push(G.escapeText(CTX.script.currentYear)); // "script.currentYear"
OUT.push(" Michael Bethencourt - All original\n        content here is licensed under <a\n        href=\"https://creativecommons.org/licenses/by-nd/4.0/\">CC BY-ND</a>,\n        unless otherwise noted\n    </footer>\n</body>\n"); // "Michael Bethencourt - All original\n        content here is licensed under <a\n        href=\"https://creativecommons.org/licenses/by-nd/4.0/\">CC BY-ND</a>,\n        unless otherwise noted\n    </footer>\n</body>"

return OUT.join("");
};Modulo.assets.functions["oc6irv"]= function (Modulo, factory, module, component, props, template, element, cparts){var script = { exports: {} };  function __set(name, value) { if (name === 'Modulo') Modulo = value; if (name === 'factory') factory = value; if (name === 'module') module = value; if (name === 'component') component = value; if (name === 'props') props = value; if (name === 'template') template = value; if (name === 'element') element = value; if (name === 'cparts') cparts = value; }

        function initializedCallback() {
            return {
                currentYear: (new Date()).getFullYear(),
            }
        }
    
return { "initializedCallback": typeof initializedCallback !== "undefined" ? initializedCallback : undefined,
 setLocalVariable: __set, exports: script.exports}
};Modulo.assets.functions["x17ak53k"]= function (){
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
};Modulo.assets.functions["x1o43tot"]= function (CTX, G){
var OUT=[];
OUT.push("\n        "); // ""
if (CTX.state.isvisible) { // "if state.isvisible"
OUT.push("\n            <iframe width=\"100%\" height=\"100\" scrolling=\"no\" frameborder=\"no\"\n            src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367015547&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true\"></iframe>\n        "); // "<iframe width=\"100%\" height=\"100\" scrolling=\"no\" frameborder=\"no\"\n            src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367015547&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true\"></iframe>"
} else { // "else"
OUT.push("\n            <a class=\"Btn\" @click:=script.show>\n                <img\n                    src=\"/static/img/music_related/soundcloud_the_mission_begins.png\"\n                    alt=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\"\n                    title=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\"\n                />\n            </a>\n        "); // "<a class=\"Btn\" @click:=script.show>\n                <img\n                    src=\"/static/img/music_related/soundcloud_the_mission_begins.png\"\n                    alt=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\"\n                    title=\"Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns\"\n                />\n            </a>"
} // "endif"
OUT.push("\n    "); // ""

return OUT.join("");
};Modulo.assets.functions["x9855rf"]= function (Modulo, factory, module, component, props, template, staticdata, state, element, cparts){var script = { exports: {} };  function __set(name, value) { if (name === 'Modulo') Modulo = value; if (name === 'factory') factory = value; if (name === 'module') module = value; if (name === 'component') component = value; if (name === 'props') props = value; if (name === 'template') template = value; if (name === 'staticdata') staticdata = value; if (name === 'state') state = value; if (name === 'element') element = value; if (name === 'cparts') cparts = value; }

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
};Modulo.assets.functions["xbbl70c"]= function (Modulo, factory, module, component, template, state, element, cparts){var script = { exports: {} };  function __set(name, value) { if (name === 'Modulo') Modulo = value; if (name === 'factory') factory = value; if (name === 'module') module = value; if (name === 'component') component = value; if (name === 'template') template = value; if (name === 'state') state = value; if (name === 'element') element = value; if (name === 'cparts') cparts = value; }

        function show(target, e) {
            state.isvisible = true;
        }
    
return { "show": typeof show !== "undefined" ? show : undefined,
 setLocalVariable: __set, exports: script.exports}
};Modulo.assets.functions["xmntoub"]= function (CTX, G){
var OUT=[];
OUT.push("\n\n<nav>\n    <ul  "); // "<nav>\n    <ul"
if (CTX.state.showall) { // "if state.showall"
OUT.push("class=\"active\""); // "class=\"active\""
} // "endif"
OUT.push(">\n        <p>\n            #"); // ">\n        <p>\n            #"
OUT.push(G.escapeText(CTX.props.qid)); // "props.qid"
OUT.push(" -\n            <a class=\"active\" href=\"#\">"); // "-\n            <a class=\"active\" href=\"#\">"
OUT.push(G.escapeText(CTX.props.title)); // "props.title"
OUT.push("</a> <br />\n            <span>This article is from a previous blog, actively published\n            between 2016-2019.</span>\n        </p>\n\n\n        <h2>Popular</h2>\n\n        "); // "</a> <br />\n            <span>This article is from a previous blog, actively published\n            between 2016-2019.</span>\n        </p>\n\n\n        <h2>Popular</h2>"
OUT.push("\n        "); // ""
var ARR0=G.filters["reversed"](CTX.staticdata);for (var KEY in ARR0) {CTX. info=ARR0[KEY]; // "for info in staticdata|reversed"
OUT.push("\n            "); // ""
if (("5,11,33,38,").includes ? ("5,11,33,38,").includes(G.filters["add"](CTX.info.id,",")) : (G.filters["add"](CTX.info.id,",") in "5,11,33,38,")) { // "if info.id|add:\",\" in \"5,11,33,38,\""
OUT.push("\n                <li>#"); // "<li>#"
OUT.push(G.escapeText(CTX.info.id)); // "info.id"
OUT.push(" -\n                    <a class=\""); // "-\n                    <a class=\""
if (CTX.info.id === CTX.props.qid) { // "if info.id == props.qid"
OUT.push("active"); // "active"
} // "endif"
OUT.push("\"\n                        href=\"/archive/article/"); // "\"\n                        href=\"/archive/article/"
OUT.push(G.escapeText(CTX.info.id)); // "info.id"
OUT.push(".html\">"); // ".html\">"
OUT.push(G.escapeText(G.filters["safe"](CTX.info.title))); // "info.title|safe"
OUT.push("</a>\n                </li>\n            "); // "</a>\n                </li>"
} // "endif"
OUT.push("\n        "); // ""
} // "endfor"
OUT.push("\n\n        <h2>All archived articles</h2>\n        "); // "<h2>All archived articles</h2>"
var ARR0=G.filters["reversed"](CTX.staticdata);for (var KEY in ARR0) {CTX. info=ARR0[KEY]; // "for info in staticdata|reversed"
OUT.push("\n            <li>#"); // "<li>#"
OUT.push(G.escapeText(CTX.info.id)); // "info.id"
OUT.push(" -\n                <a class=\""); // "-\n                <a class=\""
if (CTX.info.id === CTX.props.qid) { // "if info.id == props.qid"
OUT.push("active"); // "active"
} // "endif"
OUT.push("\"\n                    href=\"/archive/article/"); // "\"\n                    href=\"/archive/article/"
OUT.push(G.escapeText(CTX.info.id)); // "info.id"
OUT.push(".html\">"); // ".html\">"
OUT.push(G.escapeText(G.filters["safe"](CTX.info.title))); // "info.title|safe"
OUT.push("</a>\n            </li>\n        "); // "</a>\n            </li>"
} // "endfor"
OUT.push("\n\n    </ul>\n\n    "); // "</ul>"
if (!(CTX.state.showall)) { // "if not state.showall"
OUT.push("\n        <div class=\"visibility-controls\">\n            <div class=\"visible-toggle-overlay\"></div>\n            <label>\n                <input [state.bind] name=\"showall\" type=\"checkbox\">\n                Read more from the archive...\n            </label>\n        </div>\n    "); // "<div class=\"visibility-controls\">\n            <div class=\"visible-toggle-overlay\"></div>\n            <label>\n                <input [state.bind] name=\"showall\" type=\"checkbox\">\n                Read more from the archive...\n            </label>\n        </div>"
} // "endif"
OUT.push("\n</nav>\n\n"); // "</nav>"
if (!(CTX.state.showcomments)) { // "if not state.showcomments"
OUT.push("\n    <div class=\"comment-controls\">\n        <button @click:=script.showComments>\n            Read Comment Section (Disqus)\n        </button>\n    </div>\n"); // "<div class=\"comment-controls\">\n        <button @click:=script.showComments>\n            Read Comment Section (Disqus)\n        </button>\n    </div>"
} // "endif"
OUT.push("\n\n<div class=\"rainbow-square\" style=\"margin-top: 80px; padding: 10px\">\n    <div id=\"disqus_thread\"></div>\n</div>\n"); // "<div class=\"rainbow-square\" style=\"margin-top: 80px; padding: 10px\">\n    <div id=\"disqus_thread\"></div>\n</div>"

return OUT.join("");
};Modulo.assets.functions["xvgoqqa"]= function (CTX, G){
var OUT=[];
OUT.push("\n        "); // ""
var ARR0=G.filters["reversed"](CTX.staticdata);for (var KEY in ARR0) {CTX. info=ARR0[KEY]; // "for info in staticdata|reversed"
OUT.push("\n            <li>#"); // "<li>#"
OUT.push(G.escapeText(CTX.info.id)); // "info.id"
OUT.push(" -\n                <a class=\""); // "-\n                <a class=\""
if (CTX.info.id === CTX.props.qid) { // "if info.id == props.qid"
OUT.push("active"); // "active"
} // "endif"
OUT.push("\"\n                    href=\"/archive/article/"); // "\"\n                    href=\"/archive/article/"
OUT.push(G.escapeText(CTX.info.id)); // "info.id"
OUT.push(".html\">"); // ".html\">"
OUT.push(G.escapeText(G.filters["safe"](CTX.info.title))); // "info.title|safe"
OUT.push("</a>\n            </li>\n        "); // "</a>\n            </li>"
} // "endfor"
OUT.push("\n    "); // ""

return OUT.join("");
};
Modulo.fetchQ.data = {
  "/archive/article/dir_listing.json": // (194 lines)
`[
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
    "title": "The Right Way\\u2122 to do global npm install without sudo",
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
]`,// (ends: /archive/article/dir_listing.json) 

  "/components/core.html": // (100 lines)
`
<!-- Define my core Page component -->
<Component name="Page" mode="vanish-into-document">

    <Props
        pagetitle
        archivedid
    ></Props>
    <Template src="./core/Page.html"></Template>
    <Script>
        function initializedCallback() {
            return {
                currentYear: (new Date()).getFullYear(),
            }
        }
    </Script>
</Component>


<Component name="ArchiveSidebar">
    <Props
        qid
        title
    ></Props>
    <Template src="./core/ArchiveSidebar.html"></Template>
    <!-- NOTE: For some reason, absolute ones broke here! -->
    <StaticData src="../archive/article/dir_listing.json"></StaticData>
    <State
        showall:=false
        showcomments:=false
    ></State>
    <Script>
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
    </Script>

    <Style src="./core/ArchiveSidebar.css"></Style>
</Component>



<Component name="ArchiveList" mode="vanish">
    <Props
        qid
    ></Props>
    <Template>
        {% for info in staticdata|reversed %}
            <li>#{{ info.id }} -
                <a class="{% if info.id == props.qid %}active{% endif %}"
                    href="/archive/article/{{ info.id }}.html">{{ info.title|safe }}</a>
            </li>
        {% endfor %}
    </Template>
    <!-- NOTE: For some reason, absolute ones broke here! -->
    <StaticData src="../archive/article/dir_listing.json"></StaticData>
</Component>


<Component name="SoundcloudButton">
    <Template>
        {% if state.isvisible %}
            <iframe width="100%" height="100" scrolling="no" frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367015547&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        {% else %}
            <a class="Btn" @click:=script.show>
                <img
                    src="/static/img/music_related/soundcloud_the_mission_begins.png"
                    alt="Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns"
                    title="Michael B's Soundcloud page, with The Mission Begins, Planetfall and Lifesigns"
                />
            </a>
        {% endif %}
    </Template>
    <State
        isvisible:=false
    ></State>
    <Script>
        function show(target, e) {
            state.isvisible = true;
        }
    </Script>
    <!-- NOTE: For some reason, absolute ones broke here! -->
    <StaticData src="../archive/article/dir_listing.json"></StaticData>
    <Style>
        a {
            cursor: pointer;
        }
    </Style>
</Component>

`,// (ends: /components/core.html) 

  "/components/core/ArchiveSidebar.css": // (133 lines)
`/*
:root {
    --page-width: 800px;
    --bg1: #ffffff;
    --bg2: #e5e5f7;
    --accent1: #f2cd54;
    --accent2: #91d370;
    --accent3: #bca0ff;
    --leftoffset: -80px;
}
*/

a {
    background: white;
    color: black;
}

a.active {
    background: var(--accent1);
}
li {
    font-size: 1.3rem;
    line-height: 2.0rem;
}

nav {
    border: 1px solid black;
    padding-top: 20px;
}

ul {
    margin-left: -30px;
}

ul > h2 {
    font-size: 25px;
    margin-top: 50px;
    /*
    float: left;
    shape-outside: circle();
    height: auto;
    width: 125px;
    */
}
ul > h2 {
    text-align: right;
    background: black;
    color: white;
    height: 28px;
}

ul > p > span  {
    font-size: 16px;
    background: white;
    font-style: italic;
}


.visible-toggle {
    display: none;
}

.visible-toggle-overlay {
    opacity: 0.5;
    position: relative;
    top: -20px;
    height: 20px;
    background: repeating-linear-gradient(
        -55deg,
        transparent,
        transparent 10px,
        var(--accent1) 10px,
        var(--accent1) 20px
    );
}

ul {
    height: 400px;
    overflow: hidden;
}

ul.active {
    height: auto;
}

.visibility-controls > label,
.comment-controls > button {
    margin-left: 20px;
    font-size: 20px;
    border: 3px var(--accent3) solid;
    padding: 20px;
}

.comment-controls > button {
    float: right;
    margin-top: -20px;
    background: transparent;
    margin-right: 20px;
}

.visibility-controls > label:hover,
.comment-controls > button:hover {
    background: var(--accent3);
    cursor: pointer;
}

.visibility-controls > label > input {
    display: none;
}

@media (min-width: 1330px) {
    nav {
        position: absolute;
        left: calc(2vw);
        top: 100px;
        z-index: 10;
        width: calc(100px + 10vw);
    }
    ul {
        height: auto;
    }

    .visibility-controls {
        display: none;
    }
    .visible-toggle-overlay {
        display: none;
    }
}



`,// (ends: /components/core/ArchiveSidebar.css) 

  "/components/core/ArchiveSidebar.html": // (57 lines)
`

<nav>
    <ul  {% if state.showall %}class="active"{% endif %}>
        <p>
            #{{ props.qid }} -
            <a class="active" href="#">{{ props.title }}</a> <br />
            <span>This article is from a previous blog, actively published
            between 2016-2019.</span>
        </p>


        <h2>Popular</h2>

        {# TODO refactor the loop into a snippet #}
        {% for info in staticdata|reversed %}
            {% if info.id|add:"," in "5,11,33,38," %}
                <li>#{{ info.id }} -
                    <a class="{% if info.id == props.qid %}active{% endif %}"
                        href="/archive/article/{{ info.id }}.html">{{ info.title|safe }}</a>
                </li>
            {% endif %}
        {% endfor %}

        <h2>All archived articles</h2>
        {% for info in staticdata|reversed %}
            <li>#{{ info.id }} -
                <a class="{% if info.id == props.qid %}active{% endif %}"
                    href="/archive/article/{{ info.id }}.html">{{ info.title|safe }}</a>
            </li>
        {% endfor %}

    </ul>

    {% if not state.showall %}
        <div class="visibility-controls">
            <div class="visible-toggle-overlay"></div>
            <label>
                <input [state.bind] name="showall" type="checkbox">
                Read more from the archive...
            </label>
        </div>
    {% endif %}
</nav>

{% if not state.showcomments %}
    <div class="comment-controls">
        <button @click:=script.showComments>
            Read Comment Section (Disqus)
        </button>
    </div>
{% endif %}

<div class="rainbow-square" style="margin-top: 80px; padding: 10px">
    <div id="disqus_thread"></div>
</div>
`,// (ends: /components/core/ArchiveSidebar.html) 

  "/components/core/Page.html": // (68 lines)
`<head>
    <title>{{ props.pagetitle }}</title>
    <meta charset="utf8" />
    <link rel="stylesheet" href="/components/core/Page.css">
    <link rel="stylesheet" href="/components/core/Page-reset.css">
    <link rel="stylesheet" href="/components/core/Page-article.css">
</head>
<body>
    <main class="Page-wrapper">
        <div class="Page Page-relative">
            {% comment %}
            {% if props.pagetitle %}
                <nav class="Page-trNav">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <!--<li><a href="/hiring.html">EMPLOYMENT</a></li>-->
                        <li><a href="/projects/">PROJECTS</a></li>
                        <li><a href="/articles/">ARTICLES</a></li>
                    </ul>
                </nav>
            {% endif %}
            {% endcomment %}
            {% if props.archivedid %}
                <h1>michaelb.org #{{ props.archivedid }}</h1>
                <hr />
            {% endif %}
            <img src="/static/img/misc_images/logo_2.png" />
            {% if props.pagetitle %}
                <h2 class="Page-articleTitle"><span>{{ props.pagetitle|safe }}</span></h2>

                <nav class="Page-bcNav">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        {% if props.bc1 %}
                            <li><a href="/{{ props.bc1 }}.html">{{ props.bc1|upper }}</a></li>
                        {% endif %}
                        {% if props.bc2 %}
                            <li><a href="/{{ props.bc2 }}.html">{{ props.bc2|upper }}</a></li>
                        {% endif %}
                        <li><a href="#">{{ props.pagetitle|upper }}</a></li>
                    </ul>
                </nav>

            {% endif %}
        </div>
        <slot class="Page
            {% if props.archivedid %}
                Page-article
            {% endif %}
        "></slot>
        <div class="Page">
            {% if props.archivedid %}
                <x-ArchiveSidebar
                    style="margin-top: 100px"
                    qid:={{ props.archivedid }}
                    title="{{ props.pagetitle }}"
                ></x-ArchiveSidebar>
            {% endif %}
        </div>
    </main>
    <footer>
        &copy; {{ script.currentYear }} Michael Bethencourt - All original
        content here is licensed under <a
        href="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND</a>,
        unless otherwise noted
    </footer>
</body>
`,// (ends: /components/core/Page.html) 

};
