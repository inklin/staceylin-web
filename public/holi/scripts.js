$(document).ready(function() {
  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var particles = [];
  var w = $(window).width();
  var h = $(window).height();
  var colors = ['#FF00FF', '#FFFF00', '#00CCFF', '#00CC00', '#6600CC', '#FF6600', '#FF9933'];
  var colorIndex = 0;
  color = colors[colorIndex];

  canvas.width = w;
  canvas.height = h;

  canvas.onmousedown = function(e){

    color = colors[colorIndex];

    console.log('mouse pressed');
    for (var i = 0; i < 70; i ++){
      particles.push({
        x: e.pageX,
        y: e.pageY,
        angle: i * 5,
        size: 5 + Math.random() * 2,
        life: 150 + Math.random() * 100,
      });
    }
  };


  var delta = 0;
  var last = Date.now();

  function animate(){
    delta = Date.now() - last;
    last = Date.now();

    for (var i = 0; i < particles.length; i++){
      var p = particles[i];
      p.x += Math.cos(p.angle) * 4 + Math.random() * 2 - Math.random() * 2;
      p.y += Math.sin(p.angle) * 4 + Math.random() * 2 - Math.random() * 2;
      p.life -= delta;
      p.size -= delta/50;

      if (p.size <= 0){
        p.life = 0;
      }

      if (p.life <= 0){
        particles.splice(i--, 1);
        continue;
      }
    }
  }

  function draw(){
    ctx.fillStyle = color;
    for (var i = 0; i < particles.length; i++){
      if (Math.random() < 0.1){
        continue;
      }

      var p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
      ctx.fill();
    }
  }

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

(function animloop(){
    requestAnimFrame(animloop);
    animate();
    draw();
})();


});