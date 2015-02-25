$(document).ready(function() {
  
  var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      pi = Math.PI;
  var w = 600,
      h = 600;
      canvas.width = w;
      canvas.height = h;

  var divergence, reduction;
  divergence = 10;
  reduction = 0.8;

  var start = {x: w/2, y: 50, angle: 90};

  init();

  function init(){
    // Draw the background of the canvas
    ctx.fillStyle = "#CBFEFC";
    ctx.fillRect(0, 0, w, h);

    drawBranch(start, 100, 10, 3);
  }

  function drawBranch(point, length, line_width, depth){
    var newpoint1 = getEnd(point.x, point.y, point.angle + divergence, length);
    var newpoint2 = getEnd(point.x, point.y, point.angle - divergence, length);

    ctx.beginPath();
    ctx.moveTo(point.x, h - point.y);
    ctx.lineTo(newpoint1.x, h - newpoint1.y);
    ctx.moveTo(point.x, h - point.y);
    ctx.lineTo(newpoint2.x, h - newpoint2.y);
    ctx.strokeStyle = "#703434";
    ctx.lineWidth = line_width;
    ctx.stroke();

    newpoint1.angle = point.angle + divergence;
    newpoint2.angle = point.angle - divergence;

    line_width = line_width * 0.9;
    length = length * reduction;

    if (depth > 0){
      depth--;
      drawBranch(newpoint1, length, line_width, depth);
      drawBranch(newpoint2, length, line_width, depth);
    }
  }


  function getEnd(x, y, a, length){
    var epx = x + length * Math.cos(a * pi/180);
    var epy = y + length * Math.sin(a * pi/180);
    return {x: epx, y: epy};
  }

});

