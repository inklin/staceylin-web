$(document).ready(function() {

  var santaX = parseInt($("#santa").css("left"), 10);
  var santaY = parseInt($("#santa").css("top"), 10);
  var cookies = 0;
  var cookienumber = 0;

  $("body").click(function(e){

    $("#content").append("<img src=\"cookie.png\" class=\"cookie\" id=\"cookie" + cookienumber + "\" />");
    $("#cookie" + cookienumber).css({top: e.pageY - 50, left: e.pageX - 50});

    /* Get the x and y positions of where the cookie was placed */
    var xPosition = e.pageX;
    var yPosition = e.pageY;

    moveSanta(xPosition, yPosition, cookienumber);
    cookienumber = cookienumber + 1;

  });

    /* Function to move Santa to where the cookie is */
    /* Remove the cookie after Santa gets there */

    function moveSanta (x, y, number){
      var xMove = x - santaX - 10;
      var yMove = y - santaY - 10;

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