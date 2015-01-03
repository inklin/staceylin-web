$(document).ready(function() {

var flycount = 0;
var top;
var left;

/* Make a fly appear randomly in the sandwich container */
function getLocation(){
  top = Math.random();
  left = Math.random();
}

/* Make the fly land on the sandwich - center of the div */
function placeFly(){
  $("#fly").delay(600).animate({top: "100px", left: "500px"}, 1000);
}

/* Make the fly disappear when you click on it */
$("#fly" + flyid).click(function(){
  $("#fly" + flyid).hide();
});

/* If more than 5 flies are on the page at one time, sandwich disappears */ 

/* If 5 flies have been killed, user goes to next level */

/* Increase speed that flies appear */

});
