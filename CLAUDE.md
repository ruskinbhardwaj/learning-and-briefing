# Learning & Briefing

A Jekyll site on GitHub Pages of dated learning articles and briefings for Addy.

## Before writing or editing any article

Read `principles/README.md` and follow every file it links. They are the rules for writing, editorial standards, structure, topics, feedback handling and automation. If a request conflicts with a principle, say so rather than silently breaking it; if the principle should change, change it in its own commit.

## Working rules

- Articles go in `_posts/YYYY-MM-DD-slug.md`, started from `principles/templates/`.
- Never rename a published post file.
- Edits to published articles add a dated `updates` entry; reader questions go in `faq`. See `principles/feedback.md`.
- Move `last_reviewed` only after re-checking every claim.
- Update `site/pages/landscape.md` when an article changes the big picture.
- Build before opening a PR: `BUNDLE_GEMFILE=site/Gemfile bundle install && BUNDLE_GEMFILE=site/Gemfile bundle exec jekyll build`.
- One article (or one feedback fix) per pull request.
