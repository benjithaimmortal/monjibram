---
title: "Secrets of the Site Container: Part 1"
date: 2020-07-24
categories:
- Tutorials
hero: containers.webp
image: assets/images/containers.webp
---

Big screens are getting bigger. Wider. Less expensive. Our web experience should be seamless, but our eyes can't adjust to giant blobby things. Containers to the rescue. But first, a digression about font-size and readability!

<hr>
<h4 style="margin: -25px 0 20px; line-height: 1.1; font-weight: 500;"><strong>Disclaimer!</strong> This page may scroll horizontally. It's ironic, because it's about site containers.</h4>
<hr>

## There's a problem with your eyes
You can't read long lines of text. The common recommendation is between [45 and 75 characters per line](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/). You may have experienced this issue when you tried to use your TV as a monitor. Wait you never did that? Oh, no, me either 😅

Imagine that length as two or three alphabets, back to back. Of course the length of the alphabet depends on how large the character widths are. In this particular body font, I can get a better sense by incorporating capitalized letters. Or I could even use them outright.

Just about this long:
abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz

Maybe this long:
AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz

Or even this long:
ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ

## But really big views are bad too
The unspoken flip-side comes from larger font sizes at a close distance. Making the text larger for larger screens only works until your [saccade](https://en.wikipedia.org/wiki/Saccade) becomes noticeably uncomfortable. Thus a rather fine case [against a purely liquid layout](https://baymard.com/blog/line-length-readability). For large web views, I err on the side of caution. I keep font-size the same on even the largest screens. So something beyond 750px is bad.

## Compare the next two paragraphs:
### Paragraph 1:
<div style="font-size: 20px; line-height: 1.1; letter-spacing: 1.2px; width: 565px;">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, fermentum massa justo sit amet risus. <br><br>
abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</div>

### Paragraph 2:
<div style="font-size: 40px; line-height: 1.2; letter-spacing: 1.5px; width: 1045px; margin-bottom: 35px;">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, fermentum massa justo sit amet risus. <br><br>
abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</div>


> The larger text made it hard to move from the end of one line to the start of the next. Either it's because you're scrolling around, or just because your screen was so big that your eye movement was unnatural.

## Honestly this doesn't really change with non-text items

A huge image doesn't help. Even disregarding image sizing and web optimization (our rule at work is twice the pixels for each web pixel, so we get some pretty large picture file sizes!) you'll quickly lose a picture of a forest for some giant trees.

The solution to this is the same as most other web design problems: a few extra tag wrappers and some CSS. But _how_ is the more important question. That's how this blog was born.


## Zero. Use appropriate HTML

The sectional approach to site configuration is underrated. A good page has content sections, and they are usually at least 2/3 the height of your browser window. Taking up space and using the infinite scroll canvas that is available to you dramatically increases user interaction and readability. There is also a great reason that HTML has a `<section>` tag! It's for holding this container! Use it like this:



{% highlight html %}
<section class="hero">
  <div class="hero-container">
    <!-- your div contents -->
  </div>
</section>
{% endhighlight %}

*Note: Your section tag might have a full-width background image or other width-breaking things. Don't limit yourself by making the section tag itself a container.*


## One. Start at the maximum, which is actually the smallest.

What's the maximum width that your section can be? The answer might not make immediate sense. `max-width` should be used on your smallest screen sizes. The narrowest screen I've seen on devtools is the iPhone 5/SE, weighing in at a mere 325px. If your maximum width is above that, your site will horizontally scroll on that screen. If you use absolute units, your page will forever be confined to 325px.

<div style="display: flex; flex-wrap: no-wrap; justify-content: center; align-items: flex-grow; margin-bottom: 20px;">
  <div style="width: calc((100% - 330px) / 2); background-color: #350e1411;"></div>
  <p style="width: 320px; margin: 20px auto 25px; padding-bottom: unset;">Don't make your site live in a world that is only 325 px wide, it is a special place where UX dreams go to die and nothing can be accomplished. Two sentences of this took up six lines and looked terrible.</p>
  <div style="width: calc((100% - 330px) / 2); margin-left: -5px; background-color: #350e1411;"></div>
</div>

Instead, you need a _relative-unit based_ `max-width` to account for things. I use percentages, because they are based on your container's size. If your container is `<body>`, that's great, but even if you're dealing with a strange outer container this won't break width as a `vw` might.

So what percentage? If it's a hero section it'll probably be at the widest your screen allows, but it should never break the horizontal dimensions of your device. So that's `100%`. Text also needs to breathe, so text on a small screen should be `90-95%`. A card or something that is supposed to visually break the monotony of the left edge can creep in more, but after `85%` things start to get silly.

{% highlight scss %}
.hero-container {
  max-width: 100%;
}
.text-container {
  max-width: 95%;
}
.narrow-container {
  max-width: 90%;
}
{% endhighlight %}


## Two: Move on to bigger and better screens.

We've determined that text should live somewhere between `600px-750px`. Once we find that sweet spot, that's really the size we want. So let's use that as our `width`!

Other widths will make sense too. Most images look great at between `1280-1500px`, your modern laptop screen width. If it's a group of cards or items, they might follow the same path, though individual items with paragraphs will follow the same text readability rule.

Our outlying 'monotony breakers' can live somewhere between a paragraph and a hero.

{% highlight scss %}
.hero-container {
  width: 1500px;
  max-width: 100%;
}
.text-container {
  width: 750px;
  max-width: 95%;
}
.narrow-container {
  width: 1100px;
  max-width: 90%;
}
{% endhighlight %}


## Left of center

Browsers automatically place blocks starting from the left. Your screen probably looks like this:
<div style="height: 100px; max-width: 100%; width: 1500px; background-color: #2A4B7C44;"></div>
<div style="height: 100px; max-width: 90%; width: 1100px; background-color: #350e1444;"></div>
<div style="height: 100px; max-width: 95%; width: 750px; background-color: #264E3644; margin-bottom: 20px;"></div>

Well that isn't surprising! Block-level elements fill from the left. All you need to do is center those elements on the screen and you're set. `display: flex;` will accomplish this, but changing your overall display feels like overkill. All you need is some sort of automatic margin on both sides of your section, to keep it centered. You know, like `margin: 0 auto;`.

{% highlight scss %}
.hero-container {
  margin: 0 auto;
  width: 1500px;
  max-width: 100%;
}
.text-container {
  margin: 0 auto;
  width: 750px;
  max-width: 95%;
}
.narrow-container {
  margin: 0 auto;
  width: 1100px;
  max-width: 90%;
}
{% endhighlight %}


## Tada!

<div style="margin: 0 auto; height: 100px; max-width: 100%; width: 1500px; background-color: #2A4B7C44;"></div>
<div style="margin: 0 auto; height: 100px; max-width: 90%; width: 1100px; background-color: #350e1444;"></div>
<div style="height: 100px; max-width: 95%; width: 750px; background-color: #264E3644; margin: 0 auto 20px;"></div>


## Next steps:

What if you want to blow out the screen, anchoring items to the left or right on one side while maintaining your site container width on the other? It's not impossible. [I'll show you how in my next article]({% link _posts/0000-00-00-site-containers-two.md %})!

> You can also [see this blog in action on CodePen](https://codepen.io/benjithaimmortal/full/XWXyJjX).