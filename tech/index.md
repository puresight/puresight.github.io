---
layout: page
title: Tech notes
noindex: true
category: tech
subject: technology
description: "Technology reference notes"
---

For professionals

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title and node.noindex != true and node.layout == "page" and node.category == page.category %}
* [{{ node.title }}]({{ node.url }}) - {{ node.description }}
  {% endif %}
{% endfor %}

<hr>
Website, Copyright {{ site.time | date: '%Y' }} {{ site.author.name }}
