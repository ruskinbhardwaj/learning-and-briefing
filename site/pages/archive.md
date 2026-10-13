---
title: Archive
permalink: /archive/
---
# Archive

Every article, by year and month.

{% assign years = site.posts | group_by_exp: "p", "p.date | date: '%Y'" %}
{% if years.size == 0 %}<p class="empty">Nothing published yet.</p>{% endif %}
{% for year in years %}
<section class="year">
<h2 class="year-heading">{{ year.name }}</h2>
{% include article-list.html posts=year.items %}
</section>
{% endfor %}
