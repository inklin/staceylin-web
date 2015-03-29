$(document).ready(function() {

var ctx;
var width = 500;
var height = 500;

var startAngle = 0;

// 6 pieces on each side
var arc = Math.PI / 6;

// Prize wheel slice colors
var colors = ["#B8D430", "#3AB745", "#029990", "#3501CB",
                 "#2E2C75", "#673A7E", "#CC0071", "#F80120",
                 "#F35B20", "#FB9A00", "#FFCC00", "#FEF200"];

function drawWheel(){
  var canvas = document.getElementById("canvas");
  canvas.height = height;
  canvas.width = width;

  if (canvas.getContext) {
    console.log("canvas ok");
    var wheelRadius = 200;
    ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;

    for (var i = 0; i < 12; i++){
      var angle = startAngle + i * arc;
      ctx.fillStyle = colors[i];

      ctx.beginPath();
      ctx.arc(width/2, height/2, wheelRadius, angle, angle + arc, false);
      ctx.endPath();
      ctx.stroke();
      ctx.fill();
    }
  }

drawWheel();

}

});