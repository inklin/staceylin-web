$(document).ready(function(){
  
  var rainbowIndex = 0 

  /* Function that gives you a color value related to sine frequences -> cyclical */ 
  function getColor(i) {
    var frequency = 0.5
    var red = Math.sin(frequency*i + 0)* 103 + 152;
    var green = Math.sin(frequency*i + 2)* 103 + 152;
    var blue = Math.sin(frequency*i + 4)* 103 + 152;

    /* Function that converts byte to hex values */
    var hexChar = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9", "A", "B", "C", "D", "E", "F"];
    
    function byteToHex(value) {
      return hexChar[(value >> 4) & 0x0f] + hexChar[value & 0x0f];
    }

    /* return a color value for html */ 
    return "#" + byteToHex(red) + byteToHex(green) + byteToHex(blue);
  };

  /* When the mouse goes over a key, change the background color, 
  increment the index value so that you get a different color the next time*/ 

  $(".key").hover(function(){
    $(this).css("background-color", getColor(rainbowIndex));
    rainbowIndex = rainbowIndex + 1;
  });


});


