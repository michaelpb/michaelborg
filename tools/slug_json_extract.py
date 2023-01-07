
import json

data = json.load(open('./tools/blog_archive_2018.json'))

meta = []
for item in data:
    meta.append({
        "id": item['id'],
        "title": item['title'],
        "slug": item['slug'],
    })

json.dump(meta, open('./tools/blog_archive_meta.json', 'w+'), indent=2)
