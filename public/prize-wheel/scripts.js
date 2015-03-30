$(document).ready(function() {

var ctx;
var canvasH = 520;
var canvasW = 520;
// circle height and width
var width = 500;
var height = 500;

var startAngle = 0;

// 6 pieces on each side
var arc = Math.PI / 6;

// Prize wheel slice colors
var colors = ["#B8D430", "#3AB745", "#029990", "#3501CB",
                 "#2E2C75", "#673A7E", "#CC0071", "#F80120",
                 "#F35B20", "#FB9A00", "#FFCC00", "#FEF200"];
var food = ["Crepes", "Sandwich", "Sushi", "Fried Rice",
                "Pho", "Burger", "Spaghetti", "Salad",
                "Curry", "Ramen", "Poutine", "Soup"];

function drawWheel(){
  var canvas = document.getElementById("canvas");
  canvas.height = canvasH;
  canvas.width = canvasW;

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
    ctx.moveTo(width + 10, height/2 - 20);
    ctx.lineTo(width - 20, height/2);
    ctx.lineTo(width + 10, height/2 + 20);
    ctx.lineTo(width + 10, height/2 + 10);
    ctx.lineTo(width + 20, height/2 + 10);
    ctx.lineTo(width + 20, height/2 - 10);
    ctx.lineTo(width + 10, height/2 - 10);
    ctx.lineTo(width + 10, height/2 - 20);

    ctx.fill();
  }
}

drawWheel();

});