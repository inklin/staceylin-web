$(document).ready(function() {
  
  var xAngle = 0;
  var yAngle = 0;

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      // left 
      case 37:
        yAngle = yAngle - 20;
        break;
      // right
      case 39:
        yAngle = yAngle + 20;
        break;
    }
  rotateCard();
  };

  function rotateCard(){
    $(".card").css("-webkit-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
    $(".card").css("-moz-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
    $(".card").css("-o-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
    $(".card").css("transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
  }

  $('.nav').click(function(){
    var direction = $(this).val();

    if (direction === "left"){
      yAngle = yAngle - 20;
    } else {
      yAngle = yAngle + 20;
    }

    rotateCard();
  });

});