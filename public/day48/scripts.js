$(document).ready(function() {
  
var xAngle = 0;
var yAngle = 0;

document.onkeydown = function (e) {
  switch (e.keyCode) {
    /* left */
    case 37:
      yAngle = yAngle - 20;
      break;
    /* up */
    case 38:
      xAngle = xAngle + 20;
      break;
    /* right */
    case 39:
      yAngle = yAngle + 20;
      break;
    /* down */
    case 40:
      xAngle = xAngle - 20;
      break;
  }

  $(".card").css("-webkit-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
  $(".card").css("-moz-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
  $(".card").css("-o-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
  $(".card").css("transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
};

});