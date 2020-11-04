---
title: An Ode to the Object
date: 2020/06/01 12:09:00 Z
categories:
- Tutorials
tags:
- Featured
hero: hash.webp
image: assets/images/hash.webp
---

Let's talk about my best friend, **J**ava**S**cript **O**bject **N**otation. You probably call that ***jay***-son. If you're really particular or feeling a little bit French, maybe you call it jase-***on***. Whichever way you call it, you're *almost* talking about an associative array.

JSON is cool because it helps me to organize my thoughts and store them. Or maybe somebody else's thoughts. Or maybe dynamically generated thoughts. Whatever I want really. If I have a dataset I'd prefer it to come on over in JSON format, so I can make sense of it right away.

It's also cool because it sounds like 'Jason', so people (including me) often intentionally use it when they're discussing JavaScript Objects. Talking about Object-Oriented Programming (OOP) quickly turns into a whole thing about how awesome Objects are in many other ways. When I say JSON, you immediately know that I'm thinking about associative and iterable data and I'm not going to talk you to sleep about inheritance and scope. Not this time. Hey, wake up.

I'm going to primarily reference JavaScript here but because an [associative array / map / symbol table / dictionary] is an [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type), we could happily discuss this in all of the languages. But not all of the languages are cool enough to tie this to their basic Object structure, nor to have catchy, human-sounding names for things.

<!-- ![Yes, all of them]({{ site.baseurl }}/assets/images/blog/all-the-things.png "Yes, all of them.") -->

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

### a JavaScript Object
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

### a JSON
{% highlight js %}
// that's a string!!
let h = "{dog: 'canine', cat: 'feline', donkey: 'asinine', 12: 'dodecine'}";

// that's not a string!!
let anObject = JSON.parse(h);
{% endhighlight %}


Well, that all looks almost the same. I don't want to get into why there are different names in each, and I don't want to talk about all of the little differences between languages, but it's cool to note that your everyday Object in JS is an associative array (and vice versa).

It's also really important to carefully observe the difference between a JS Object and JSON. The name shouldn't surprise you that JSON is the *string notation* of your associative array. It's a string, and most of its superpowers are not unlocked until you use `JSON.parse(yourJSON)` to convert that carefully confected data-tree into an Object. And if you want it back to JSON, you can always `JSON.stringify(yourObject)`.

You are likely going to be pushing something toward a JS-based front-end, and you are likely going to be translating whichever associative array you choose into JSON at some point. And don't worry about translating it either, because whatever language you're using has some function like `to_json()`, `json_encode()`, `talk_js_to_me()` that will make it JSON immediately or slightly sooner than that.

Even stranger, at RANDOM TIMES I REGARD AS MAGIC, sometimes jQuery parses your JSON to a JS Object automatically ✨. The most standard and known time this happens is [jQuery AJAX]({% link _posts/2020-05-17-ajax-part-1.md %}). When the MIME-type `data-JSON` is in an HTTP header, jQuery will assume you are wanting that data, and help you to get it right now.

{% highlight js %}
// Oh, isn't it sweet! The AJAX method itself takes an Object.
$.ajax({
  url: 'yoursite.com/data.json',
  dataType: 'json'
}).done(function(data) {
  console.log(data);
  $( this ).addClass( "done" );
});
{% endhighlight %}

JQ also sometimes parses JSON when you're dealing with HTML data attributes. And it sometimes does this for no reason at all. I promise. There are tiny gnomes living in your computer that make things happen.

That makes the most famous and important JS debugging tool `console.log()` important when things go wrong. If your output is showing `[object Object]` you've gone and printed an Object. You need to `JSON.stringify()` it. If you're getting empty brackets `{}` you might have over-parsed it. Modern browser consoles will happily output things that make this easier on you:

{% highlight js %}
let anObject = {dog: 'canine', cat: 'feline', donkey: 'asinine', 12: 'dodecine'};
let selector = document.getElementById('a-php-array');

console.log(anObject);          // logs: Object { 12: "dodecine", dog: "canine", cat: "feline", donkey: "asinine" }
selector.innerHTML = anObject;  // outputs [object Object]

let aJson = JSON.stringify(anObject);
console.log(aJson);             // logs: {"12":"dodecine","dog":"canine","cat":"feline","donkey":"asinine"}
selector.innerHTML = aJson;     // outputs {"12":"dodecine","dog":"canine","cat":"feline","donkey":"asinine"}

let overStrung = JSON.stringify(aJson); 
console.log(overStrung)         // logs: "{\"12\":\"dodecine\",\"dog\":\"canine\",\"cat\":\"feline\",\"donkey\":\"asinine\"}"
selector.innerHTML = overStrung // outputs "{\"12\":\"dodecine\",\"dog\":\"canine\",\"cat\":\"feline\",\"donkey\":\"asinine\"}"

let overParsed = JSON.parse(JSON.parse(aJson)); // SyntaxError: JSON.parse: unexpected character at line 1 column 2 of the JSON data
{% endhighlight %}




## I digress.
But hey, I'm excited to shout from the rooftops that JSON is my _main groovy thing of the moment_. JSON does so many of the things I want it to do. It doesn't hurt that parsed JS**O**N can become an **Object**. So I can use it in fancy ways, really any ways, and it reacts like I expect.

{% highlight js %}
let someJson = "{ pig: 'ig-pay', latin: 'atin-lay' }";
let someObject = JSON.parse(someJson);

console.log(someObject['pig']); // logs 'ig-pay'
console.log(someObject.pig);    // also logs 'ig-pay'

someObject.pig = 'ine-sway';
console.log(someObject.pig);    // now logs 'ine-sway'
{% endhighlight %}


That means I can use this to do some weird things. I was making a game somewhat like this:

{% highlight js %}
// I'm gonna straight up make an Object here.
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
Yeah that last one took me a little while to figure out. The JQuery object `$('#shooter')` is just another object inside of the Object. So I could potentially just implement this variable after the document is ready, hope it doesn't change, and treat it like the selector itself:
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
console.log(a.notherThing);
{% endhighlight %}


## Everything is Objects!
Hurray Objects! Life is fun again, water tastes sweet, the sun is shining, I can choose to ignore OOP principals and data storage methods and just pour all of my data into a `stringify`able Object. But that Object is also an associative array. I can do all of the important array things, like **iterate** 🦹‍♂️

{% highlight js %}
let jsObject = {dog: 'canine', cat: 'feline', donkey: 'asinine', 12: 'dodecine'};

for (let i = 0; i < jsObject.length; i++) {
  console.log(jsObject[i]);
}
{% endhighlight %}


That's pretty much how I made [this blog index]({% link blog/index.html %}). I was using Ruby at the time, but it is a very common part of my day-to-day.

{% highlight rb linenos %}
if paginator.total_pages > 1        # start thinking about pages of results
 if paginator.previous_page
    # link to previous page
  else
    # don't
  endif

  for page in (1..paginator.total_pages)  # go through each page as `page` and do this
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
let selector = document.getElementById('mydiv');
selector.dataset.json = myJson;        // set
let json = selector.dataset.json;      // retrieve
{% endhighlight %}

You can store it visibly on the HTML as well. But ***make sure you surround it in single quotes!***
{% highlight html %}
<div id='mydiv' data-json='{thing: "that was one thing", other: "and this was another"}'>
  <p>Just like that ^^</p>
</div>
{% endhighlight %}


## So there you have it
JSON is cool. You'll benefit by using it from time to time. Or all the time. That JSON is a cool guy. And there's going to be a separate blog about data attributes. Because it needs to be explained, and I write blogs! That feels like a separate discussion. Check back soon.