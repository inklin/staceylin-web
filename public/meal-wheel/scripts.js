$(document).ready(function() {
  var ctx;
  var startAngle = 0;
  var clicks = 0;
  // 6 pieces on each half, 12 pieces total. 
  var arc = Math.PI / 6;

  // Meal wheel slice colors and food items
  var colors = ["#B8D430", "#3AB745", "#029990", "#3501CB",
                   "#2E2C75", "#673A7E", "#CC0071", "#F80120",
                   "#F35B20", "#FB9A00", "#FFCC00", "#FEF200"];
  var food = ["Crepes", "Sandwich", "Sushi", "Fried Rice",
                  "Pho", "Burger", "Spaghetti", "Salad",
                  "Curry", "Ramen", "Poutine", "Soup"];

  var spinTime = 0;
  var spinTimeTotal = 0;
  var spinTimeout = null;

  // circle height and width
  var width = 500;
  var height = 500;

  function drawWheel(){
    var canvas = document.getElementById("canvas");
    canvas.height = 550;
    canvas.width = 520;

    if (canvas.getContext) {
      ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;

      ctx.font = "bold 15px Helvetica, Arial";

      for (var i = 0; i < 12; i++){
        var angle = startAngle + i * arc;
        var textRadius = 150;
        // Draw the individual pie section
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.arc(width/2, height/2, width/2, angle, angle + arc);
        ctx.lineTo(width/2, height/2);
        ctx.closePath();
        ctx.fill();
        ctx.save();

        // Fill the text of the pie section
        ctx.fillStyle = "#000000";
        ctx.translate(width/2 + Math.cos(angle + arc/2) * textRadius,
                      height/2 + Math.sin(angle + arc/2) * textRadius);
        ctx.rotate(angle + arc/2);
        var text = food[i];
        ctx.fillText(text, -ctx.measureText(text).width/2, 0);

        ctx.restore();
      }

      // Draw the arrow
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.moveTo(width + 5, height/2 - 20);
      ctx.lineTo(width - 20, height/2);
      ctx.lineTo(width + 5, height/2 + 20);
      ctx.lineTo(width + 5, height/2 + 10);
      ctx.lineTo(width + 10, height/2 + 10);
      ctx.lineTo(width + 10, height/2 - 10);
      ctx.lineTo(width + 5, height/2 - 10);
      ctx.lineTo(width + 5, height/2 - 20);

      ctx.fill();
    }
  }

  function spin(){
    spinTime = 0;
    spinTimeTotal = Math.floor(Math.random() * 1000) + 2 * 1000;
    rotateWheel();
  }

  function rotateWheel(){
    // increment spinTime in milliseconds for each rotation
    var turnTime = 70;
    spinTime = spinTime + turnTime;

    // if wheel has turned more than set turn time then stop the wheel
    if (spinTime > spinTimeTotal){
      stopRotate();
      return;
    }

    // Get a random spin angle, convert to radians, and add it to the start angle
    var spinAngle = Math.random() * 10 + 10;
    startAngle = startAngle + (spinAngle * Math.PI / 180);
    drawWheel();

    // draw the wheel again every set turn time
    spinTimeout = setTimeout(function(){
      rotateWheel();
    }, turnTime);
  }

  function stopRotate(){
    clearTimeout(spinTimeout);

    // divide the ending start angle by the angle per wheel section
    // get the remainder from 12 to ignore any full rotations
    // subtract from last index to get where the stationary arrow is pointing to
    var index = 11 - Math.floor((startAngle / arc) % 12);
    var text = food[index].toUpperCase() + " time!";
    ctx.fillStyle = "#000000";
    ctx.font = "25px Helvetica, Arial";

    // Write the final result under the wheel and center it
    ctx.fillText(text, width/2 - ctx.measureText(text).width/2, height + 40);
    ctx.restore();
  }

  drawWheel();

  $("#canvas").click(function(){
    spin();
    clicks = clicks + 1;

    if (clicks > 2){
      $(".instruction").fadeTo(300, 0);
    }
  });

});