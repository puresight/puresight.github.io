---
layout: page
title: Blog
---

<hr/>

<section class="posts">
  {% for post in site.categories.general limit:1 %}
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

<hr/>

<section id="archive">
    <ul class="past">
    {% for post in site.categories.general limit:9 %}
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
