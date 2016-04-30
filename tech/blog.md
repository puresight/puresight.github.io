---
layout: page
title: Blog
subject: weblog
description: "Periodically published blogs by Monty Dickerson on technical or professional topics."
---

<section class="posts">
  {% for post in site.categories.tech limit:3 %}
  <hr/>
  <article class="post">
    <header>
      <h2 class="post-title">
        <a href="{{ post.url }}">
          {{ post.title }}
        </a>
      </h2>
      <span class="post-date">{{ post.date | date_to_string }}</span>
    </header>
    {{ post.content }}
  </article>
  {% endfor %}
</section>

<section id="archive">
  <hr/>
  <ul class="past">
  {% for post in site.categories.tech offset:3 limit:9 %}
    <li>
      <time>{{ post.date | date:"%F" }}</time>

      {% if post.external-url %}
          <a href="{{ post.external-url | xml_escape }}" title="{{ post.title | xml_escape }}"
      {% else %}
          <a href="{{ post.url | xml_escape }}" title="{{ post.title | xml_escape }}"
      {% endif %}

          >{{ post.title | truncate: 40, "..." | xml_escape }}
      </a>
    </li>
  {% endfor %}
  </ul>
</section>
