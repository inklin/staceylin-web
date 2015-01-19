$(document).ready(function() {
  var colorChoices = ["red", "green", "blue", "yellow"];
  var gamePattern = [];
  var allowUserInput = false;
  var level = 1;

  function makePattern(){
    var colorIndex = Math.floor(Math.random() * 4);
    var color = colorChoices[colorIndex];
    gamePattern.push(color);

    setTimeout(function(){
      showPattern();
    }, 500);
  }

  var i = 0;

  function showPattern(){
    setTimeout(function() {
      if (i < gamePattern.length){
        var buttonColor = gamePattern[i];
        lightButton(buttonColor);
        i++;
        showPattern();
     } else {
        i = 0;
        allowUserInput = true;
      }
    }, 800);
  }

  function lightButton(color) {
    $('#' + color).addClass(color + "-glow");
    setTimeout(function() {
      $('#' + color).removeClass(color + "-glow");
    }, 600);
  }

  var userInput = [];
  var input = 0;

  $(".button").click(function() {
    if (allowUserInput){
        var color = this.id;
        userInput.push(color);
        lightButton(color);

        if (userInput[input] !== gamePattern[input]){
          gamePattern = [];
          userInput = [];
          level = 0;
          allowUserInput = false;
          setTimeout(function(){
            $("#level").html("Level " + level);
            makePattern();
          }, 800);
        } else if ( userInput.length == gamePattern.length){
          allowUserInput = false;
          level ++;
          input = 0;
          userInput = [];
          setTimeout(function(){
            $("#level").html("Level " + level);
            makePattern();
          }, 800);
        } else {
          input = input + 1;
        }
      } else {
        return;
      }
  });

  makePattern();
});