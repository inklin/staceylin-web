$(document).ready(function() {
  
  var mouseX = 0;
  var mouseY = 0;

  /* Get coordinates of the mouse when it moves */
  $(document).on('mousemove', function(e){
    mouseX = e.pageX - width;
    mouseY = e.pageY - height;
  });

  /* Get coordinates for mobile users */
  document.addEventListener('touchmove', function(e){
    e.preventDefault();
    mouseX = e.pageX - width;
    mouseY = e.pageY - height;
  }, false);

  var pieces = ["five", "four", "three", "two", "one"];
  var speed = 20;
  var width;
  var height;
  var name;

  for (var i = 0; i < pieces.length; i++){
    /* move the div to the cursor */
    name = pieces[i];
    width = $("." + name).width() / 2  - 25;
    height = $("." + name).height() /2 - 25;
    moveDiv(name, speed, width, height);
    /* make the one in front of it a little faster */
    speed = speed - 3;
  }

  /* Create a function to move the element to the mouse cursor */
  function moveDiv(element, speed, offsetX, offsetY){
    var xPosition = 0;
    var yPosition = 0;
    var moveLoop = setInterval(function(){
      xPosition += (mouseX - offsetX - xPosition) / speed;
      yPosition += (mouseY - offsetY- yPosition) / speed;
      $("." + element).css({left: xPosition, top: yPosition});
    }, 30);
  }

});