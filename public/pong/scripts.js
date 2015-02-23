$(document).ready(function() {
  
  var w = 650;
  var h = 500;
  var canvas, ctx, keystate;
  var player, ai, ball;

  player = {
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
    player.draw();
    ai.draw();
    ball.draw();

  }

  main();

});