$(document).ready(function(){

  // Initiate Canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var width = $(window).width();
  var height = $(window).height();
  canvas.width = width;
  canvas.height = height;

  // Create empty Lightning array
  var Lightning = [];

  // Random number min inclusive, max exclusive
  var randomNum = function (min, max){
    return (Math.random() * (max - min) + min);
  };

  // Create Lightning
  var createLightning = function (x, y, diverge){
    Lightning.push({
      x: x,
      y: y,
      xRange: randomNum(5, 30),
      yRange: randomNum(5, 30),
      path: [{
        x: x,
        y: y,
      }],
      pathLimit: randomNum(10, 35),
      diverge: diverge,
      hasFired: false
    });
  };

  // Update Lightning 
  var updateLightning = function (){
    var i = Lightning.length - 1;
    while (i--){
      var light = Lightning[i];

      // Get the last path object and add to it
      light.path.push({
        x: light.path[light.path.length - 1].x + randomNum(0, light.xRange),
        y: light.path[light.path.length - 1].y + randomNum(0, light.yRange)
      });

      if (light.path.length > light.path.pathLimit){
        Lightning.splice(lightningIndex, 1);
      }

      light.hasFired = true;
    }
  };

});