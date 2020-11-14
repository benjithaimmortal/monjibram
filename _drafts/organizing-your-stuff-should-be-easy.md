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
But stuff rarely is, is it? This week we did a thing on a website. It required us to create or update something, depending on whether or not that thing exists. Simple enough, if you're copy and pasting, but still time consuming when you're writing DRY code.

> By the way, DRY means **D**on't **R**epeat **Y**ourself.

**DRY** code is one of those useful code anachronisms that was probably coined by Uncle Bob or Ada Lovelace or Abraham Lincoln (it's actually attributed to Andy Hunt and Dave Thomas, if you care), which is incredibly overworked by the fancy developers you'll see waxing eloquent on [complex new frameworks](https://www.youtube.com/watch?v=G6qOvbLngVs), or talking quickly and passionately about [things that don't matter](https://youtu.be/qGdYVslWJdQ?t=906).

But it's time consuming. If you are a precognitive savant, you can use your innate talents to divine the whole structure of what you're doing the first time. For the rest of us, we review our code many times as things progress, and keep refining it.

So I'm thinking about this code that I wrote once, which is a perfectly useful example. I'm trying to process some existing Custom Post Types and import them into existing, more specific ones.

I'm not thinking about speed, here. Even if there are hundreds and hundreds of these things, it's not going to overwhelm my processor. It's not a web view, so I'm not making users wait around. It's just a one-time transaction.

Prepare to [skip to the end](#after-the-first-pass) if you don't want to scroll through the muck and comments!

## The First Pass
{% highlight php %}
// I want to add some new Custom Post Types called Kittens, but I want to use the existing data from Cats.
$kittens = get_posts(array(
  'numberposts' => -1, // this defaults to ten, but I want all of them
  'post_type'   => 'cat',
  'post_status' => 'publish',
  'meta_key'    => 'baby',
  'meta_value'  => 'true',
));

// Now things get complex. the end of this foreach is a long way away.
foreach ($kittens as $i => $kitten) {
  $original_id = $kitten->ID;
  $title = $kitten->post_title;
  $calico = get_field('calico', $original_id);
  $other_cat_meta = get_post_meta('cat_meta', $original_id);
  // more metadata
  
  // But wait, is there already a Cat like this in my Kittens?
  // I don't want duplicates, in case I have to modify the data and run this migration again later.
  $(existing_kitten) = get_posts(array(
    'post_status' => 'publish',
    'post_type' => 'kitten',
    'title' => $title,   // let's say that most titles are unique
    'calico' => $calico, // and that this solidifies that
  ))[0]; // I trust that your data selection is unique **side eye**
  
  if ($existing_kitten->ID) {
  	$confirmation = update_post(array(
    	'ID' => $existing_kitten->ID,
        'title' => $title,
	    'calico' => $calico,
		'cat_meta' => $other_cat_meta
        // more things
    ));
  } else {
	// No existing kittens, proceed with making a new post
    $confirmation = insert_post(array(
      'title' => $title,
	  'calico' => $calico,
	  'cat_meta' => $other_cat_meta,
      'post_status' => 'publish',
      'post_
      // more things
    
    ));
  }
  
}

{% endhighlight %}

## After the First Pass
