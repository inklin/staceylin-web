$(document).ready(function() {

  var minutes = 0;
  var seconds = 0;
  var pomoCount = 0;

  $("#pomo").click(function(){
    startTimer(25);
  });

  function startTimer(limit){
    $("#pomo").hide();

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

      $("#pomo").show();
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
        minutes = 0;
        seconds = 0;
        pomoCount = pomoCount + 1;
        $("#pomo-count").html(pomoCount);
        }

    }, 1000);

  }

});