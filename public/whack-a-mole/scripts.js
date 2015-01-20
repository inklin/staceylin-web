$(document).ready(function() {
  var hits = 0;
  var level = 1;
  var totalMoles = 10;
  var missedMoles = 0;
  var gameOver;
  var frequency = 1000;
  var moleInterval;

  $("#start-button").click(function(){
    $(".start-game").hide();
    animateMole(frequency);
  });

  function animateMole(frequency){
    moleInterval = setInterval(function(){
      var number = Math.floor(Math.random() * 8 + 1);
      popMole(number);
    }, frequency);
  }

  function popMole(number){
    $("#mole-" + number).addClass("up");
    setTimeout(function(){
      if ($("#mole-" + number).hasClass("up")){
        $("#mole-" + number).removeClass("up");
        missedMoles ++;
        $("#missed-count").html(missedMoles);
      }
      if (missedMoles === totalMoles){
        gameOver = true;
      }
    }, 4000);
  }


  $(".mole").click(function(){
    var visibility = $(this).is(":visible");
    if (visibility && !gameOver){
      hits ++;
      $(this).removeClass("up");
      $("#hit-count").html(hits);
      if (hits === totalMoles){
        clearInterval(moleInterval);
        level ++;
        missedMoles = 0;
        hits = 0;
        frequency = frequency - 100;
        animateMole(frequency);
        $("#level-count").html(level);
        $(".level").show();
        setTimeout(function(){
          $(".level").hide();
        }, 1000);
      }
    }
  });

});