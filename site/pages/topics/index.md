---
title: Topics
permalink: /topics/
---
# Topics

{% for topic in site.data.topics %}
{%- assign count = site.posts | where_exp: "p", "p.topics contains topic.id" | size -%}
<section class="topic-card">
  <h2><a href="{{ '/topics/' | append: topic.id | append: '/' | relative_url }}">{{ topic.name }}</a> <span class="count">{{ count }}</span></h2>
  <p>{{ topic.summary }}</p>
</section>
{% endfor %}
