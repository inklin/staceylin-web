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
      diverge: diverge,
      hasFired: false
    });
  };

  // Update Lightning 
  var updateLightning = function (){
    var lightningIndex = Lightning.length - 1;
    while (Lightning[lightningIndex]){
      var light = Lightning[lightningIndex];


      lightningIndex --;
    }
  };



});