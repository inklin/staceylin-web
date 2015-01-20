$(document).ready(function() {
  var hits = 0;
  var level = 1;
  var totalMoles = 10;
  var missedMoles = 0;
  var gameOver;
  var frequency = 1000;
  var moleInterval;
  var i = -1;

  $("#start-button").click(function(){
    $(".start-game").hide();
    animateMole(frequency);
  });

  function animateMole(frequency){
    moleInterval = setInterval(function(){
      var number = Math.floor(Math.random() * 9 );
      while (number === i){
        number = Math.floor(Math.random() * 9 );
      }
      i = number;
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
        $("#level-count-final").html(level);
        $(".play-again").show();
        clearInterval(moleInterval);
      }
    }, 4000);
  }


  $(".mole").mousedown(function(){
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
        if (frequency === 900){
          $(".winner").show();
        } else {
          animateMole(frequency);
          $("#level-count").html(level);
        }
      }
    }
  });

  $(".play-again-button").click(function(){
    $(".play-again").hide();
    level = 1;
    $("#level-count").html(level);
    missedMoles = 0;
    $("#missed-count").html(missedMoles);
    hits = 0;
    $("#hit-count").html(hits);
    frequency = 1000;
    gameOver = false;
    setTimeout(function(){
      animateMole(frequency);
    }, 1000);
  });

});