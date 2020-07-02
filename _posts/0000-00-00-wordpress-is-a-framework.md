---
title: Wordpress is a Framework
date: 2020-06-20
categories:
- WordPress
- CMS
hero: framework.webp
image: assets/images/framework.webp
---

Lest it fall under the immense weight of my quick and witty Jamstack diatribes, it's time I defend my dear friend WordPress from a most misleading misconception. WordPress is not simply a CMS. It might be *known* for its prowess as a CMS, and modern tools might compare themselves to it, but it is much, much more.

## But what is a CMS?
**C**ontent **M**anagement **S**ystems are **systems** to organize and deliver (**manage**) the **content** of your website in a way that makes sense to you as a business AND integrates with your web framework. That's the base definition of a CMS: something that holds the data you need to make your website unique.

WordPress is called a CMS because it has a pretty powerful CMS built into it. It can process files, organize them, and do many things to them based on their type. Image files are stored in multiple different, optimized sizes for use in instances at their most convenient size. The directory which stores all of these things (let's call them [assets](https://en.wikipedia.org/wiki/Digital_asset)) is pretty confusing to look at, but it is modifiable and it does its job well enough.


## And what is a framework?
A web **framework** on the other hand is a well-known and documented system for deploying content, serving it, and dynamically modifying it. A short and completely unordered list of framework words you've probably heard before:

> Angular, Django, Rails, CodeIgniter, React, Gatsby, Jekyll, Laravel, nodeJS, RedwoodJS, 11ty

There are front-end frameworks and full-stack frameworks and little tiny frameworks and big, custom frameworks, but they all basically _make your website happen_. A framework doesn't need an integrated CMS, but some frameworks have a bit of an opinion on how to store their media. It's not uncommon.

## WordPress stores your assets for you
I said the `/media` directory in WordPress is confusing to look at, because it is. But the the administrator console (WP-admin) is not. It has all.of.the.options. It has all.of.the.settings. It quickly becomes familiar, and it really hasn't changed a lot in modern times.

Content Management Systems don't need a graphical interface, and they don't technically need to store your files. A CMS could be as simple as a JSON file. Some people use JSON files! Isn't that techie of them. Can you use [this](http://tenorcms.com/)? I probably could, but I'm lazy. So I don't.

{% highlight json %}
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "type": "object",
  "title": "My Web Site",
  "properties": {
    "pages": {
      "type": "array",
      "title": "Pages",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "title": "Key"
          },
          "heading": {
            "type": "string",
            "title": "Heading"
          },
          "body": {
            "type": "string",
            "title": "Body",
            "format": "markdown"
          },
          "search_enabled": {
            "type": "boolean",
            "title": "Search Enabled"
          },
          "tags": {
            "type": "array",
            "title": "Tags",
            "description": "An array of tags",
            "items": {
              "type": "string"
            }
          },
          "title": {
            "type": "string",
            "title": "Title",
            "description": "The SEO title of the page, for web crawlers"
          },
          "description": {
            "type": "string",
            "title": "Description",
            "format": "textarea",
            "className": "short",
            "description": "The SEO description of the page, for web crawlers"
          }
        }
      }
    }
  }
}
{% endhighlight %}


## WordPress generates your pages
By 2005, static web content in one file was slowly getting replaced by WYSIWYG editing. WYSIWYG editors are a sort of CMS, but they also translate your designs and content into HTML, or style it and place it on the page in special ways.

WordPress also became quite universally recognized for this! The base 'content' field of every WordPress page or post is a WYSIWYG content editor.

> This is a terrible way to build pages in 2020...
>
> but it was very cool at the time.

But these days WP developers use templates to make custom page styles. That's a pretty baked-in and dynamic way to organize data. It's much more complex than just preserving your content, it's actually modifying your output.

## WordPress is decently opinionated
One of the great things about software development is ANYTHING IS POSSIBLE. Except that it's not that great when you have to reopen a cobwebby legacy project that was developed 10 years ago.

There are many ways to do something, but a Framework tells you one recognized way to do it. WordPress is no different. The [WordPress documentation](https://developer.wordpress.org/reference/functions/) and [PHP manual](https://www.php.net/manual/en/langref.php) (which I reference quite often) have many specific and accepted ways to do something.

You *could* build URL parameters by concatenating strings. You *could* manipulate AJAX requests with JavaScript alone. But WordPress has idiomatic ways to do these things. When they're used properly, those idioms become a part of your life. It never made sense to me that `$args` was an appropriately specific name for an array of details to send through a query request. I didn't think writing out `array()` was necessary. Now I do it every time.

{% highlight php %}
$args = array(
  'numberposts' => -1,
  'post_type'   => 'muffins'
);

$all_of_the_muffins = get_posts($args);
{% endhighlight %}

This indicates that WordPress is moderately *opinionated* about how you should use its tooling. That's not a CMS thing, that's a Framework thing.

## WordPress knows who you are
There are a number of other things that make WordPress much more than a CMS. For instance, a CMS doesn't usually take pride in its authentication and user roles, and yet those are a thing that WordPress does. [Dwayne Charrington](https://ilikekillnerds.com/) does a decent job of explaining a these in [this Quora answer](https://www.quora.com/Is-WordPress-a-PHP-framework/answer/Dwayne-Charrington).

Just because it's marketed to business as a standardized and easy-to-use product, it's entirely unfair to put WordPress in the CMS box.
