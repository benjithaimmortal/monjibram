---
title: Organizing Your Stuff Is[n't] Easy
date: 2020-11-13
categories:
- Tutorial
- WordPress
layout: post
author: Benji
hero: organize_and_update.jpg
image: "/assets/images/organize_and_update.jpg"
tags:
- Featured

---
But it rarely is, is it? This week we did a thing on a website. It required us to create or update something, depending on whether or not that thing exists. Simple enough, if you're copy and pasting, but still time consuming when you're writing DRY code.

> By the way, DRY means **D**on't **R**epeat **Y**ourself.

**DRY** code is one of those useful code anachronisms that was probably coined by Uncle Bob or Ada Lovelace or Abraham Lincoln (it's actually attributed to Andy Hunt and Dave Thomas, if you care), which is incredibly overworked by the fancy developers you'll see waxing eloquent on [complex new frameworks](https://www.youtube.com/watch?v=G6qOvbLngVs), or talking quickly and passionately about [things that don't matter](https://youtu.be/qGdYVslWJdQ?t=906).

But it's also time consuming. If you are a precognitive savant, you can use your innate talents to divine the whole structure of what you're doing the first time. For the rest of us, we review our code many times as things progress, and keep refining it.

So I'm thinking about this code that I wrote once, which is perfectly useful. I was trying to process some existing Custom Post Types and make newer, more specific ones:

{% highlight php %}

// I want to make a new Custom Post Type called Kittens, but I want to use the existing data in Cats.

$kittens = get_posts(array(

  'post_type'   => 'cats',

  'post_status' => 'publish',

  'meta_key'    => 'baby',

  'meta_value'  => 'true',

));

{% endhighlight %}