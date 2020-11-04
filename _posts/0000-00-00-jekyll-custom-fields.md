---
title: WordPress Custom Fields but Free
date: 2020-06-13
categories:
- Tutorials
hero: automation.webp
image: assets/images/automation.webp
sentence: I used Liquid to fill in this blockquote.
---

Cutting-edge web technologies don't always document features. Either they lack the ability to convey the full scope of their power from the first release, or they release new features gradually after the MVP. That's pretty much the opposite of the old guard of incredible WordPress plugins. A personal favorite static framework of mine is Jekyll, because it's simple. But I guess it isn't so simple after all.

Jekyll is known as a tool for making your blog. The `<h1>` on [jekyllrb.com](https://jekyllrb.com) is... uh, well, actually, it's the Jekyll logo. But the hero text is "Transform your plain text into static websites and blogs." Did you know you can make a blog with Jekyll? If not, perhaps you should reat about it:

> "Jekyll is built with Ruby, and is most often used for blogs and personal projects" --[Netlify](https://www.netlify.com/blog/2016/05/02/top-ten-static-website-generators/)

> "A simple, blog-aware, static site generator" --[staticgen.com](https://www.staticgen.com/)

> "It’s still great for what it’s great at—smaller websites, blogs and is widely used by e-commerce sites." --[Snipcart](https://snipcart.com/blog/choose-best-static-site-generator)

> "This blog was made with Jekyll" --[Benji](https://www.monjibram.com)


Learning all the things you can do with Jekyll is another subject entirely. Here's a [single page of Jekyll's official documentation](https://jekyllrb.com/docs/liquid/). It is definitely not the Jekyll team's finest moment. I can't throw shade, the contributors are doing most of this for free after all! But how could I know that it does pretty much the same things I do at work on WordPress? I couldn't. I didn't. 

## Meta-meta
Metadata feels like a good place to start breaking the 'blog' idea. In WordPress the most popular metadata tool is called Advanced Custom Fields. ACF allows you to attach images, text, dates, even repeating and iterable internal groups, all within a single page template or custom post type. For each page that uses the template, you can fill in new metadata and create an entirely custom page -- but with the same format and style. Hence the word `template`.

Custom metadata is not terribly helpful on a blog. Blogs are mostly unique and custom *content*. The data that surrounds that content is usually filled in with [scaffolding](https://en.wikipedia.org/wiki/Scaffold_(programming)), which follows a lot of specific rules and is very well thought through. So sure, Jekyll has that stuff and it's easy to understand, but you don't need to make it. It's already there.

If you're coming from a WordPress background, you already know this. You also know you do need custom metadata when you're making _pages_ for things.

And you can do that! Jekyll and many static site generators use [Liquid](https://shopify.github.io/liquid/) to provide metadata in markdown and HTML page *layouts* (= templates) and page contents. For the purposes of this blog, it's most often the variables with unique names that are stored on top of each page.

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
