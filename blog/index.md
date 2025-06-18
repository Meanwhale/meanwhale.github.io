---
layout: default
title: Blogi
---

<h1>Uusimmat postaukset</h1>
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
