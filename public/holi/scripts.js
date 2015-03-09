$(document).ready(function() {
  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var particles = [];
  var w = $(window).width();
  var h = $(window).height();

  canvas.width = w;
  canvas.height = h;

  canvas.onmousedown = function(e){

    for (var i = 0; i < 36 * 2; i ++){
      particles.push({
        x: e.pageX,
        y: e.pageY,
        angle: i * 5,
        size: 5 + Math.random() * 3,
        life: 200 + Math.random() * 50,
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

      if (p.life <=0){
        particles.splice(i--, 1);
        continue;
      }
    }
  }

});