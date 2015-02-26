$(document).ready(function() {
  
  var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      pi = Math.PI;
  var w = 800,
      h = 650;
      canvas.width = w;
      canvas.height = h;

  var divergence, reduction;
  var flowers = false;
  reduction = 0.8;

  var start = {x: w/2, y: 180, angle: 90};

  // length of branches 
  var detail;
  var len;

  init();

  function init(){
    // Draw the background of the canvas
    ctx.fillStyle = "#EFFBF5";
    ctx.fillRect(0, 0, w, h);

    // Draw the tree trunk
    ctx.fillStyle = "#7A2900";
    ctx.fillRect(w/2 - 7, h - 180, 14, 110);

    divergence = Math.random() * (35 - 10) + 10;
    len = Math.random() * (110 - 50) + 50;
    detail = Math.random () * (6 - 3) + 3;

    drawBranch(start, len, 10, detail);
  }

  $('body').click(function(){
    ctx.clearRect(0, 0, w, h);

    init();
  });

  function drawBranch(point, length, line_width, gen){
    var newpoint1 = getEnd(point.x, point.y, point.angle + divergence, length);
    var newpoint2 = getEnd(point.x, point.y, point.angle - divergence, length);

    ctx.beginPath();
    ctx.moveTo(point.x, h - point.y);
    ctx.lineTo(newpoint1.x, h - newpoint1.y);
    ctx.moveTo(point.x, h - point.y);
    ctx.lineTo(newpoint2.x, h - newpoint2.y);

    ctx.strokeStyle = "#7A2900";
    if (gen >= 8){
      ctx.strokeStyle = "#993300";
    }
    ctx.lineWidth = line_width;
    ctx.stroke();

    newpoint1.angle = point.angle + divergence;
    newpoint2.angle = point.angle - divergence;

    line_width = line_width * 0.8;
    length = length * reduction;

    if (gen <= 10){
      gen ++;
      drawBranch(newpoint1, length, line_width, gen);
      drawBranch(newpoint2, length, line_width, gen);
    }
    if (gen >= 10) {
      ctx.fillStyle = "#FF99FF";
      ctx.beginPath();
      ctx.arc(newpoint1.x, h - newpoint1.y, 5, 0, 2 * pi, true);
      ctx.fill();
      ctx.arc(newpoint2.x, h - newpoint2.y, 5, 0, 2 * pi, true);
      ctx.fill();
    }

  }


  function getEnd(x, y, a, length){
    var epx = x + length * Math.cos(a * pi/180);
    var epy = y + length * Math.sin(a * pi/180);
    return {x: epx, y: epy};
  }

});

