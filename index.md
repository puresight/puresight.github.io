---
layout: page
title: Home
subject: website
blog-subject: weblog
blog-title: Blog
blog-description: "Periodically published blogs by Monty Dickerson on technical or professional topics."
---

<section class="posts">
  {% for post in site.categories.tech limit:3 %}
  <article class="post">
    <header>
      <h1 class="post-title">
        <a href="{{ post.url }}">
          {{ post.title }}
        </a>
      </h1>
      <span class="post-date">{{ post.date | date_to_string }}</span>
    </header>
    {{ post.content }}
  </article>
  <hr/>
  {% endfor %}
</section>

<section id="archive">
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
