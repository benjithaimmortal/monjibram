$(function(){
  var nextPage = 1;
  var totalPages = new Number ($(".post-flex").data("totalPages"));
  
  function scrollCheck(){
    if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
      if (nextPage != totalPages) {
        loadMorePosts()
      } else {
        // bottomed out
      }
    }
  };

  function loadMorePosts() {
    nextPage = nextPage + 1;
    $(".skeleton").addClass("active");
    
    $.ajax({
      type: 'GET',
      url: '/blog/' + nextPage,
    })
      .done(function(response){
        $(response).find('.post-card').each(function(){
          $('.post-flex').append(this);
          $('.skeleton').remove();

          if ($('.filter.active').length) {
            filterCards($('.filter.active').data('filter'), $('.filter.active'));
          }
        });
      });
  }
  
  // you're on the right page
  $(window).scroll(_.throttle(scrollCheck, 500, true));

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

      while (($('.post-card[data-filter*="' + filter + '"]').length < 6) && (totalPages != nextPage)) {
        loadMorePosts();
      }
    }
  })
});