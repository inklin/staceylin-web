$(document).ready(function() {
  

   var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      h = 600,
      w = 750;

      canvas.height = h;
      canvas.width = w;

      // Draw the background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, 750, 600);

      // Draw the middle dotted line
      ctx.fillStyle = "#FFFFFF";
      var y = 5;

      for (var i = 0; i < 30; i ++){
        ctx.fillRect(370, y, 3, 10);
        y = y + 20;
      }


});