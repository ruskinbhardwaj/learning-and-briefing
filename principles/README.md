# Principles

These files are the rules for every article on this site. Whoever writes or edits an article, person or Claude, follows them. If an article and a principle disagree, the principle wins; if a principle is wrong, change it here in its own commit so the change is visible.

| File | Covers |
|---|---|
| [topics.md](topics.md) | The six topics, what belongs in each, and how to add one |
| [structure.md](structure.md) | Article types, file naming, front matter, and the section templates |
| [writing.md](writing.md) | Voice, clarity, length and formatting |
| [editorial.md](editorial.md) | Sourcing, accuracy, dating, neutrality, corrections and staleness |
| [feedback.md](feedback.md) | How edit requests and questions become changes and FAQ entries |
| [automation.md](automation.md) | How articles, especially morning briefings, are generated on a schedule |
| [templates/](templates/) | Copy-ready skeletons for each article type |

## How an article gets made

1. **Pick the type and topic.** Use [structure.md](structure.md) to choose Learning, Briefing or Morning, and [topics.md](topics.md) to choose one primary topic (plus any secondary ones).
2. **Talk it through first (Learning articles).** Before writing a Learning article, have a conversation with Addy about the topic in the project thread (or the article-request issue). See [Conversation first](#conversation-first) below. Don't draft or open a pull request until Addy says to write it.
3. **Research.** Gather sources to the standard in [editorial.md](editorial.md). Note each source's publication date.
4. **Draft from the template.** Start from the matching file in [templates/](templates/) and follow [writing.md](writing.md).
5. **Check.** Run through the pre-publish checklist at the end of [editorial.md](editorial.md).
6. **Publish.** Commit the file to `_posts/` via a pull request. The site rebuilds on merge.
7. **Maintain.** Feedback arrives as issues and is handled per [feedback.md](feedback.md). Articles past their review date are refreshed or superseded per [editorial.md](editorial.md).

## Conversation first

A Learning article is the record of something Addy has learned, so it starts as a conversation, not a finished piece. Before writing one:

- Open with a short plain explanation of the topic, then ask what Addy already knows, what they want to use it for, and how deep to go.
- Answer Addy's questions in the thread. The questions they ask show the angle, depth and examples the article needs.
- Draft only when Addy says to. The article then follows the angle the conversation settled on, and questions that came up become body sections or `faq` entries.

Briefings and morning briefings report on recent developments and don't need a conversation first, unless Addy asks for one.

## The reader

The reader is Addy: technical and strategic, short on time, and reading to both learn and stay current. Write for someone who will act on what they read and who will notice hand-waving.
