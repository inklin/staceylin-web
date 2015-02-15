$(document).ready(function() {
  $('.envelope').on('mouseover', function(){
    $('.top, .left, .right, .bottom, .card').addClass('hover');
  });

  $('.envelope').on('mouseout', function(){
   $('.top, .left, .right, .bottom, .card').removeClass('hover');
  });
});