$(document).ready(function() {
  var number;
  var width = $(window).width() - 40;
  var height = $(window).height();
  var i;

  function makeDrop(number){
    for (i = 0; i < number; i ++){
      var position = randomInteger(20, width);
      var drop = "<div class='rain' id='rain-" + i + "'></div>";
      $(".rain-container").append(drop);
      $("#rain-" + i).css("left", position);
    }
  }

  function makeRain(num) {
      setInterval(function() {
        $("#rain-" + randomInteger(0, num)).addClass('raining');
      }, 55);
  }

  function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
  }

  makeDrop(150);
  makeRain(150);

  var relMouseX;
  var relMouseY;

  $(document).mousemove(function(e){
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    console.log(mouseX);
    relMouseX = mouseX - 125;
    relMouseY = mouseY - 75;
  });

  function moveCursor() {
    $("#umbrella").css("left", relMouseX);
    $("#umbrella").css("top", relMouseY);
    $("#cat").css("left", relMouseX + 50);
    $("#cat").css("top", relMouseY + 150);
    $(".stage").css("left", relMouseX);
    $(".stage").css("top", relMouseY + 50);
  }

  var frameRate = 30;
  var timeInterval = Math.round (1000 / frameRate);
  var timer = setInterval(moveCursor, timeInterval);

});