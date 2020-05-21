---
title: You Should Probably JAM-Stack That
date: 2020/05/17 12:09:00 Z
categories:
- JAM-stack
- Static Sites
layout: post
author: Benji
hero: jam.jpg
---

I use WordPress all day every day. It's extremely customizable and easy for both web administrators and developers. But you don't need WordPress. You need JAM-stack.

Top Hat makes custom WordPress sites that are both deliciously beautiful and incredibly easy to use. I work with a lot of small- and medium-sized businesses and their marketing sites. I also freelance for up-and-coming businesses and people who consider their budgets a bit lower. I'm even a participating member of WP Pittsburgh, the group for small business owners and developers who study and practice all things WordPress. But I'm still here telling you that ... you probably don't need it.

**Enter your hosting fee here, then click the button**

$ <input type="number" class='doesnt-matter' placeholder=40 style="padding: 5px 0;">
<button onclick="alert('Too much :(')" style="padding: 5px; border: none; background: #d8acb2;">How much?</button>

There's got to be a catch, you say. I get what I pay for. I'm going to drop quality somewhere. Maybe I won't get a custom url? Maybe I have to choose from a gaudy design template, or worse, use a clunky website editor like it's 2005 and I'm building a MySpace profile. Is it going to be slow? It'll probably be really slow.

It's true that if you're paying for a little server you're probably not getting the maximum speed out of your site. And if you're hosting tons and tons of data like a forum or a video library you will need a place to store it (and that gets expensive in its own right). But why use a server at all? This is the year of STATIC SITES.

Static Site
: A website that doesn't need to send data back and forth to your browser to provide its content [browser-based]
: A website that can connect to everything without a server [serverless]


#### M[arkup]

## Some History
Actually, static sites have been around since the 1990's. Back before every page needed login credentials, when the internet was a small place with anonymous pages, many of those pages were static HTML markup. They were quick, available to everyone, and resource-cheap. That's the definition of a marketing site!

So why isn't everything static? Your own technical experience, for starters. Early static sites needed experience with HTML at a bare minimum. Adding assets like audio, images, and video dynamically and styling the results was a big ask. A graphical interface for uploading media? Forget it.

That's where WordPress came in, and that's why it's been the king for almost 20 years. It provides a cool(ish) GUI that will help your marketing people get the job done without getting encumbered by strange `{curly braces}` and `$weird_Naming_Conventions`.

But today we've got [Ghost](https://ghost.org/) and [Forestry](https://forestry.io/) bringing the heat without the cost of a fire. These give you the freedom to use good-looking interfaces and a Google Docs-style text editor, and their base plans are free!

#### A[PIs]

## You Probably Don't Need to Log In. But If You Do...
You're not making Facebook 3.0. You're not asking for a number-munching Site as a Service. You're just trying to get visibility. Any dynamic experience you need to give your customers could come from a simple cookie.

> If that last sentence sounded like gibberish, [talk to me later]({% link contact.html %})

But even if you are, modern web development uses these cool things called REST APIs for a lot of heavy lifting. These are tiny applications that talk to your site from afar, and deliver content you need on request. They're the fast-food of the internet, and the speed is readily apparent. Those large media and file databases we spoke of earlier can still exist independently of your site, and they don't need to slow you down.

That includes eCommerce. There is no reason to set up your products on a service like [Shopify](https://shopify.dev/docs/admin-api/rest/reference) or [WooCommerce](https://woocommerce.github.io/woocommerce-rest-api-docs/#introduction), then set them up again inside of your own site. Do it once, and then interface it. Hence **A**pplication **P**rogramming **I**nterface. Heck, you can even use [SnipCart](https://snipcart.com/) and it will do most of the interfacing for you. ✌️


#### J[avaScript]
## And then there was JavaScript
Wix costs up to *$500 a month* for fancy templates. WordPress plugins will quickly rack up site costs for functionality. But a one-size-fits-all solution, built to scale to any size, also adds a lot of dead weight. All the talking back and forth between your site and a server *quickly* becomes more taxing than an API, and nothing new is actually getting done.

A savvy developer could template and build a lightweight, fully custom site to your exact specifications. But actually there's more than that! What if your site could preload the next page's images while you read, or hack the browser to stop it from reloading content it already has? That's possible with modern JavaScript frameworks like React, Angular, and Vue.

I strongly encourage you to hit F12 and take a look at all the crazy things a simple blog like this needs to load and give to every browser that visits. Search engine meta, styles, JS libraries to make things scroll smoothly... on a standard hosted site it will all load again on every click. Storing it properly and only loading *new* things adds serious speed. I'm talking [blazingly](https://www.shopflamingo.com), [ludicrously](https://ca.braun.com/en-ca) [fast](https://airbnb.io/).


So that's **JAM-stack**, and it's going to separate you from your competition. All you need is [the right developer]({% link contact.html %}). And save all of the hosting costs! That hosting money is much better spent on web consultancy, or invested in the development of the site itself.

After that it's 100% yours. You can build out additional pages to your needs, and fill it up with content that will directly attract your clientele. You can even sell products. All without that monthly hosting fee.