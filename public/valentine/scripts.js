$(document).ready(function() {
var clicked = false;

  $('.envelope').click( function(){
    if (clicked === false){
      $('.top, .left, .right, .bottom, .card').addClass('hover');
      clicked = true;
    } else {
      $('.top, .left, .right, .bottom, .card').removeClass('hover');
     clicked = false;
    }
  });

});