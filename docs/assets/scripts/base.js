$(async function(){
  // set light mode from color preference
  lightMode = (window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'night' : '';
  // or set it from a cookie
  if (Cookies.get('light')) {
    lightMode = Cookies.get('light');
  }
  // add the class to body (light does nothing though)
  $('body').addClass(lightMode);
  // blink back in
  $('body').addClass('fadein');
  // pause for 100 ms
  await new Promise(r => setTimeout(r, 100));
  // remove the background color on html
  $('html').addClass('no-back '+lightMode);

  // hover on the lightswitch
  $('.logo, .inverse-logo').hover(function(){
    $('.logo, .inverse-logo').toggleClass('switch');
    $('.cloud').toggleClass('hover');
  }, function(){
    // no cloud? use 'switched'
    // $('.logo, .inverse-logo, .cloud').removeClass('switched');
    $('.logo, .inverse-logo').toggleClass('switch');
    $('.cloud').toggleClass('hover');
  });

  // click on the light switch
  $('.logo, .inverse-logo').click(function(){
    lightMode = $('body').hasClass('night') ? 'light' : 'night';
    Cookies.set('light', lightMode);
    $('body').toggleClass('night');
    // $('.logo, .inverse-logo, .cloud').addClass('switched');
  })
});

$(window).bind('beforeunload', function(){
  $('html').removeClass('no-back');
  $('body').removeClass('fadein');
})


$(window).bind("pageshow", function(event) {
  if (event.originalEvent.persisted) { $('body').addClass('fadein'); }
});

console.log(['boop']);
window.onpopstate = function(event) {
  event.preventDefault();
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};