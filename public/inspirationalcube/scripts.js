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
};


});