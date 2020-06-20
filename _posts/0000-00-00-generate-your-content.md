---
title: Generate Your Static Content
categories:
- Static Sites
- SaaS
author: Benji
date: 2020-07-05
---

These days, small websites are different. Actually small is probably the wrong term. What I'm talking about has nothing to do with your daily user count, your content size, or the hosting fees you [probably shouldn't be paying](https://www.monjibram.com/jam-that-sucker/). The correct term is probably **display**.

Let's take even greater liberties with this and say there are only two types of websites in this world: the ones that **do** something and the ones that **display** something. If you are working to develop the unique algorithms for exactly the third results page of a Google Search (or you're just working in Software as a Service), you are firmly in the **do something** camp. At least, your product is.

For the majority of us, especially those who are trying to paint a beautiful graffiti of words across the internet, we're residing in the **display** category. Any blog on the internet is a **display** site, but so are many others! Marketing, advertising, documentation, even learning management and ecommerce, all of these demonstrate unchanging (read: static) content for people to consume.

**Display** websites rarely need dynamic, user-specific views. The majority of content is the same for everyone. Your site might change when you update it[^1], but it won't change based on the visitors.

[^1]: or if a browser-based API provides the data!

My argument is a simple one: if you are building **display** websites in 2020 and you haven't considered the Jamstack, you are in a dangerous position.

For one, your prospective clientelle are shrinking. As the world moves on from WordPress and Drupal, there is less reason to stay connected with the base administrator CMS panel because 'that's what everybody else has'. It's been a strangely compelling argument for the past 10 years, but it's a fading one.

Your development and maintenance fees are also rising. As WordPress developers gain more experience (and as many experienced developers move on in favor of more updated technologies), it's no longer easy to find affordable senior talent who will add appropriate value to your products. New CS graduates are also gravitating toward those SaaS brain trusts, or looking for careers in front-end technologies.

Your open-source tooling is also losing support. We've all heard the horror story of a hacked site, but the nature of modern software is open-source. I am simply unable to build out custom, native support for every feature you need. My job is to automate your site; it naturally makes sense to automate the development process as well. As the internet evolves, the tools that made something awesome in 2015 might be a dangerous choice in 2020. Libraries that once had many contributors might now be [defunct](https://www.whoishostingthis.com/compare/wordpress/dead-plugins/).

There's good reason that things are changing. Jamstack is a smarter way to accomplish your goals. It will encapsulate the basic functions on your site and optimize them. It'll pre-render things that really don't need to be done on HTTP calls. And it'll be much more fun to use than a 20-year-old CMS/framework.