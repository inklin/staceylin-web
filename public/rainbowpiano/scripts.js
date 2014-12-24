$(document).ready(function(){
  
  var rainbowIndex = 0;

  /* Function that gives you a color value related to sine frequences -> cyclical */
  function getColor(i) {
    var frequency = 0.5;
    var red = Math.sin(frequency*i + 0)* 128 + 127;
    var green = Math.sin(frequency*i + 2)* 128 + 127;
    var blue = Math.sin(frequency*i + 4)* 128 + 127;

    return 'rgb('+ Math.round(red) +','+ Math.round(green) +','+ Math.round(blue) +')';
  }

  /* When the mouse goes over a key, change the background color, 
  increment the index value so that you get a different color the next time*/

  $(".key").hover( function(){
    $(this).css("background-color", getColor(rainbowIndex));
    rainbowIndex = rainbowIndex + 1;
    }, function() {
      $(this).css("background-color", "");
    });

  var sound = null;
  $(".key").mouseenter( function(){
    var nsound = Math.ceil(Math.random() *12);
    while (nsound === sound){
      nsound = Math.ceil(Math.random() *12);
    }

    $("#sound-" + nsound)[0].play();
    sound = nsound;
  });

});


