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
.tag {
  cursor: pointer;
}
</style>

<button id="reset" class="btn btn-primary">Reset</button>

{% for post in site.posts %}

<div style="margin-bottom:50px; margin-top:50px" class="alltags {% for tag in post.tags %}tag-{{ tag }} {% endfor %}">
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
<span data-id="tag-{{ tag }}" class="tag badge badge-pill text-primary border border-primary">{{ tag }}</span>
{% endfor %}
{% endif %}
</p>

{{ post.excerpt }}

<a href="{{ site.baseurl }}/{{ post.url }}" class="btn btn-info">Read more...</a>
</div>

<br>

<hr class="alltags {% for tag in post.tags %}tag-{{ tag }} {% endfor %}">
{% endfor %}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(function(){

    // Reset list
    $("#reset").click(function(){
        $(".alltags").show();    
    })

    // When clicking a tag, filter to tag
    $('.tag').click(function(event){
        // prevent navigation to role page when clicking tag
        tag = $(this).attr("data-id")
        console.log(tag)
        $(".alltags").hide();
        $("." + tag).show();
    })

});
</script>
