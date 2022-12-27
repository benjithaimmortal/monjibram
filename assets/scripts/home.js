$(function(){
  $('.filter').each(function(){
    var filter = $(this).data('filter');
    if (!$('.post-card[data-filter*="' + filter + '"]').length) {
      $(this).hide();
    }
  })
  function filterCards(filter, btn) {
    $('.filter').removeClass('active');
    btn.addClass('active');
    $('.post-card').hide();
    $('.post-card[data-filter*="' + filter + '"]').show();
  }
  $('.filter').click(function(){
    if ($(this).hasClass('active')) {
      $('.post-card').show();
      $(this).removeClass('active');
    } else {
      var filter = $(this).data('filter');
      filterCards(filter, $(this));
    }
  })
  $('.slider').slick({
    arrows: false,
    draggable: false,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    swipe: true,
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
    fade: true,
    asNavFor: '.author-slider, .img-slider'
  })
  $('.img-slider').slick({
    arrows: false,
    draggable: false,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    // swipe: true,
    // pauseOnHover: true,
    // infinite: true,
    // autoplay: true,
    fade: true,
    asNavFor: '.author-slider, .slider'
  })
  $('.author-slider').slick({
    arrows: false,
    draggable: false,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    // swipe: true,
    // pauseOnHover: true,
    // infinite: true,
    // autoplay: true,
    asNavFor: '.slider, .img-slider',
  })
  
  $('.slider, .img-slider, .author-slider').click(function(){
    $('.slider').slick('slickNext');
  })
    // .hover(function(){
    //   $('.author-slider').slick('slickPause');
    // }, function(){
    //   $('.author-slider').slick('slickPlay');
    // });
});