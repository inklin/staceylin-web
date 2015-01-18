$(document).ready(function() {
  var colorChoices = ["red", "green", "blue", "yellow"];
  var gamePattern = [];
  var allowUserInput = false;

  function makePattern(){
    var colorIndex = Math.floor((Math.random() * 4));
    var color = colorChoices[colorIndex];
    gamePattern.push(color);
  }

  function showPattern(){
    if (gamePattern.length){
      for (i = 0; i < gamePattern.length; i++){
        var buttonColor = gamePattern[i];
        setTimeout(lightButton(buttonColor), i * 1000);
      }

    setTimeout(function() {
      allowUserInput = true;
      }, gamePattern.length * 1000);
  }

  function lightButton(color) {
    $('#' + color).addClass(color + "-glow");
    setTimeout(function() {
      $('#' + color).removeClass(color + "-glow");
    }, 200);
  }

});