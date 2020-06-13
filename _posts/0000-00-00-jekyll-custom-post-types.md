---
title: WordPress Custom Fields but Free
date: 2020/06/13
categories:
- Tutorial
hero: automation.jpg
sentence: I used Liquid to fill in this blockquote.
---

Cutting edge web technologies don't always document features. Either they lack the ability to convey the full scope of their power from the first release, or they release new features gradually after the MVP. That's pretty much the opposite of the old guard of incredible WordPress plugins. A personal favorite static framework of mine is Jekyll, because it's simple. But I guess it isn't so simple after all.

Sometimes you're good at more than one type of thing. That's OK, you're human. We like to categorize things and study them logically to distinguish them from each other. We argue about definitions. We like tables.

But that's *not* so OK if you're developing on a "simple" blog templating tool like Jekyll. Those things only do blogs, right? The type of data you're storing is a blog. The metadata on those posts is standard. You can't well use that for recipes AND blogs. Just make a `recipes` tag and call it a day.

Luckily that's not true at all... you can automate almost anything you want with a little ingenuity, and automation is the key to efficient web work. In most cases I'm learning Jekyll was actually built for this sort of automation, but the documentation isn't always very helpful to show you [how to use it](https://jekyllrb.com/docs/liquid/).

## Meta-meta
Metadata feels like a good place to start breaking the 'blog' idea. In WordPress the most popular metadata tool is called Advanced Custom Fields. ACF allows you to attach images, text, dates, even repeating and iterable internal groups, all within a single page template or custom post type. For each page that uses the template, you can fill in new metadata and create an entirely custom page -- but with the same format and style. Hence the word `template`.

Jekyll and many static site generators use [Liquid](https://shopify.github.io/liquid/) to provide metadata in markdown and HTML page *layouts* (= templates) and page contents. For the purposes of this blog, it's most often the variables with unique names that are stored on top of each page.

> {{ page.sentence }}

ACFs on WordPress are cool because you don't really have to build everything in WYSIWYG (or write only blogs all day) to make a beautiful page. Liquid on Jekyll is cool because you don't really have to read through any HTML to build a page. Let's look at an example base layout template:

## Example: base_template.html
{% highlight html linenos %}
{% raw %}
<!doctype html>
<html lang="en-US">
  {% include header.html %}
  <body>
    <section class="main-grid">
      {% include nav.html %}
      <div class="inner">
        Today I am talking about {{ page.fruit }}. I really {{ page.preference }} them, because they {{ page.action }} every time I hear about them. They only cost {{ page.cost }}
        <br>

        So at the store:
        {% for page in site.pages %}
          {{ page.fruit }} cost {{ page.cost }}
          {% unless forloop.last %}, {% endunless %}
        {% endfor %}

        {{ content }}
      </div>
    </section>
    {% include footer.html %}
  </body>
{% endraw %}
{% endhighlight %}

Liquid is being used in two ways here. It's including other templates on the page with {% raw %}`{% include %}`{% endraw %} and it's providing dynamic page metadata variables inside of mustachey brackets {% raw %}`{{ }}`{% endraw %}. Those brackets aren't confined to page variables. One of the most common variables I use on this site is {% raw %}`{{ site.baseurl }}`{% endraw %} from `config.yml`. But for the purposes of page-content, yes, you can have these things on each page!

## Setting your variables on the page
Now you've got the ***layout***, you can require it in the **_front matter_** of each page you want to set for that template. Front matter is written in yaml, so if you've ever written a docker file you're already halfway there. Or... the other way around!

### Example: pagename.md
{% highlight md %}
---
# the front matter is separated from rest of the document by three dashes on top and bottom
layout: base_template # the html doc above
fruit: apples
preference: don't care about
action: make me fall asleep
cost: $5

# you can put arrays here
coolstuff:
- backpack
- sword of destiny
- mandarin oranges

# you can even make associative arrays!? nuts
images:
- alt: copypasta
  url: /assets/images/spaghetti.png
- alt: codesmells
  url: /assets/images/feet.png

link:
- url: https://www.monjibram.com/contact
  title: Contact Benji
  target: _blank
  class: black-button
---

Those arrows above are **all of your dynamic data**. This markdown below will eventually be where the {% raw %}`{{ content }}`{% endraw %} variable is placed. But this section could also be blank.
{% endhighlight %}

### Output:
Today I am talking about apples. I really don't care about them, because they make me fall asleep every time I hear about them. They only cost $5
So at the store: apples cost $5, bananas cost $3, asian pears cost $15

Those arrows above are **all of your dynamic data**. This markdown below will eventually be where the {% raw %}`{{ content }}`{% endraw %} variable is placed. But this section could also be blank.


## Templates gonna template
You can stamp out as many of these templates as you want. In the example above we made 3 pages (with apples, bananas, asian pears), evidenced by the iteration on the final section.

I cannot emphasize enough how exactly the same as WordPress post meta this is, because *it is post meta*. A free CMS easily adds a graphical interface to the process for people who don't want to deal in yaml, but the yaml itself is easy to read. [It's not a reason for WordPress.]({% link _posts/2020-05-16-jam-that-sucker.md %})

## Conclusions
"Unique Custom Content" is such a big deal in SEO. A marketing site with 5 unique but beautiful (if visibly similar) pages is going to be highly optimized. Blogs aren't the only page style (and certainly aren't the most efficient) when you're trying to build that custom product weight for search placement. Make the job easier: template out your custom page builds!