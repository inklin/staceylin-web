$(document).ready(function(){

  function animateSync(){
    $('.laptop-container').addClass('running');
    $('.phone-container').addClass('running');
  }

  $('#sync-btn').click(function(){
    $('.laptop-container').removeClass('running');
    $('.phone-container').removeClass('running');

    setTimeout(function(){
      animateSync();
    }, 5);
  });

  animateSync();
});