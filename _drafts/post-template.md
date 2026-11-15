---
title: my post title
summary: one line that shows up in the blog list
---

Copy this file into `_posts/` and rename it to `YYYY-MM-DD-short-title.md`. The date in the
filename is the post date; it will live at `/blog/short-title/`.

Files in `_drafts/` never appear on the live site.

Optional front matter: `edited: YYYY-MM-DD` shows "· edited <date>" under the title.

Leave a blank line before a list, or it will run into the paragraph above it.

Images go in `assets/blog/` and are referenced like this:

![alt text]({{ '/assets/blog/my-photo.jpg' | relative_url }})
