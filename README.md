# Learning & Briefing

Dated learning articles and briefings on autonomous software delivery, AI-native companies, and the products, geopolitics and infrastructure shaping them.

**Site:** https://ruskinbhardwaj.github.io/learning-and-briefing/

## What's where

| Path | What |
|---|---|
| [`_posts/`](_posts/) | **The articles**, named `YYYY-MM-DD-slug.md`, newest at the bottom |
| [`principles/`](principles/) | The rules every article follows: writing, editorial, structure, topics, feedback, automation, templates |
| [`site/`](site/) | Everything that turns the articles into the website: pages (home, archive, topics, landscape), layouts, styles, topic and type lists |
| `.github/` | Feedback forms and the workflow that builds and publishes the site |
| `_config.yml` | Site settings (has to stay at the top level) |

## Feedback

Every article ends with **Suggest an edit** and **Ask a question** links that open a pre-filled issue. See `principles/feedback.md` for what happens next.

## Preview locally (optional)

Not needed to read or publish: GitHub builds the site on every merge. Only useful for previewing changes offline.

```sh
export BUNDLE_GEMFILE=site/Gemfile
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/learning-and-briefing/.

## One-time setup

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
