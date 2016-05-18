---
layout: page
title: Blog
noindex: true
subject: weblog
description: "Periodically published blogs by Monty Dickerson on technical or professional topics."
---

<section class="posts">
  {% for post in site.categories.business limit:5 %}
  <article class="post">
    <header>
      <h1 class="post-title">
        <a href="{{ post.url }}">
          {{ post.title }}
        </a>
      </h1>
      <span class="post-date">{{ post.date | date_to_string }}</span>
    </header>
    <figure class="page-pic">
      <picture>{% comment %} http://www.html5rocks.com/en/tutorials/responsive/picture-element/ {% endcomment %}
        <img
          src="{{ site.baseurl }}{{ post.image.url }}"
          alt="{{ post.image.url }}"
          class="{{ post.image.class }}"
          style="{{ post.image.style }}"
        />
      </picture>
      <figcaption>{{ post.image.caption }}</figcaption>
    </figure>
    {{ post.content }}
  </article>
  <hr/>
  {% endfor %}
</section>

<section id="archive">
  <ul class="past">
  {% for post in site.categories.business offset:5 limit:9 %}
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
