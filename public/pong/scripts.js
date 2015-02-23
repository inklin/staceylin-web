$(document).ready(function() {
  

   var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      h = 500,
      w = 650,

      // Create the ball object
      ball = {};

      canvas.height = h;
      canvas.width = w;

      // Draw the background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, 650, 500);

      // Draw the middle dotted line
      ctx.fillStyle = "#FFFFFF";
      var y = 5;

      for (var i = 0; i < 30; i ++){
        ctx.fillRect(323, y, 3, 10);
        y = y + 20;
      }

      ball = {
        x: getRandom(200, 400),
        y: getRandom(50, 600),
        mx: 5,
        my: 5,
        side: 10,

        draw: function (){
          ctx.fillStyle = "#FF0000";
          ctx.fillRect(this.x, this.y, 15, 15);
        },

        move: function(){
          // if it goes too low or too high, change direction of the y
          if (this.y > h - this.side){
            this.y = h - this.side;
            this.my *= - 1;
          } else if (this.y < this.side){
            this.y = this.side;
            this.my *= - 1;
          }

          this.x += this.mx;
          this.y += this.my;
        }

      };

      ball.draw();
      ball.move();

      // Create a fuction for random integers, min and max inclusive
      function getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
      }



});