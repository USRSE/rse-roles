---
layout: roles
title: Roles
permalink: /roles/
weight: 4
---

<style>
.article hr {
    background: #e2e2e2 !important;
}
a:hover {
    text-decoration: none;
}

.article a {
   transition: none !important;
   text-decoration: none !important;
}
</style>

{% for post in site.posts %}

<div style="margin-bottom:50px; margin-top:50px">
<h1><b><a style="" href="{{ site.baseurl }}/{{ post.url }}">{{ post.title }}</a></b></h1>

<p class="article-metadata text-muted">
{{ post.date | date_to_long_string }} -  
<b>
{% assign words = post.content | number_of_words %}
{% if words < 360 %}
less than 1 min read time
{% else %}
{{ words | divided_by:180 }} mins read time
{% endif %}
</b>

<br>

{% if post.tags != empty %}
Tags: 
{% for tag in post.tags %}
<span class="badge badge-pill text-primary border border-primary">{{ tag }}</span>
{% endfor %}
{% endif %}
</p>

{{ post.excerpt }}

<a href="{{ site.baseurl }}/{{ post.url }}" class="btn btn-info">Read more...</a>
</div>

<br>

<hr>
{% endfor %}
