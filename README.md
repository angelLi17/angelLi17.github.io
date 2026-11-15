# personalwebsite

My personal site: plain Jekyll with the Minima theme, built and deployed by GitHub Pages.
Push to `main` and it goes live, no build step on your machine.

## Future edits
- change colors some are too faded needa be darker
- change background to cream color with small minimalistic drawing

## What's where

| File | What it is |
|---|---|
| `_config.yml` | site title, tagline, nav links |
| `index.html` | home page text + hypercube |
| `portfolio.md` | projects, plain Markdown |
| `blog.html` | list of posts |
| `_posts/` | blog posts |
| `_drafts/post-template.md` | starter for a new post |
| `_includes/footer.html` | footer (name, last edited, tagline) |
| `_layouts/post.html` | post page (adds the optional "edited" date) |
| `assets/main.scss` | style tweaks on top of Minima |
| `assets/js/hypercube.js` | the rotating hypercube |

## Write a blog post

1. Copy `_drafts/post-template.md` to `_posts/YYYY-MM-DD-short-title.md`.
2. Fill in `title` and `summary`, and write the post in Markdown.
3. Commit and push to `main`.

## Preview locally (optional)

Needs Ruby 3.x (e.g. `brew install ruby`):

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000/personalwebsite/
```

## History

The earlier React + Vite versions are in git history; the beach design is at the
`beach-theme` tag.
