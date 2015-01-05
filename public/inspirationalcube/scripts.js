$(document).ready(function() {
  
var xAngle = 0;
var yAngle = 0;

document.onkeydown = function (e) {
  switch (e.keyCode) {
    /* left */
    case 37:
      yAngle = yAngle - 90;
      break;
    /* up */
    case 38:
      xAngle = xAngle + 90;
      break;
    /* right */
    case 39:
      yAngle = yAngle + 90;
      break;
    /* down */
    case 40:
      xAngle = xAngle - 90;
      break;
  }

  $("#cube").css("-webkit-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
  $("#cube").css("-moz-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
  $("#cube").css("-o-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
  $("#cube").css("transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
};

var clicks = 0;

$(".next").click(function(){
  var face = clicks % 6;
  switch (face){
    case 0:
      $("#cube").css("-webkit-transform", "rotateY(90deg)");
      $("#cube").css("-moz-transform", "rotateY(90deg)");
      $("#cube").css("-o-transform", "rotateY(90deg)");
      $("#cube").css("transform", "rotateY(90deg)");
      break;
    case 1:
      $("#cube").css("-webkit-transform", "rotateY(180deg)");
      $("#cube").css("-moz-transform", "rotateY(180deg)");
      $("#cube").css("-o-transform", "rotateY(180deg)");
      $("#cube").css("transform", "rotateY(180deg)");
      break;
    case 2:
      $("#cube").css("-webkit-transform", "rotateY(270deg)");
      $("#cube").css("-moz-transform", "rotateY(270deg)");
      $("#cube").css("-o-transform", "rotateY(270deg)");
      $("#cube").css("transform", "rotateY(270deg)");
      break;
    case 3:
      $("#cube").css("-webkit-transform", "rotateX(90deg)");
      $("#cube").css("-moz-transform", "rotateX(90deg)");
      $("#cube").css("-o-transform", "rotateX(90deg)");
      $("#cube").css("transform", "rotateX(90deg)");
      break;
    case 4:
      $("#cube").css("-webkit-transform", "rotateX(-90deg)");
      $("#cube").css("-moz-transform", "rotateX(-90deg)");
      $("#cube").css("-o-transform", "rotateX(-90deg)");
      $("#cube").css("transform", "rotateX(-90deg)");
      break;
    case 5:
      $("#cube").css("-webkit-transform", "rotateX(0deg) rotateY(0deg)");
      $("#cube").css("-moz-transform", "rotateX(0deg) rotateY(0deg)");
      $("#cube").css("-o-transform", "rotateX(0deg) rotateY(0deg)");
      $("#cube").css("transform", "rotateX(0deg) rotateY(0deg)");
      break;
  }
  clicks = clicks + 1;
});

});