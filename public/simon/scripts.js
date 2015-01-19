$(document).ready(function() {
  var colorChoices = ["red", "green", "blue", "yellow"];
  var gamePattern = [];
  var allowUserInput = false;
  var level = 1;

  function makePattern(){
    var colorIndex = Math.floor(Math.random() * 4);
    var color = colorChoices[colorIndex];
    setTimeout(function(){
      gamePattern.push(color);
      console.log("added color");
      showPattern();
    }, 500);
  }

  function showPattern(){
    for (var i = 0; i < gamePattern.length; i++){
        var buttonColor = gamePattern[i];
        lightButton(buttonColor);
        console.log("show" + i);
      }
      allowUserInput = true;
      getInput();
  }

  function lightButton(color) {
    $('#' + color).addClass(color + "-glow");
    setTimeout(function() {
      $('#' + color).removeClass(color + "-glow");
    }, 600);
  }

  function getInput(){
    var userInput = [];
    var input = 0;
    if (allowUserInput){
      $(".button").click(function(){
        var color = this.id;
        userInput.push(color);
        lightButton(color);

        if (userInput[input] !== gamePattern[input]){
          /* fail and restart */
          console.log("fail");
          gamePattern = [];
          userInput = [];
          level = 0;
          allowUserInput = false;
          setTimeout(function(){
            makePattern();
          }, 800);
        } else if ( userInput.length == gamePattern.length){
          /* user has finished pushing all the correct buttons */
          console.log("correct");
          allowUserInput = false;
          level ++;
          $("#level").html("Level " + level);
          userInput = [];
          makePattern();
        } else {
          /* check next user attempt button */
          console.log("next button");
          input = input + 1;
        }
      });
    }
  }

  makePattern();
});