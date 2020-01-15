$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").click(function(e) {
    var hash = $(this).attr("href");
    if (hash !== "") {
      $('html').animate({
        scrollTop: $(hash).offset().top
      }, 600);
      return false;
    }
  });


  function check_if_in_view() {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    var $element = $(".animation-element");
    $element.each(function() {
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

    
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
        $(".sample .parallax").addClass("fade");
      } else {
        // $element.removeClass('in-view');
        // $(".sample .parallax").removeClass("fade");
      }
    });
  }
  $(window).on('scroll resize', check_if_in_view);
  $(window).trigger('scroll');
});