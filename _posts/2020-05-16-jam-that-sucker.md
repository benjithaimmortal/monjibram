---
title: You Should Probably Jamstack That
date: 2020/05/17 12:09:00 Z
categories:
- Jamstack
- Static&nbsp;Sites
tags:
- Featured
layout: post
author: Benji
hero: jam.webp
image: assets/images/jam.webp
---

I use WordPress all day every day. It's extremely customizable and easy for both web administrators and developers. But you don't need WordPress. You need Jamstack.

Top Hat makes custom WordPress sites that are both deliciously beautiful and incredibly easy to use. I work with a lot of small- and medium-sized businesses and their marketing sites. I also freelance for up-and-coming businesses and people who consider their budgets a bit lower. I'm even a participating member of WP Pittsburgh, the group for small business owners and developers who study and practice all things WordPress. But I'm still here telling you that ... you probably don't need it.

**Type your hosting fee here, then click the button.**
<!-- <form action="event.preventDefault()"> -->
  <input placeholder='$' name='Fee' style="
    font: 400 18px / 1.2;
    border-radius: 10px;
    border: solid 1px #cddeec;
    height: 33px;
    width: 345px;
    padding-left: 10px;
    ">
  <button for="Fee" onclick="alert('Too much :(')" style="
    margin-top: 15px;
    border-radius: 10px;
    /* border: solid 1px #cddeec; */
    height: 35px;
    padding: 0 15px;
    color: white;
    background-color: #d42c41;
    border: unset;">
      How much do you pay?
  </button>
<!-- </form> -->

There's got to be a catch, you say. I get what I pay for. I'm going to drop quality somewhere. Maybe I won't get a custom url? Maybe I have to choose from a gaudy design template, or worse, use a clunky website editor like it's 2005 and I'm building a MySpace profile. Is it going to be slow? It'll probably be really slow.

It's true that if you're paying for a little server you're probably not getting the maximum speed out of your site. And if you're hosting tons and tons of data like a forum or a video library you will need a place to store it (and that gets expensive in its own right). But why use a server at all? This is the decade of STATIC SITES.

Static Site
: A website that downloads everything to your browser and processes things from there [browser-based]
: A website that can connect to everything without querying a hosting server many times [pre-rendered]

You've probably heard of this before. These days it's called the Jamstack, or **J**avaScript, **A**PIs and **M**arkup, which is an easier way of thinking about its key components. But we should start from the beginning of JAM. Or is it the end?

## M[arkup]

#### Some History
Actually, static sites have been around since the 1990's. Back before every page needed login credentials, when the internet was a small place with anonymous pages, many of those pages were static HTML markup. They were quick, available to everyone, and cheap on server resources. That's the definition of a marketing site!

So why isn't everything static? Your own technical experience, for starters. Early static sites required experience with HTML at a bare minimum. Adding assets like audio, images, and video dynamically and styling the results was a big ask. A graphical interface for uploading media? Forget it.

That's where WordPress came in, and that's why it's been the king for almost 20 years. It provides a cool(ish) GUI that will help your marketing people get the job done without getting encumbered by strange `{curly braces}` and `$weird_Naming_Conventions`.

But today we've got [Ghost](https://ghost.org/) and [Forestry](https://forestry.io/) bringing the heat without the cost of a fire. These give you the freedom to use good-looking interfaces and a Google Docs-style text editor, and their base plans are free!

## A[PIs]

#### You Probably Don't Need to Log In. But If You Do...
You're not making Facebook 3.0. You're not asking for a number-munching Site as a Service. You're just trying to get visibility. Any dynamic experience you need to give your customers could come from a simple cookie.

> If that last sentence sounded like gibberish, [talk to me later]({% link contact.html %})

But even if you are, modern web development uses these cool things called REST APIs for a lot of heavy lifting. These are tiny applications that talk to your site from afar, and deliver content you need on request. The speed improvement compared to building dynamic content on the page is readily apparent. Those large media and file databases we spoke of earlier can still exist independently of your site, and they don't need to slow you down.

That includes eCommerce. There is no reason to set up your products on a service like [Shopify](https://shopify.dev/docs/admin-api/rest/reference) or [WooCommerce](https://woocommerce.github.io/woocommerce-rest-api-docs/#introduction), then set them up again inside of your own site. Do it once, and then interface with it. Hence **A**pplication **P**rogramming **I**nterface. Heck, you can even use [SnipCart](https://snipcart.com/) and it will do most of the integrating for you. ✌️


## J[avaScript]
#### And then there was JavaScript
Wix costs up to *$500 a month* for fancy templates. WordPress plugins will quickly rack up site costs for functionality. But a one-size-fits-all solution, built to scale to any size, also adds a lot of dead weight. All the processing work for a page to render on a server *quickly* becomes more taxing than an API, and rarely is anything new actually getting done.

A savvy developer could template and build a lightweight, fully custom site to your exact specifications. But actually there's more than that! What if your site could preload the next page's images while you read, or hack the browser to stop it from reloading content it already has? That's possible with modern JavaScript frameworks like React, Angular, and Vue.

I strongly encourage you to hit F12 and take a look at all the crazy things a simple blog like this needs to load and give to every browser that visits. Search engine meta, styles, JS libraries to make things scroll smoothly... on a standard hosted site it will all load again on every click. Storing it properly and only loading *new* things adds serious speed. I'm talking [blazingly](https://www.shopflamingo.com), [ludicrously](https://ca.braun.com/en-ca) [fast](https://airbnb.io/).


So that's the *MAJ*-- I mean-- **Jamstack**, and it's going to separate you from your competition. All you need is [the right developer]({% link contact.html %}). And save all of the hosting costs! That hosting money is much better spent on web consultancy, or invested in the development of the site itself.

After that it's 100% yours. You can build out additional pages to your needs, and fill it up with content that will directly attract your clientele. You can even sell products. All without that monthly hosting fee.