$(document).ready(function() {
  var pomoStarted = false;
  var breakStarted = false;

  $("#pomo").click(function(){
    if (!breakStarted) {
      pomoStarted = true;
      startTimer(25);
      breakStarted = false;
    }
  });

  $("#break").click(function (){
    if (!pomoStarted){
      startTimer(5);
      breakStarted = true;
      pomoStarted = false;
    }
  });

  var minutes = 0;
  var seconds = 0;

  function startTimer(limit){
    $(".time").show();
    var displayMinutes;
    var displaySeconds;

    $(".spinner").addClass("spinner-animate");
    $(".filler").addClass("filler-animate");
    $(".mask").addClass("mask-animate");

    setTimeout(function(){
      $(".spinner").removeClass("spinner-animate");
      $(".filler").removeClass("filler-animate");
      $(".mask").removeClass("mask-animate");
    }, limit * 60 * 1000);

    var pomoInterval = setInterval(function(){
      seconds = seconds + 1;
      if (seconds === 60){
        seconds = 0;
        minutes = minutes + 1;
      }

      if (seconds < 10){
        displaySeconds = "0" + seconds;
      } else {
        displaySeconds = seconds;
      }

      if (minutes < 10){
        displayMinutes = "0" + minutes;
      } else {
        displayMinutes = minutes;
      }
      $("#seconds").html(displaySeconds);
      $("#minutes").html(displayMinutes);
      if (minutes === limit){
        clearInterval(pomoInterval);
        }
    }, 1000);

  }

});