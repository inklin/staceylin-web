$(document).ready(function() {

  // Set initial values for time and grace period
  var grace = 5;
  var time = 10;
  var started = false;
  var finished = false;
  var gracePeriod;

// Create slider for grace period
  $(".slider").slider({
    min: 5,
    step: 5,
    max: 30,
    value: 15,
    range: 'min',
    stop: function(){
      grace = $('.slider').slider('value');
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

  // Change the time limit when the user changes the radio button
  $('input[name="time"]').click(function(){
    time = this.value;
  });

  $('.startbutton').click(function(){
      $('.minutes').html(time);
      $('.intro').hide();
  });

  function countDown(){

    // get total time in seconds;
    // TESTING - NEED TO CORRELATE THIS TO THE TIME LIMIT
    var totalTime = 0.5 * 60;

    var remainingMin;
    var remainingSec;


    var updateClock = function() {
      remainingMin = Math.floor(totalTime/60);
      remainingSec = totalTime % 60;
      totalTime = totalTime - 1;

      if (remainingSec < 10){
        remainingSec = "0" + remainingSec;
      }

      if (remainingMin < 10){
        remainingMin = "0" + remainingMin;
      }

      $('.minutes').html(remainingMin);
      $('.seconds').html(remainingSec);
    };

    // Start clock
    updateClock();

    // Update every second
    var countdown = setInterval(updateClock, 1000);

    // Stop countdown after set number of minutes
    setTimeout(function(){
      clearInterval(countdown);
      clearTimeout(gracePeriod);
      $('.remainTime').html('YOU MADE IT! Remember to copy and save your writing');
      $('.type').css({'background-color':'#C8C8C8'});
      $('.sound').html('');
      finished = true;
    }, totalTime * 1000);
    
  }

  var clip = $('#beep');

  // Start counting down and checking for typing once users starts typing
  $('textarea').keyup(function(){
     if (finished){
      return;
     }

    // start the countdown
    // start the time out for the grace period
    if (!started){
      started = true;
      countDown();
      gracePeriod = setTimeout(function(){
        $('.type').css({'background-color':'#FF0000'});
        $('.sound').html('<audio autoplay><source src="beep.wav" type="audio/wav"></audio>');
      }, grace * 1000);
    } else {
    // Clear and start a new timeout every time the user types
      clearTimeout(gracePeriod);
      $('.type').css({'background-color':'#C8C8C8'});
      $('.sound').html('');

      gracePeriod = setTimeout(function(){
        $('.type').css({'background-color':'#FF0000'});
        $('.sound').html('<audio autoplay><source src="beep.wav" type="audio/wav"></audio>');
      }, grace * 1000);
    }

  });

});