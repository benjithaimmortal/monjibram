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
  // $('html').css('background-color', 'unset');

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
  $('body').removeClass('fadein');
})