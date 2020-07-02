---
title: "Paginate This Blog"
date: 2020/05/17 12:07:00 Z
categories:
- Tutorials
layout: post
author: Benji
hero: pages.webp
image: assets/images/pages.webp
---

I used the following code in `/config.yml`:

{% highlight js %}
paginate: 5
paginate_path: "/blog/:num/"
{% endhighlight %}


I also learned that `index.html` becomes the slash on whatever its root. For example, `blog/index.html` is happily routed as `/blog/`! So don't worry about 

Oh dear, and I'll likely do [this](https://eduardoboucas.com/blog/2014/11/05/adding-ajax-pagination-to-jekyll.html) next...

The End.