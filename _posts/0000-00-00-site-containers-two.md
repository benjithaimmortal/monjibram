---
title: "Secrets of the Site Container: Part 2"
date: 2020-08-08
categories:
- Tutorials
tags:
- Featured
hero: pretty-container.webp
image: assets/images/pretty-container.webp
---

Containers are functional. Containers are necessary. Without them you're exploring the great unknown of horizontal scrolling on a vertical page. Holding shift when you torque the mousewheel. It isn't too much to ask to make it beautiful, though, is it?

Well, to be honest, most of the time that answer is yes. Function always comes before form, and things aren't going to work better if you add bells and whistles. I really, truly believe that isn't just my Pennsylvania Dutch heritage telling me that it doesn't get better than hand-built Amish furniture. *These hills are in my blood.*

But we do need creativity and freedom. We need to show that we aren't constrained. Sometimes breaking the rules just enough is proving that you knew the real rules all along. 🥃🕶🚬

What a meta, over-philosophical introduction to another blog about [site containers]({% link _posts/0000-00-00-secrets-of-site-containers.md %})!

## Making boxes that aren't quite in the middle
What if you want to blow out an image all the way to the side of the screen? No site container on that side. Full width. But the other side matches your margin perfectly. Something like...

<div style="width: 100%; border: dashed black 1px; margin-bottom: 30px;">
  <img src='{{site.baseurl}}/assets/images/this.webp' alt='like this' style="height: auto; width: calc(50% + 200px); max-width: 95%; margin: 0 0 0 auto; display: block;">

  <div class="container-sample" style="margin: 0 auto; width: 400px; max-width: 90%; text-align: justify; background-color: #FFE83F;">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
</div>

It makes things easier if you consider the two 'halves' of your screen like this:
<div style="width: 100%; border: dashed black 1px; margin-bottom: 30px; position: relative;">
  <img src='{{site.baseurl}}/assets/images/this.webp' alt='like this' style="height: auto; width: calc(50% + 200px); max-width: 95%; margin: 0 0 0 auto; display: block;">

  <div class="middle-line-example" style="margin: 0 auto; position: absolute; height: 100%; width: 0; top: 0; left: 50%; transform: translate(-50%, 0); border-left: dashed black 1px;"></div>


  <div class="container-sample" style="margin: 0 auto; width: 400px; max-width: 90%; text-align: justify; background-color: #FFE83F;">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
</div>

The right side of that image is blowing out to 50%! Dead simple. The left side is *exactly half of the site container's width*. The only remaining magic is to push the block toward the side you're locking it on with an automatic margin. Here's the code for that.

{% highlight scss %}
.that-img-container {
  // make sure that bad boy is a block element, of course
  display: block;
  // 50% + half of the container in pixels
  width: calc(50% + 200px);
  // 50% + half of the maximum container in percents
  max-width: 95%;
  // push it right
  margin-left: auto;
}
{% endhighlight %}



How about a container for text, next to that image? You might be tempted to do heavy math on that. Don't do heavy math on that.

<div style="width: 100%; border: dashed black 1px; margin-bottom: 30px; position: relative;">
  
  <div class="blowout-container-sample" style="display: flex; align-items: center; width: calc(50% + 200px); max-width: 95%; margin: 0 0 0 auto;">
    <div style="width: 100px; margin-right: 20px; font-weight: bold;">Some text on the left</div>
    <img src='{{site.baseurl}}/assets/images/this.webp' alt='like this' style="height: auto; width: calc(100% - 120px); display: block;">
  </div>


  <div class="middle-line-example" style="margin: 0 auto; position: absolute; height: 100%; width: 0; top: 0; left: 50%; transform: translate(-50%, 0); border-left: dashed black 1px;"></div>


  <div class="container-sample" style="margin: 0 auto; width: 400px; max-width: 90%; text-align: justify; background-color: #FFE83F;">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
</div>

The code:
{% highlight scss %}
.that-img-container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: calc(50% + 200px);
  max-width: 95%;
  margin-left: auto;
}
.side-text {
  width: 100px;
  margin-right: 20px;
}
.image {
  // everything but the text and margins
  width: calc(100% - 120px);
}
{% endhighlight %}


