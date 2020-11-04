---
title: Size Matters
date: 2020-08-31
categories:
- Site&nbsp;Architecture
hero: size-matters.webp
image: assets/images/size-matters.webp
---

Let's say you've got a store, and you've got 50 products in it. Maybe that store sells, I don't know, pants. For men and women. Sometimes you need to list all of those products on a page. You would just index them, right?

Maybe that's what I'm not quite getting. You could potentially list every single product on that page, without slowing things down. There's no need to build out a great and terrible Web Application for that store. Make sure the images lazy-load and you're good to go.

What if that store gets really popular, you ask? Then the simple answer helped. Query the API, update product quantities on your local index, and you're done.

We are in the business of finding the _right_ framework for each situation. Sometimes (rarely) the right framework is the biggest. Sometimes it's a single page. It's usually going to be in the middle. [It's always got to be fast]({% link _posts/2020-05-16-jam-that-sucker.md %}).

I apologize for my Coyier-esque blog. You deserved more content than this. But sometimes the idea is more important than the implementation.