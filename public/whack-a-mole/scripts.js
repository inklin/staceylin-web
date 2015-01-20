$(document).ready(function() {
  var hits = 0;
  var level = 1;
  var totalMoles = 1000;
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
      console.log("number is" + number);
      console.log("i is" + i);
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
        animateMole(frequency);
        $("#level-count").html(level);
        $(".level").show();
        setTimeout(function(){
          $(".level").hide();
        }, 1000);
      }
    }
  });

  $("#play-again").click(function(){
    level = 1;
    $("#level-count").html(level);
    $(".level").show();
    setTimeout(function(){
      $(".level").hide();
    }, 1000);
    missedMoles = 0;
    hits = 0;
    frequency = 1000;
    animateMole(frequency);
  });

});