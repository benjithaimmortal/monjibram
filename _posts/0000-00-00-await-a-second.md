---
title: Await a Second
date: 2021-01-03
categories:
- Tutorials
tags:
- Featured
hero: await.jpg
image: assets/images/await.jpg
---

It took me years and years to understand how browsers process time. It's actually pretty easy. Let me help you out a little bit. I apologize beforehand for the dad puns along the way.

## Time after time, things change
Making things happen in a set amount of time might be one of the most important parts of web development, and as such it's changed. What was true 10 years ago is no longer true. Stack Overflow is going to give you _many answers_. Idiomatic JS is going to give you _many answers_. There are many ways to skin this cat. I'm not going to tell you the best way. You might not even like my way. But my goal is, by the end, at least you'll understand _what is happening_ with my way. That's the plan here.

## This is cheating (and you should too)
JavaScript uses this handy dandy thing called `setTimeout()` which `sets` a `timeout` period. It's not going to be pretty, but it will pause for a little while, then run the code inside. It's super easy and cool, and you've probably used it before. If not, it looks like this:

{% highlight js %}
  // example one: anonymous function
  setTimeout(function() {
    console.log('finished anonymously'); // things you'll do after the timeout
  }, 12345); // milliseconds before the function is run

  // example two: separating concerns, naming your function
  function finished() {
    console.log('finished from finished()');
  }
  setTimeout(finished, 1234);

  // but this code? It ran first.
  console.log('too late, I ran');
{% endhighlight %}

But the very same thing that makes timers great is their weakness: they don't stop your code. Here's the order of logs from the code above:

{% highlight js %}
"too late, I ran"           // instantly
"finished from finished()"  // after 1.234 seconds
"finished anonymously"      // after 12.345 seconds
{% endhighlight %}

> **Breakdown:** Code outside of the blocks runs now, and code inside the blocks doesn't affect other blocks.

## Wheels within wheels
The only way you're going to successfully chain these bad boys is by making a neat little stack of them. But that makes for a pretty nasty last-ditch end result:

{% highlight js %}
  // timing of the down transition
  setTimeout(() => {
    transitionOut();
    setTimeout(() => {
      resetTransition();
      setTimeout(() => {
        // do the dance again
        transitionIn();
        setTimeout(() => {
          resetTransition();
        }, 150);
      }, 780);
    }, 150);
  }, 780);
{% endhighlight %}

## Remove setTimeout with clearTimeout
I could and may make a whole article about this, but `clearTimeout()` will _stop_ a timeout from firing like this:

{% highlight js %}
let timmy = setTimeout(finished, 1234); // never gonna happen
clearTimeout(timmy);                    // because we cleared it immediately
{% endhighlight %}

Clearing a timeout is dead simple, except that _you must have access to that variable_ `timmy` _at all times_. Take care to define `timmy` outside of the function you're setting it, or it'll be nigh unto useless.

## Promises are weird
But what if I really want things to wait? I can always make a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Promises are best explained by defining them.

Let's say you run a muppet shop, and I want a muppet. So I come up to the register, show you the muppet I want, and swipe my credit card. Are we done? Can I walk out and leave?

Noooope. You want to confirm that my card is valid. We stand there awkwardly for a few seconds. We make small-talk about how badly I want to leave your store and how badly you want me to leave too. My credit card data gets processed, authenticated, and approved.

*Ding!* Now I can leave. You try to hand me a receipt. I let it fall to the ground because I am not a hostage to your culture's demands, nor do I want to sanitize my hands again. I let thoughts of maskless, unencumbered breathing carry me through the automatic doors, and into the great dystopian unknown.

**That credit card transaction was a Promise!** It stopped everything, waited for a fulfillment, and had two outcomes:
- Accepted: take your item and get outta here
- Errored: try again or we're stuck

## Promises are built into Ajax, and that's what we'll use them for
In fact, that promise example is probably based on a literal Promise. If the credit card machine runs on Node, 99% of the time it's literally running an `XMLHttpRequest()` Promise:

{% highlight js %}
// directly from jQuery docs
$.ajax({
  type: "POST",
  url: 'https://www.example.com/endpoint',
  data: yourCreditCardData
})
  .done(function() {
    alert( "woo, success!" );
  })
  .fail(function() {
    alert( "error" );
  })
{% endhighlight %}

Promises use the following _very easy_ result syntax:
- `.then(yourFunctionHere)` is a chain for what comes next
- `.done(yourFunctionHere)` is a similar chain for successful results
- `.success(yourFunctionHere)` is yet another one of those
- `.fail(yourFunctionHere)` is a chain for what to do if the Promise ... fails
- `.always(yourFunctionHere)` happens on _either_ success _or_ error

## And that's the end of Promises, I promise
Promises are GREAT for Ajax, and, honestly, that's about all they're great for. If the library you're using doesn't specifically say a function

> returns a promise

then I just ignore the potential headache that promises would bring. Promises are a confusing API that is difficult for experts, and difficult code is the enemy of readable code.

## Thanks for awaiting
You've been patient, and a treasure `await`s you. It's wrapped in an `async` function (short for _asynchronous_). In fact, if you forget the `async` part, JS will throw a special error just for you.

>Uncaught SyntaxError: await is only valid in async functions and async generators

[Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) stop the whole show until any `await` calls inside are finished. That means that calling one of these will effectively pause your code for the predetermined time.

Let's say you've got a transition that takes 0.2 seconds. Once that transition is finished, you really need to do something right away. This was a problem I encountered while implementing the blink logic on this site.

{% highlight js %}
// a shortcut for $(document).ready(async function(){...
$(async function(){
  // blink in
  $('body').addClass('fadein');
  // a one-liner pause for 200 ms
  await new Promise(anything => setTimeout(anything, 200));
  // after-transition logic
  $('html').addClass('no-back');
});
{% endhighlight %}

Rewriting that pyramid jumble of callbacks above, we get something much more eloquent and readable.

{% highlight js %}
async function fullTransitionEffect() {
  transitionOut();   // takes 780ms
  await new Promise(e => setTimeout(e, 780)); 

  resetTransition(); // takes 150ms
  await new Promise(e => setTimeout(e, 150)); 
  
  transitionIn();    // takes 780ms
  await new Promise(e => setTimeout(e, 780)); 

  resetTransition(); // takes 150ms
  await new Promise(e => setTimeout(e, 150));
}
{% endhighlight %}

## Out of time
Time is fleeting. There are so many ways to perceive it and manipulate it on a website:

We could get into `Moment.JS`, a devilish and entirely necessary library for standardized date/timestamp formatting (or we could just use the [standard datetime stamp that the world decided on before I was born](https://en.wikipedia.org/wiki/ISO_8601)). There's plenty of room for time zone doom and gloom as well.

Calendars are fun, too. Simple algorithms for events that fall on certain days a month may be one of the hardest things I've encountered.

Or we could take another tack and look at `setTimeout`'s twins `setInterval()` and `removeInterval()`. Those were a big part of the [Old German Beer game](https://oldgermanbeer.com).

Whatever we do must `await` more time from my busy schedule.