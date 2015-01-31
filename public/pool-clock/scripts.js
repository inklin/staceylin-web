$(document).ready(function() {
  var m;
  var s;
  var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');
  var tau = 2 * Math.PI;

  /* Define the radius of the clock */
  var clockRadius = 250;
      /* Center the clock on the canvas */
  var clockX = canvas.width / 2;
  var clockY = canvas.height / 2;

  /* Function to get minute and second hands on the clock*/
  function getTime(){
    var now = new Date();
    m = now.getMinutes();
    s = now.getSeconds();

    /* clear the canvas */
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* armLength goes from 0 to 1, 1 meaning it reaches the most outer edge of the clock*/
    function drawArm(progress, armThickness, armLength, armColor){
      var armRadians = (tau * progress) - (tau/4);
      var targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);
      var targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);

      /* pass in the parameters for how the arm looks in thickness and color */
      ctx.lineWidth = armThickness;
      ctx.strokeStyle = armColor;
      ctx.beginPath();
      /* start at the center of the clock */
      ctx.moveTo(clockX, clockY);
      /* Draw a line outwards to where the hand points */
      ctx.lineTo(targetX, targetY);
      ctx.stroke();
    }

    /* Draw the face of the clock */
    drawFace();
    /* Draw numbers */
    makeNumbers();
    /* Draw notches */
    makeNotches(clockRadius * 0.90);

    /* draw black minute hand  */
    drawArm(m/60, 5, 0.7, "#000000");

    /* draw green second hand */
    drawArm(s/60, 10, 0.85, "#00FF00");

    /* draw blue second hand */
    drawArm((s - 15)/60, 10, 0.85, "#0000FF");

    /* draw red second hand */
    drawArm((s- 30)/60, 10, 0.85, "#FF0000");

    /* draw yellow second hand */
    drawArm((s- 45)/60, 10, 0.85, "#FFFF00");

    /* cover the middle of the hands intersecting */
    drawMiddle();
  }

  /* Move the clock every second */
  getTime();
  setInterval(getTime, 1000);
  
  function drawFace(){
    ctx.beginPath();
    ctx.arc(clockX, clockY, clockRadius, 0, tau, false);
    ctx.fillStyle = "#E0E0EB";
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#F0F0F5";
    ctx.stroke();
  }

  function drawMiddle(){
    ctx.beginPath();
    ctx.arc(clockX, clockY, 8, 0, tau, true);
    ctx.fillStyle = "#000000";
    ctx.closePath();
    ctx.fill();
  }

  /* Draw the numbers on the clock */
  function makeNumbers(){
    ctx.font = "16px 'Futura'";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000000";
    for (num = 1; num < 13; num++){
      number = num * 5;
      var angle = num * (tau/12) ;
      ctx.rotate(angle);
      ctx.translate(0, - clockRadius * 0.80);
      ctx.rotate(-angle);
      ctx.fillText(number.toString(), canvas.width/2, canvas.height/2);
      ctx.rotate(angle);
      ctx.translate(0, clockRadius * 0.80);
      ctx.rotate(-angle);
    }
  }

  /* Draw the second notches */
  function makeNotches(distance){
    var x;
    var y;
    var angle = 0;
    for (var i = 0; i < 60; i++){
      angle = angle + (3 * tau/ 180);
      x = clockX + distance * Math.cos(angle);
      y = clockY + distance * Math.sin(angle);

      ctx.beginPath();
      ctx.fillStyle = "#000000";
      ctx.arc(x, y, 3, 0, tau, true);
      ctx.fill();
      ctx.closePath();
    }
  }


});