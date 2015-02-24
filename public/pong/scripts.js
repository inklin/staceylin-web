$(document).ready(function() {
  
  var w = 650;
  var h = 500;
  var canvas, ctx, keystate;
  var player, ai, ball;
  var UpKey = 38, DownKey= 40;
  var pi = Math.PI;
  var score;

  score = {
    ai: 0,
    player: 0,

    update: function(){
      if (0 - ball.length + ball.speed > ball.x){
        this.ai += 1;
      }
      if (ball.x > w - ball.speed){
        this.player += 1;
      }
    },

    draw: function(){
      ctx.font = '25px Verdana';
      ctx.fillText(this.player, w * 0.25, 50);
      ctx.fillText(this.ai, w * 0.75, 50);
    }
  };

  player = {
    x: null,
    y: null,
    width: 20,
    height: 100,

    update: function(){
      if ( keystate[UpKey] ) {
        this.y -= 5;
        if (this.y <= 0){
          this.y = 0;
        }
      }
      if ( keystate[DownKey] ){
        this.y += 5;
        if (this.y >= h - this.height){
          this.y = h - this.height;
        }
      }
    },

    draw: function(){
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  ai = {
    x: null,
    y: null,
    width: 20,
    height: 100,

    update: function(){
      var destination = ball.y - (this.height - ball.length) * 0.5;
      this.y += (destination - this.y) * 0.05;
    },
    draw: function(){
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  ball = {
    x: null,
    y: null,
    length: 20,
    velocity: null,
    speed: 6,

    update: function(){
      this.x = this.x + ball.velocity.x;
      this.y = this.y + ball.velocity.y;

      // when the y coordinates go too low or too high, change direction
      if (this.y < 0 || this.y + this.length > h){
        // if the ball is going upwards add offset so the ball goes to the bottom of the game container
        var offset = this.velocity.y < 0 ? 0 - this.y : h - (this.y + this.length);
        this.y += 2 * offset;
        this.velocity.y *= -1;
      }

      // return true if the boxes are intersecting
      var AABBIntersect = function (ax, ay, aw, ah, bx, by, bw, bh){
        return ax < bx + bw && ay < by + bh && bx < ax + aw && by < ay + ah;
      };

      // if the ball is going to the left, check against player paddle
      // else check against the ai paddle (ball going to the right)
      var paddle = this.velocity.x < 0 ? player : ai;
      if (AABBIntersect(paddle.x, paddle.y, paddle.width, paddle.height, this.x, this.y, this.length, this.length)){
        
        // put the x coordinate to the right of the player paddle 
        // or put the x coordinate to the left of the ai paddle
        this.x = paddle === player ? player.x + player.width : ai.x - this.length;

        // Y coordinates: calculate where the ball hits the paddle compared to the length of the paddle
        var n = (this.y + this.length - paddle.y)/(paddle.height + this.length);
        var phi = 0.25 * pi * (2 * n - 1); // Pi / 4 = 45 degrees

        var hit = Math.abs(phi) > 0.2 * pi ? 1.5 : 1;

        // check if the paddle is the player's or ai
        // if the ball hits the player paddle, velocity is positive and ball goes to the right
        // if the ball hits the ai paddle, velocity is negative and the ball goes to the left
        this.velocity.x = hit * (paddle === player ? 1 : -1) * this.speed * Math.cos(phi);
        this.velocity.y = hit * this.speed * Math.sin(phi);
      }

      // if the ball goes off the left or right side
      // restart the ball in the original starting position
      if (0 - ball.length > this.x || this.x > w){
        ball.x = (w - ball.length)/2;
        ball.y = (h - ball.length)/2;

        ball.velocity = {
        x: (paddle === player ? 1 : -1) * ball.speed,
        y: 0,
        };
      }

    },
    draw: function(){
      ctx.fillRect(this.x, this.y, this.length, this.length);
    }
  };


  function main(){
    canvas = document.getElementById('canvas');
    canvas.width = w;
    canvas.height = h;
    ctx = canvas.getContext('2d');

    keystate = [];
    $(document).keydown(function(e){
      keystate[e.keyCode] = true;
    });

    $(document).keyup(function(e){
      delete keystate[e.keyCode];
    });

    init();

    var loop = function (){
      update();
      draw();
      window.requestAnimationFrame(loop, canvas);
    };
    window.requestAnimationFrame(loop, canvas);
  }

  function init(){
    player.x = player.width;
    player.y = (h - player.height)/2;

    ai.x = w - (player.width + ai.width);
    ai.y = (h - ai.height)/2;

    ball.x = (w - ball.length)/2;
    ball.y = (h - ball.length)/2;

    ball.velocity = {
      x: ball.speed,
      y: 0,
    };

  }

  function update(){
    score.update();
    player.update();
    ai.update();
    ball.update();

  }

  function draw(){
    // Draw the black background and save
    ctx.fillRect(0, 0, w, h);
    ctx.save();

    ctx.fillStyle = '#FFFFFF';
    score.draw();
    player.draw();
    ai.draw();
    ball.draw();

    // Draw the dotted middle line
    var wi = 4;
    var x = (w - wi)*0.5;
    var y = 0;
    var step = h/15;
    while (y < h){
      ctx.fillRect(x, y + step * 0.25, wi, step * 0.5);
      y = y + step;
    }

    ctx.restore();

  }

  main();

});