$(document).ready(function() {
  
  var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      pi = Math.PI;
  var w = 600,
      h = 600;
      canvas.width = w;
      canvas.height = h;

  var length, divergence, reduction, line_width, start_points = [];

  init();

  function init(){
    // background of the canvas
    ctx.fillStyle = "#CBFEFC";
    ctx.fillRect(0, 0, w, h);

    // draw the trunk of the tree
    length = 100;
    divergence = 45;
    reduction = 0.75;
    line_width = 10;

    var trunk = {x: w/2, y: length + 50, angle: 90};
    start_points.push(trunk);

    ctx.beginPath();
    ctx.moveTo(trunk.x, h - 50);
    // move the line upwards by deducting the height of the trunk
    ctx.lineTo(trunk.x, h - trunk.y);
    ctx.strokeStyle = "#703434";
    ctx.lineWidth = line_width;
    ctx.stroke();
  }

});