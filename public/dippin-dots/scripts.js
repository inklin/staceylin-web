$(document).ready(function() {
  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var particles = [];
  var w = $(window).width();
  var h = $(window).height();
  var colors = ['#FF00FF', '#FFFF00', '#00CCFF', '#00CC00', '#6600CC', '#FF6600', '#FF9933', '#00CC99', '#FF1975',
  '#0000FF', '#99FF33', '#E60000'];
  var colorIndex = 0;
  color = colors[colorIndex];

  canvas.width = w;
  canvas.height = h;
  var firstclick = false;

  canvas.onmousedown = function(e){
    if (firstclick === false){
      $('.instruction').html('Click again!');
      setTimeout(function(){
        $('.instruction').remove();
      }, 2000);
      firstclick = true;
    }
    for (var i = 0; i < 70; i ++){
      particles.push({
        x: e.pageX,
        y: e.pageY,
        angle: i * 5,
        size: 5 + Math.random() * 2,
        life: 200 + Math.random() * 10,
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
      p.x += Math.cos(p.angle) * 5 + Math.random() * 50 - Math.random() * 50;
      p.y += Math.sin(p.angle) * 5 + Math.random() * 50 - Math.random() * 50;
      p.life -= delta;
      p.size -= delta/30;

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

    newColor = Math.floor(Math.random() * 12);
    colorIndex = newColor;
    color = colors[colorIndex];

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