## Making things that aren't a box
Let's say you have a thing that isn't a square, or doesn't require constraining at all. That thing might not flow at the same speed as your page content. It might not even be positioned relative to it. The easy answer for that is `position` itself. Which has the potential to negate a lot of the power of a site container as well.

`position: static;`
: The default. Should work the same as `unset`, so this is what you do if you have to override somebody else's work, but you also want them to think you're smart (read: force them to look up your solution).

`position: relative;`
: Makes everything tick. It's a way to set the parent for all of your `position` children.

`position: absolute;`
: Ignores block positioning. It lets things go on top of (or underneath) other things. It refers back to most recent `position`-assigned parent to determine its place. If none is available, it's positioned on `<body>` itself. It then uses `top`, `bottom`, `left`, or `right` to determine coordinates on that element.

`position: fixed;`
: Like `absolute` on crack. Ignores block positiong and parents. Almost always a terrible idea, especially for accessibility. So of course I've used it in a final build!

`position: sticky;`
: The fun uncle. Make things stick at a certain point, but only inside of the parent. Not supported by IE, but generally it doesn't matter -- most standard uses [degrade gracefully](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement).


## The centered thing.
This might be amateur hour but here's how to center a thing that is absolutely positioned.
{% highlight scss %}
.thing-parent { position: relative; }
.thing {
  position: absolute;
  // parent container percents
  top: 50%; left: 50%;

  // child item percents 
  transform: translate(-50%, -50%);
  // (to make its center the target, subtract 50% of each axis)
}
{% endhighlight %}

But did you know, for example, that padding, borders, margins all flow *outside* of that position?

<div style="width: 100%; position: relative; height: 100px; border: dashed 1px #F96714">
  <div style="position: absolute; width: 100%; padding: 10px; top: 50%; left: 50%; transform: translate(-50%, -50%); border: dashed 1px #77212E">Here's an example of that. The text will flow normally inside of the container, but you'll have to fix the space around the item separately...</div>
</div>


<div style="width: 100%; position: relative; height: 200px; border: dashed 1px #F96714; margin-top: 20px;">
  <div style="position: absolute; width: calc(100% - 22px); padding: 10px; top: 50%; left: 50%; transform: translate(-50%, -50%); border: dashed 1px #77212E">... like this! Account for the padding, the border-width, and the margins. Usually they're the same on both sides of the item, so you can just multiply them by two: <br><code>width: calc(100% - (padding + border + margin) * 2);</code></div>
</div>


## Position Containers
Containers _need_ to be relatively positioned (if they are positioned at all) to your document's `<body>`, or they will likely lose their pinpoint mathematical accuracy and throw in extra space. 

Positioning other things inside of a well-built site container is fair game, as long as you know exactly how big the things are. Using default-styled things like `<p>` and `<h1>`? You're studdenly worrying about the default bottom margins, and the total height of the element. If something looks off optically, you can use my debugging reticle:

{% highlight scss %}
.top-left, .top-right, .bottom-left, .bottom-right {
	height: 40px; width: 40px;
	border: tomato solid 1px;
	position: absolute;
	top: 50%;
	left: 50%;
}
.top-left {
	border-left: unset;
	border-top: unset;
	transform: translate(-100%, -100%);
}
.top-right {
	border-right: unset;
	border-top: unset;
	transform: translate(0, -100%);
}
.bottom-left {
	border-left: unset;
	border-bottom: unset;
	transform: translate(-100%, 0);
}
.bottom-right {
	border-right: unset;
	border-bottom: unset;
	// no need to transform, we're already there
}
{% endhighlight %}

{% highlight html %}
<div class="your-container">
  <div class="top-left"></div>
  <div class="top-right"></div>
  <div class="bottom-left"></div>
  <div class="bottom-right"></div>
</div>
{% endhighlight %}


## And then there was... nothing!
You are now a master. I can teach you nothing more. But if you wish, we may start considering the almighty `display: grid;` and its infinitely complex version of the exact same things I mention above.

Grid is always fun. It is really powerful. But it also reminds me of the days when we encapsulated entire pages in tables. Let's save that for layout decisions, menus, and other places where it's actually needed!