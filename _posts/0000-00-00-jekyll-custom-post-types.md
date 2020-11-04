---
title: WP Custom Post Types but Free
date: 2020-06-27
categories:
- Tutorials
- WordPress
tags:
- Featured
hero: custom-food-types.svg
image: assets/images/custom-food-types.svg
---

Sometimes you're good at more than one type of thing. That's OK, you're human. We like to categorize things and study them logically to distinguish them from each other. We argue about definitions. We like tables. We like lists. We make Custom Types for everything.

What's *not* so OK is if you're developing on a "simple" blog templating tool and you think you can't. Those things only do blogs, right? The type of data you're storing is a blog. The metadata on those posts is standard. You can't well use that for recipes AND blogs. Just make a `recipes` tag and call it a day.

Luckily that's not true at all... you can automate almost anything you want with a little ingenuity, and automation is the key to efficient web work. In most cases I'm learning Jekyll was actually built for this sort of automation, but the documentation isn't always very helpful to show you [how to use it](https://jekyllrb.com/docs/liquid/).

## Meta-meta
In part one [we talked about Liquid]({% link _posts/0000-00-00-jekyll-custom-fields.md %}), and how to use it to make ACF-like custom fields on your static marketing site. That's all well and good if you've got individual pages that you want to clone. But what about whole categories of content?

## Meta-meta-meta
WordPress calls that stuff Custom Post Types. It's based on the idea that you want `posts` for writing things, but you also want a `projects` section that shows off your wow mad skillz. You'd probably like to query those `projects` independently of the `posts`. And maybe you'd like some `events`, `programs`, `cats`, and `hairpieces`. Your business is not the strangest thing on the internet, I promise.

All of those types are still going to generate data in the same way a blog would. You'll have an index, an author, a post-date, a title, and some contents. You'll have a single template for the files, with whatever custom metadata you like, and you can query a list of all of the fields in some format to make it easy for people to search and peruse.

## Custom Post Types are called Collections
As we know, Jekyll is a blog generator! Jekyll does the bloggy parts of this just fine. It also has built-in functionality for Custom Post Types that work in tandem with the blog. The creators of Jekyll, having no ties to WordPress that I know of, decided _not_ to name their custom post types Custom Post Types. They call them Collections.

In 5 years of building Jekyll sites, I never came across a Collection. I didn't know what it was. (Before I had a full-time development job, I didn't even know why I would need something like it.) But it is pretty darn swanky! It can do everything that a WordPress CPT can do, and pre-render the pages as they are built.

> Pre-rendered for your viewing pleasure

I will say that again, louder. It can do all of the work to render a list of these blogs _one time_ and _store the results_ to be served instantly. If the build time takes an extra ten minutes, it's not a bother for your end users. If you come from a WordPress background (or most full-stack projects), this might take some getting used to.

## Old Way of thinking:

This is a common thought process for a WordPress developer:
- I need only the posts within a certain Post Type, with a certain field.
- I need to loop through them and grab a connecting ID for other post types.
- Then I need to loop through _those IDs_ and display their special metadata.

### Really bad but easy to follow example
{% highlight php %}
$artist_query = get_posts(array(
  'numberposts' => 0,      // all of 'em
  'post_type'   => 'artist'
));

// iterate through all the Artists after a single query
foreach ($artist_query as $artist) {
  $id = $artist->ID;

  // making queries inside of loops is baaaaaad news
  $art_query = get_posts(array(
    'numberposts'  => 0,
    'post_type'    => 'art',
    'meta_key'     => 'artist',
    'meta_value'   => $id
  ));
}
{% endhighlight %}


Looping through multiple large queries is going to slow down your page. Maybe you should just index those files yourself in some post meta and make things easier to find. Make a cron and keep things synchronized. If you're getting fancy here, you might jump into the database itself with a `JOIN`. It's going to depend a lot on the size of your indexing lines, to be sure.

### Real world indexing example
{% highlight php %}
// start by iterating through all the Artists to set up the index
$artists = [];
foreach ($all_artists as $artist) {
  $id = $artist['ID'];
  $artists[$id]['ID'] = $id;
}

// then do the same with each piece of Art
$art = [];
foreach ($all_art as $work) {
  $id = $work['ID'];
  $art[$id]['ID'] = $id;
  $art[$id]['artist_id'] = get_field('artist', $id); // yeah, this was an ACF too

  // add only what you need from the Art CPT in the Artist array
  $a_id = $art[$id]['artist_id'];
  if (is_array($artists[$a_id]['art'])) {
    $artists[$a_id]['art'][$id] = array(
      $id,
      $work['post_title']
    );
  }
}
{% endhighlight %}


## I digress
Once again, _you really don't have to worry about all that optimization with a static site!_ It indexes and builds itself. Users will see all that automation like you did it by hand. These days static sites are even smart enough to know when you're changing files, and do [incremental builds](https://jekyllrb.com/docs/configuration/incremental-regeneration/) which are smart enough to keep those complicated queries from slowing down your whole site build every time. You won't waste time either.