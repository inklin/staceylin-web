$(document).ready(function() {
  
  var w = 650;
  var h = 500;
  var canvas, ctx, keystate;
  var player, ai, ball;
  var UpKey = 38, DownKey= 40;

  player = {
    x: null,
    y: null,
    width: 20,
    height: 100,

    update: function(){
      if ( keystate[UpKey] ) {
        this.y -= 5;
      }
      if ( keystate[DownKey] ){
        this.y += 5;
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

    },
    draw: function(){
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  ball = {
    x: null,
    y: null,
    length: 20,

    update: function(){

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

    $('canvas').on('mousemove', function(e){
      player.y = e.pageY - 50;
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
  }

  function update(){
    player.update();
    ai.update();
    ball.update();

  }

  function draw(){
    ctx.fillRect(0, 0, w, h);
    ctx.save();

    ctx.fillStyle = '#FFFFFF';
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