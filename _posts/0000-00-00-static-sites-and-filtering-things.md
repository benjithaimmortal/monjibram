---
title: How I Paginated This Blog
date: 2020-11-28
categories:
- Static&nbsp;Sites
- Tutorials
tags:
- Featured
hero: pages.webp
image: assets/images/pages.webp
---

You should use Ajax. It's bad practice these days to paginate a blog with buttons. I don't want to press buttons. I have high-speed internet everywhere. I want the internet to work for me, and so do your readers.

Coincidentally, you should also stop paying fees for a server to do these things for you. I pay nothing for this site but URL domain fees. I know, you're jealous. I maintain that it isn't that hard, and that [it's the best]({% link _posts/2020-05-16-jam-that-sucker.md %}), and that developers should do this stuff for big ol' companies. And I do it for big ol' companies from time to time, just to prove it! (Well, maybe also for money...)

I'm also one of those guys who spends a lot of time [visualizing and manipulating data with WordPress]({% link _posts/0000-00-00-organizing-your-stuff-should-be-easy.md %}). It isn't surprising that I expected that functionality when I was building out my own blog. Blogs are pretty standard things to sort and filter, after all.

## How am I sorting, anyway?

Sorting a thing isn't bad. It's JavaScript territory. I'm attaching the blog's taxonomy (in this case, `tags`) to the post-card anyway. You can see them here. So by the time the HTML is outputting, I can grab the relevant info to filter `posts` by `tag` no problem. By the way, **I used jQuery here**. Not because you need to! But jQuery has `.ajax()` and it's a lot easier than `XMLHttpRequest()`. Grab it in CDN form [here](https://code.jquery.com/), and slap the generated HTML tag above your JS output.

![Cards for each post, on the blog index page]({{ site.baseurl }}/assets/images/blog/post-card.png "Post cards! Ha.")

{% highlight html %}
<!-- Example filter HTML -->
<div class="filter" data-filter="static-nbsp-sites">Static&nbsp;Sites</div>

<!-- Example Post Card HTML -->
<a href="/static-sites-and-filtering-things/" class="post-card" data-filter="static-nbsp-sitestutorials">
  <div class="left">
    <div class="tag-date">
      <div class="tags">Static&nbsp;Sites, Tutorials</div>
      <div class="date">11/28/20</div>
    </div>
    <div class="title">How I Paginated This Blog</div>
    <p class="shortcut">I pay nothing for this site but URL domain fees. I know, you’re jealous. I maintain that it isn’t that...</p>
  </div>
  <div class="right" style="background-image: url(/assets/images/pages.jpg);"></div>
</a>
{% endhighlight %}

{% highlight js %}
$('.filter').click(function(){
  // this is the 'return to unfiltered' state
  if ($(this).hasClass('active')) {
    // could easily make an unfilterCards() function for this, but it's so small in my case
    $('.post-card').show();
    $(this).removeClass('active');

  // and this is where the filtering happens
  } else {
    var filter = $(this).data('filter');

    // this is where the transitions happen. the important thing is it uses .hide() and .show() on post cards
    filterCards(filter, $(this));

    // oh! this looks interesting... read on.
    while (($('.post-card[data-filter*="' + filter + '"]').length < 6) && (totalPages != nextPage)) {
      loadMorePosts();
    }
  }
})
{% endhighlight %}

## But what if the blogs aren't on the page?

The way Jekyll deals with posts is pretty standard. There's a plugin called `paginator`. It intakes how many blogs were output, and does the hard work of keeping track of it for you. You can [change the paginator settings](https://jekyllrb.com/docs/pagination/) in the config file. I can do similar things in Hugo or Eleventy. It looks a bit different in a front-end framework, but this is good enough for concepts.

{% highlight rb %}
# encapsulate all of these commands in { % % } for use in Jekyll templates
for post in paginator.posts
  # post-cards is the html that outputs the stuff above
  include post-cards.html
endfor
{% endhighlight %}

So `paginator` is doing a few cool things for us. It's outputting exactly the HTML we need for that page, so we don't need to load every `post` in the site. It's keeping track of how many `posts` it output. It's even making extra pages at `/blog/2` and `/blog/3` and so on. That last one's especially important for my purposes.

> You can see `paginator` in action [here]({{ site.baseurl }}/blog/3), but the Ajax will make it act funny.

## Paginator did its job too well

I asked paginator to leave six posts on the page and that's exactly what it did. When I `.hide()` a few of them, it's going to look pretty terrible. People will expect 6 `posts` to show up, unless there are no more posts in that category.

So what about this one we're filtering, `Static&nbsp;Sites`?  The only other post with that `tag` is one of the [first I ever wrote]({% link _posts/2020-05-17-paginate-with-jekyll.md %})! It's definitely not going to be in the HTML for page one, the most recent 6 `posts` of the whole blog. I need to go get it. Thus, `loadMorePosts();`


## Go get more stuff

Ajax is how we go get more stuff on a living, breathing page:

{% highlight js %}
var nextPage = 2;
var totalPages = new Number ($(".post-flex").data("totalPages"));

function loadMorePosts() {
  // I make a pretty little loading function. though it's so fast you never see it :)
  $(".skeleton").addClass("active");
  
  // that thing I keep telling you about
  $.ajax({
    type: 'GET',
    // example, https://www.monjibram.com/blog/2
    url: '{{ site.baseurl }}/blog/' + nextPage,
  })
    .done(function(response){
      // the response's body is simple HTML, so we can jQuery it
      $(response).find('.post-card').each(function(){
        // put the posts at the end, and remove the skeleton loading function
        $('.post-flex').append(this);
        $('.skeleton').remove();

        // hide cards we don't need
        if ($('.filter.active').length) {
          filterCards($('.filter.active').data('filter'), $('.filter.active'));
        }
      });

      // iterate nextPage for the next time we need it
      nextPage = nextPage + 1;
    });
}
{% endhighlight %}

## Now check again... again... again...

Now we can explain this line at the end of our initial filter function.
{% highlight js %}
while (($('.post-card[data-filter*="' + filter + '"]').length < 6) && (totalPages != nextPage)) {
  loadMorePosts();
}
{% endhighlight %}

**Unpacked...**
- As long as we haven't hit 6 posts, the visible minimum, keep loading more
- Load 6 posts at a time, and keep checking them
- If we hit the last page, we did it all! You can stop now.

That last line used Jekyll's `paginator.total_pages`. That's pretty key.

## Conclusions

So I did a thing you're used to doing with backend code on a SSG. This wasn't and isn't a hard thing to do. You should do it on your blog!

Clearly there are some other things to take into account before it goes critical and starts to feel like a natural page. Even writing this blog, I found issues with how the posts were displaying in `flex` with `justify-content: space between`. Did you find them too? I could definitely solve a layout thing like that in a future blog, but until then I'll leave it! Sleuth away 🕵️‍♂️