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
    stop: showValue
  })

  // Create labels for the increments on the slider
  .each(function() {

    // Get the options for the slider
    var opt = $(this).data().uiSlider.options;
    
    // Get the number of possible values by dividing the length by the size of steps (Add one for the end)
    var vals = (opt.max - opt.min)/opt.step + 1;

    console.log("number of values is " + vals);

    // Get the size of each step
    var step = opt.step;
    console.log("the size of each step is " + step);

    // Position the labels 
    for (var i = 0; i < vals ; i ++){

      // Create a new element, label it, and position it with percentages
      var el = $('<label>' + ((step * i) + opt.min) + '</label>').css('left', (i/(vals - 1) * 100) + '%');
      console.log("i divided by vals is " + i/vals);

      // Add the element to the slider
      $('.slider').append(el);
    }
    
  });


  function showValue(){
    timeLimit = $(".slider").slider("value");
    $(".grace").html(timeLimit + " seconds");
    console.log(timeLimit);
  }

  function checkTyping(){

  }

});