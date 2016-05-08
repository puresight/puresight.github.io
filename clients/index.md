---
layout: page
title: Experience
noindex: true
category: clients
subject: experience
description: "Past jobs index"
---

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title and node.noindex != true and node.layout == "page" and node.category == page.category %}
* [{{ node.title }}]({{ node.url }}) - {{ node.description }}
  {% endif %}
{% endfor %}

<hr>
Website, Copyright {{ site.time | date: '%Y' }} {{ site.author.name }}
