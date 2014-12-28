$(document).ready(function() {
  
  var gameStarted = false;
  var startTime;
  var timeout;

  /* A function to start when the user clicks and changes background color when time is up */
  $("#background").click(function() {
    if (!gameStarted) {
      $("#background").css("background-color", "#2ecc71");
      $("#continue").html("");
      $("#instruction").html("Wait for Red...");
      startTime = null;
      var runTime = Math.floor(Math.random()* 6000) + 1000;
      timeout = setTimeout(function(){
        timeout = null;
        startTime = new Date().getTime();
        $("#background").css("background-color", "#e74c3c");
        $("#instruction").html("Click!");
      }, runTime);
      gameStarted = true;
    } else {
      if (startTime) {
        var endTime = new Date().getTime();
        var speed = endTime - startTime;
        $("#instruction").html(speed + " miliseconds!");
        $("#background").css("background-color", "#3498db");
        $("#continue").html("Click to keep going!");
      } else {
        $("#instruction").html("Oops, too early!");
        $("#continue").html("Click to try again.");
        $("#background").css("background-color", "#3498db")
        clearTimeout(timeout);
      }
      gameStarted = false;
    }
  });
});



// 
// 1. Game ready
// 2. Game started 
//   - create random interval betwene 1 and 5 seconds
// 3. Timeout fired
//   - change background
//   - record time (start time)
// 4. User Clicks
//   - record time between now and start time (display to user)

// if (user clicks and timeout has not fired)
//   - stoptimeout, Show error message, and go to state 1
