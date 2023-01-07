
import json

data = json.load(open('./tools/blog_archive_2018.json'))

meta = []
for item in data:
    meta.append({
        "id": item['id'],
        "title": item['title'],
        "slug": item['slug'],
    })

json.dump(open('./tools/blog_archive_meta.json'), meta, indent=2)
