$(document).ready(function() {
    
    for (var i = 0; i < 4; i++){
      var rainbow = "<div class='trail-block'><ol class='rainbow'><li></li><li></li><li></li><li></li><li></li><li></li><ol></div>";
      $('.rocket-trail').append(rainbow);
    }
    var play = false;

    $('.modal').fadeOut(2000, function(){
      toggleAnimation(play);
    });

    $('#play-btn').click(function(){
      play = !play;
      toggleAnimation(play);
    });

    function toggleAnimation(run){
      if (run){
        $('#sound')[0].play();
        $('#play-btn').text('Pause Animation');
        playing = true;
        $('.character').addClass('animate');
        $('.rocket-trail').addClass('animate');
      } else {
        $('#sound')[0].pause();
        $('#play-btn').text('Play Animation');
        playing = false;
        $('.character').removeClass('animate');
        $('.rocket-trail').removeClass('animate');
      }
    }

});