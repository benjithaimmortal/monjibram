---
title: An Ode to the Array
date: 2020/06/01 12:09:00 Z
categories:
- Tutorials
hero: hash.jpg
image: assets/images/hash.jpg
---

Let's talk about my best friend, **J**ava**S**cript **O**bject **N**otation. You probably call that *jay*-son. If you're really particular or feeling a little bit French, maybe you call it jase-*on*. Whichever way you call it, you're talking about an associative array.

JSON is cool because it helps me to organize my thoughts and store them. Or maybe somebody else's thoughts. Or maybe dynamically generated thoughts. Whatever I want really. If I have a dataset I'd prefer it to come on over in JSON format, so I can make sense of it right away.

I'm going to primarily reference JavaScript here but because an [associative array / map / symbol table / dictionary] is an [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type), we could happily discuss this in all of the languages.

![Yes, all of them]({{ site.baseurl }}/assets/images/blog/all-the-things.png "Yes, all of them.")

## Here are some languages.

### a Ruby Hash
{% highlight rb %}
h = {'dog' => 'canine', 'cat' => 'feline', 'donkey' => 'asinine', 12 => 'dodecine'}

// but you can also use symbols
h = {dog: 'canine', cat: 'feline', donkey: 'asinine', 12: 'dodecine'}
{% endhighlight %}

### a Python Dict
{% highlight py %}
h = {'dog': 'canine', 'cat': 'feline', 'donkey': 'asinine', 12: 'dodecine'}
{% endhighlight %}

### a PHP Array
{% highlight php %}
$h = {'dog' => 'canine', 'cat' => 'feline', 'donkey' => 'asinine', 12 => 'dodecine'};
{% endhighlight %}

### a JSON
{% highlight js %}
let h = {dog: 'canine', cat: 'feline', donkey: 'asinine', 12: 'dodecine'};

// but you're probably going to see it spread out like this
let h = {
  dog: 'canine',
  cat: 'feline', 
  donkey: 'asinine', 
  12: 'dodecine'
};
{% endhighlight %}

Well, that all looks almost the same. I don't want to get into why there are different names in each, and I don't want to talk about all of the little differences between languages. You are likely going to be pushing something toward a JS-based front-end, and you are likely going to be translating whichever associative array you choose into JSON at some point.

And don't worry about translating it either, because whatever language you're using has some function like `to_json()`, `json_encode()`, `talk_js_to_me()` that will make it JSON immediately or slightly sooner than that.

## I digress.
But hey, I'm excited to shout from the rooftops that JSON is my _main groovy thing of the moment_. JSON does so many of the things I want it to do. It doesn't hurt that JS**O**N is an **object**. So I can use it in fancy ways, really any ways, and it reacts like I expect.

{% highlight js %}
let someJson = {
  pig: 'ig-pay',
  latin: 'atin-lay'
};

console.log(someJson['pig']); // logs 'ig-pay'
console.log(someJson.pig);    // also logs 'ig-pay'

someJson.pig = 'ine-sway';
console.log(someJson.pig);    // now logs 'ine-sway'
{% endhighlight %}


That means I can use this to do some weird things. I was making a game somewhat like this:

{% highlight js %}
let game = {
  settings: {
    scoreMultiplier: 40,
    timeLimit: 360,
    charName: 'MegaMan',
  },
  state: {
    score: 23043,
    timeRemaining: 200,
    percentComplete: 40,
    inventory: {backpack, swordOfDestiny, toothbrush}
  },
  selectors: {
    left:  '#left',           // these are
    right: '.rightArrowDiv',  // getting increasingly
    shoot: $('#shooter')      // less realistic
  }
};
{% endhighlight %}


### Woah wait a second...
Yeah that last one took me a little while to figure out. The JQuery object `$('#shooter')` is just another object inside of the object. So I could potentially just store it there, as is, and hope it doesn't change, or initialize this after something loads and treat it like the selector itself: 
{% highlight js %}
game.selectors.shoot.click(boom());
{% endhighlight %}


Or maybe I just have a bazillion selectors and I'm keeping track of them in some new way:
{% highlight js %}
// a real test I did on this page:
let a = {
  thing: document.getElementById('a-ruby-hash'),
  notherThing: document.getElementById('a-python-dict')
};
console.log(a.thing);
{% endhighlight %}


## Everything is Objects!
Hurray! Life is fun again, water tastes sweet, the sun is shining. But JSON is also an array. I can do all of the important array things, like **iterate** 🦹‍♂️

{% highlight js %}
let json = {dog: 'canine', cat: 'feline', donkey: 'asinine', 12: 'dodecine'};

for (let i = 0; i < json.length; i++) {
  console.log(json[i]);
}
{% endhighlight %}


So that's pretty much how I made [this blog index]({% link blog/index.html %}). I was using Ruby at the time, but it is a very common part of my day-to-day.

{% highlight rb linenos %}
if paginator.total_pages > 1        # start thinking about pages of results
 if paginator.previous_page
    # link with previous page
  else
    # don't
  endif

  for page in (1..paginator.total_pages)
    if page == paginator.page 
      # show the page but don't link, because it's this page
    elsif page == 1
      # link to the first page
    else 
      # link to the other pages
    endif
  endfor

  if paginator.next_page
    # link to the next page
  else
    # don't
  endif
endif
{% endhighlight %}


## Hide JSON Everywhere
Iterating over things is so useful when you're storing data in HTML. Using JS data attributes is also a good place to store JSON for later.

{% highlight js %}
// jQuery
$('#mydiv').attr('data-json', myJson);  // set
let json = $('#mydiv').data('json');    // retrieve

// Vanilla
let selector = document.getElementById('#mydiv');
selector.dataset.json = myJson;        // set
let json = selector.dataset.json;      // retrieve
{% endhighlight %}

You can store it visibly on the HTML as well. But ***make sure you only surround it in single quotes!***
{% highlight html %}
<div id='mydiv' data-json='{thing: "that was one thing", other: "and this was another"}'>
  <p>Just like that ^^</p>
</div>
{% endhighlight %}
