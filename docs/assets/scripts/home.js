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
});