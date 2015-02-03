$(document).ready(function() {
  
  var mouseX = 0;
  var mouseY = 0;

  /* Get coordinates of the mouse when it moves */
  $(document).on('mousemove', function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  /* Get coordinates for mobile users */
  document.addEventListener('touchmove', function(e){
    e.preventDefault();
    mouseX = e.pageX;
    mouseY = e.pageY;
  }, false);

  var follower = $(".follower");
  moveDiv(follower, 10);

  function moveDiv(element, speed){
    var xPosition = 0;
    var yPosition = 0;
    var loop = setInterval(function(){
      xPosition += (mouseX - xPosition) / speed;
      yPosition += (mouseY - yPosition) / speed;
    $(element).css({left: xPosition, top: yPosition});
  }, 30);
  }

});