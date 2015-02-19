$(document).ready(function() {
  
  var value;

// Create slider for grace period
  $(".slider").slider({
    min: 5,
    step: 5,
    max: 30,
    value: 10,
    stop: showValue,
    
  });

  function showValue(){
    value = $(".slider").slider("value");
    $(".grace").html(value + " seconds");
  }

  function checkTyping(){
    
  }

});