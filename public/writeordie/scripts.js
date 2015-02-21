$(document).ready(function() {

  // Set initial values for time and grace period
  var grace = 5;
  var time = 10;

// Create slider for grace period
  $(".slider").slider({
    min: 5,
    step: 5,
    max: 30,
    value: 5,
    stop: function(){
      grace = $('.slider').slider('value');
      console.log(grace);
    }
  })

  // Create labels for the increments on the slider
  .each(function() {

    var opt = $(this).data().uiSlider.options;
    
    // Get the number of possible values
    var step = opt.step;
    var vals = (opt.max - opt.min)/step + 1;

    // Create and add the labels 
    for (var i = 0; i < vals ; i ++){

      var el = $('<label>' + ((step * i) + opt.min) + '</label>').css('left', (i/(vals - 1) * 100) + '%');
      $('.slider').append(el);
    }
    
  });

  // Change the limit when the uer changes the radio button
  $('input[name="time"]').click(function(){
    time = this.value;
  });

  startTyping();

});