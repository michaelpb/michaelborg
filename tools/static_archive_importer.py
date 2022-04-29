import glob
import json

#x= 0
#x+=1
#print(x)
articles = []
for fp in glob.glob('/home/michaelb/projects/static-archives/michaelb.org/**/index.html'):
    split = fp.split('/')
    slug = split[-2]
    if slug == 'about': continue # skip about page
    if slug == 'rss': continue # skip
    #print(slug)

    article_contents = {}
    goodlns = []
    in_ga = False
    in_article = False
    title = None
    did = None
    for ln in open(fp).read().splitlines():
        if 'cloudflare' in ln:
            continue
        if 'GoogleAnalyticsObject' in ln:
            in_ga = True
            continue
        if "'send', 'pageview'" in ln:
            in_ga = False
            continue
        if '<title>' in ln:
            ln = ln.replace('<title>', '')
            ln = ln.replace('</title>', '')
            title = ln
            #print(ln)
            continue

        if '<article class="content' in ln:
            in_article = True

        if '<div class="column is-position-relative">' in ln:
            in_article = False

        if 'var disqus_identifier' in ln:
            did = int(ln.split()[-1].strip("';"))
            #print(did)

        if not in_article: continue # skip while in ga
        if in_ga: continue # skip while in ga
        goodlns.append(ln)
    if did == None:
        did = -1 # no comments
    article_contents = {
        'id': did,
        'title': title,
        'slug': slug,
        #'fullpath': fp,
        'text': '\n'.join(goodlns),
    }
    articles.append(article_contents)
    #for ln in goodlns:
    #    print(ln)

articles.sort(key=lambda a: a['id'])

for article in articles:
    print('---', article['title'])
    print('ID:', article['id'])
    print('WORDS:', len(article['text'].split()))

f = open('/home/michaelb/projects/michaelborg/tools/blog_archive_2018.json', 'w+')
json.dump(articles, f, indent=2)


article_index_json = []

## Now, lets rebuild it in the other directory
PRE = '''
    <script src="https://modulojs.org/js/Modulo.js"></script>
    <Modulo>
        <Library namespace="x" src="/components/core.html"></Library>
    </Modulo>
    <script>Modulo.defineAll()</script>
'''

for article in articles:
    newpath = (
        '/home/michaelb/projects/michaelborg/src/archive/article/' +
        str(article['id']) + '.html'
    )
    article_index_json.append({
        'id': article["id"],
        'path': newpath[40:],
        'title': article["title"],
        'length': len(article['text'].split()),
    })
    f = open(newpath, 'w+')
    html = (
        PRE + '<x-Page ' + 'archivedid="' + str(article["id"]) + '"' +
        'pagetitle="' + article["title"] + '"' + '>\n\n' + article["text"] +
        f'\n\n</x-Page>'
    )
    f.write(html)


f = open('/home/michaelb/projects/michaelborg/src/archive/article/dir_listing.json', 'w+')
json.dump(article_index_json, f, indent=2)

print('DONE!')
