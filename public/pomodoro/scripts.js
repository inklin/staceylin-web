$(document).ready(function() {

  $("#pomo").click(function(){
    startPomo();
  });

  var minutes = 0;
  var seconds = 0;

  function startPomo(){
    $(".spinner").addClass("spinner-animate");
    $(".filler").addClass("filler-animate");
    $(".mask").addClass("mask-animate");
    setInterval(function(){
      seconds = seconds + 1;
      if (seconds === 60){
        seconds = 0;
        minutes = minutes + 1;
      }
      $("#seconds").html(seconds);
      $("#minutes").html(minutes);
    }, 1000);

  }

});