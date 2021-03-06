$(document).ready(function() {
  
  var shapeArray = [1, 6, 12, 11, 15, 18, 20, 24, 30, 40, 48, 60];
  var shapeIndex = 0;
  var shapeMaxIndex = shapeArray.length;
  var incrementSize = shapeArray[shapeIndex];
  var modalHidden = false;

  // Draw the spiral

  function drawSpiral(){
    var canvas = document.getElementById('canvas');
    var ctx;

    if (canvas.getContext){
    ctx = canvas.getContext('2d');
    }

    canvas.height = $(window).height();
    canvas.width = $(window).width();

    var x = canvas.width/2;
    var y = canvas.height/2;

    var stepsPerRotation = 60;
    var increment =  incrementSize * Math.PI / stepsPerRotation;
    var angle = increment;
    var totalRotations = 15;
    var totalRotationAngle = totalRotations * 2 * Math.PI;

    ctx.beginPath();
    ctx.moveTo(x, y);

    while (angle < totalRotationAngle){
      x = x + angle * Math.cos(angle + counter);
      y = y + angle * Math.sin(angle + counter);
      angle = angle + increment;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
  }


  // Animate the spiral
  var counter = 0;
  function animateSpiral(){
    drawSpiral(counter);
    counter += 0.02;
    requestAnimationFrame(animateSpiral);
  }

  window.requestAnimationFrame(animateSpiral);

  // Change shape on click on space bar press
  $(document).click(function(){
    changeShape();
  });

  $(document).keypress(function(e){
    var key = e.keyCode;
    if (key == 32){
      changeShape();
    }
  });

  // Change the increment size for a different spiral shape
  function changeShape(){
    if (!modalHidden) {
      $('.modal').fadeOut();
      modalHidden = true;
    } else {
      shapeIndex = ( shapeIndex + 1 ) % shapeMaxIndex;
      incrementSize = shapeArray[shapeIndex];
    }
  }

});