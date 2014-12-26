$(document).ready(function() {

  $("body").bind('touchstart', function(e) {
    var xPosition = e.pageX || e.originalEvent.touches[0].pageX;
    var yPosition = e.pageX || e.originalEvent.touches[0].pageY;

    handleClick(xPosition, yPosition);
    e.preventDefault();

  });

  var santaX = parseInt($("#santa").css("left"), 10);
  var santaY = parseInt($("#santa").css("top"), 10);
  var cookies = 0;
  var cookienumber = 0;

  $("body").click(function(e){

    /* Get the x and y positions of where the cookie was placed */
    var xPosition = e.pageX;
    var yPosition = e.pageY;
    handleClick(xPosition, yPosition);

  });

    function handleClick(xPosition, yPosition){
    $("#content").append("<img src=\"cookie.png\" class=\"cookie\" id=\"cookie" + cookienumber + "\" />");
    $("#cookie" + cookienumber).css({top: yPosition - 50, left: xPosition - 50});

    moveSanta(xPosition, yPosition, cookienumber);
    cookienumber = cookienumber + 1;
    }

    /* Function to move Santa to where the cookie is */
    /* Remove the cookie after Santa gets there */

    function moveSanta (x, y, number){
      var xMove = x - santaX - 3;
      var yMove = y - santaY - 3;

      $("#santa").animate({top: "+=" + yMove, left: "+=" + xMove}, "slow", function(){
        $("#cookie" + number).remove();
        cookies = cookies + 1;
        if (cookies === 1){
          $("#eaten").html("Santa has eaten " + cookies + " cookie!");
        } else {
          $("#eaten").html("Santa has eaten " + cookies + " cookies!");
        }
      });
      santaX = x;
      santaY = y;
    }



});