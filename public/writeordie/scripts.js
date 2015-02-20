$(document).ready(function() {
  
  var timeLimit;

// Get the options that the user set
  timeLimit = 10;
  console.log(timeLimit);

// Create slider for grace period
  $(".slider").slider({
    min: 5,
    step: 5,
    max: 30,
    value: 10,
    stop: showValue,
    
  });

  function showValue(){
    timeLimit = $(".slider").slider("value");
    $(".grace").html(timeLimit + " seconds");
    console.log(timeLimit);
  }

  function checkTyping(){

  }

});