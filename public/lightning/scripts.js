$(document).ready(function(){

  // Initiate Canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var width = $(window).width();
  var height = $(window).height();
  var currentLightTime = 0;
  var totalLightTime = 50;

  canvas.width = width;
  canvas.height = height;

  // Create empty Lightning array
  var Lightning = [];

  // Random number min inclusive, max exclusive
  var randomNum = function (min, max){
    return (Math.floor(Math.random() * (max - min) + min));
  };

  // Create Lightning
  var createLightning = function (x, y, diverge){
    Lightning.push({
      x: x,
      y: y,
      xRange: randomNum(20, 70),
      yRange: randomNum(20, 40),
      path: [{
        x: x,
        y: y,
      }],
      pathLimit: randomNum(10, 20),
      diverge: diverge,
      hasFired: false
    });
  };

  // Update Lightning 
  var updateLightning = function (){
    var i = Lightning.length;
    while (i--){
      var light = Lightning[i];

      // Get the last path object and add to it
      light.path.push({
        x: light.path[light.path.length - 1].x + (randomNum(0, light.xRange)-(light.xRange/2)),
        y: light.path[light.path.length - 1].y + randomNum(0, light.yRange)
      });

      if (light.path.length > light.pathLimit){
        Lightning.splice(i, 1);
      }

      light.hasFired = true;
    }
  };

  // Render the Lightning
  var renderLightning = function(){
    var i = Lightning.length;
    while (i--){
      var light = Lightning[i];

      ctx.strokeStyle = 'hsla(0, 100%, 100%, '+randomNum(10, 100)/100+')';

      if(randomNum(0, 5) === 0){
        ctx.lineWidth = 2;
      }
      if(randomNum(0, 25) === 0){
        ctx.lineWidth = 3;
      }
      if(randomNum(0, 100) === 0){
        ctx.lineWidth = 4;
      }

      if(randomNum(0, 150) === 0){
        ctx.lineWidth = 5;
      }

      if(randomNum(0, 180) === 0){
        ctx.lineWidth = 6;
      }

      ctx.beginPath();
      var pathCount = light.path.length;
      ctx.moveTo(light.x, light.y);

      for (var j = 0; j < pathCount; j++){
        ctx.lineTo(light.path[j].x, light.path[j].y);

        if (light.diverge){
          if (randomNum(0, 100) === 0){
            light.diverge = false;
            createLightning(light.path[j].x, light.path[j].y, false);
          }
        }
      }

      if (!light.hasFired){
        ctx.fillStyle = 'rgba(255, 255, 255, '+randomNum(4, 12)/100+')';
        ctx.fillRect(0, 0, width, height);
      }

      ctx.stroke();
    }
  };

  var lightningTimer = function(){
    currentLightTime++;
    if (currentLightTime >= totalLightTime){
      var newX = randomNum(100, width - 100);
      var newY = randomNum(100, height / 2);
      var createCount = randomNum(2, 3);
      while(createCount > 0){
        createLightning(newX, newY, true);
        createCount --;
      }
      // Reset light time and create a new time limit
      currentLightTime = 0;
      totalLightTime = randomNum(40, 80);
    }
  };

  // Clear canvas
  var clearCanvas = function(){
      ctx.fillStyle = 'rgba(0,0,0,'+randomNum(1, 30)/100+')';
      ctx.fillRect(0,0, width, height);
  };
  
  var lightningLoop = function(){
    clearCanvas();
    updateLightning();
    lightningTimer();
    renderLightning();
  };

  var initLightning = function(){
    setTimeout(function(){
      for (var i = 0; i < 3; i++){
        createLightning(width/2, height/2, true);
      }
      setInterval(function(){
        lightningLoop();
      }, 50);
    }, 100);
  };

  setTimeout(function(){
    $('.intro').fadeOut(2000, function(){
      initLightning();
    });
  }, 6000);


});