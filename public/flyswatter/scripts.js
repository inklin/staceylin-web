$(document).ready(function() {

  var topValue;
  var leftValue;

  var leftStarting;
  var topStarting;

  /* User clicks Start to play the game */
  var flies = [];
  var gameover;

  var fliesSwatted = 0;


  setInterval(function(){
    if (flies.length < 5) {
      createFly();
      if (flies.length === 5) {
        $("#instruction").html("Game over.");
        gameover = true;
      }
    }
  }, 3000);


  function createFly() {
    leftStarting = Math.random() * 800;
    topStarting = Math.random() * 500;
    var fly = $("<img src=\"fly.png\" class=\"fly\">");
    fly.css({top: topStarting, left: leftStarting});
    flies.push(fly);
    $("#sandwichcontainer").append(fly);

    fly.click(function() {
      if (!gameover){
        swatFly(fly);
      }
    });
  }


  /* Make the fly move to the sandwich - center of the div */
  function movefly(){
  /* Make a random location in the sandwich container for the fly to go to */
    for (var i = 0; i < flies.length; i++) {
      topValue = (Math.random() * (350) + 50);
      leftValue = (Math.random() * (200) + 200);
      var fly = flies[i];
      fly.delay(300).animate({top: topValue, left: leftValue}, 500);
    }
  }

  function swatFly(fly) {
      fly.hide();
      var index = flies.indexOf(fly);
      if (index > -1) {
        flies.splice(index,1);
      }
      fliesSwatted++;
      $("#flycount").html(fliesSwatted);
  }

  setInterval(function() {
      movefly();
  }, 100);
});
