$(document).ready(function() {

  $('#red, #green, #blue').slider({
    max: 255,
    min: 0,
    range: 'min',
    orientation: 'horizontal',
    value: 40,
    stop: showColor,
  });

  /* set the initial value of the green slider */
  $('#green').slider({
    value: 135,
  });

  /* set the initial value of the blue slider */
  $('#blue').slider({
    value: 95,
  });

  function rgbtoHex(r, g, b){
    /* convert the three numbers to hexadecimal values */
    var hex = [
    r.toString(16),
    g.toString(16),
    b.toString(16)
    ];

    /* Go through the array */
    $.each(hex, function(index, value){
      /* if the string has a length of 1, add a padding zero */
      if (value.length === 1){
        hex[index] = '0' + value;
      }
    });

    /* return the strings joined together with no separator */
    /* make all the letters uppercase */
    return hex.join('').toUpperCase();
  }

  function showColor(){
    /* get the values from the 3 color sliders */
    var red = $('#red').slider('values', 0);
    var green = $('#green').slider('values', 0);
    var blue = $('#blue').slider('values', 0);

    /* change the background color of the swatch */
    var color = '#' + rgbtoHex(red, green, blue);
    $('.swatch').css('background-color', color);

    /* Show the rgb values separately */
    $('.redValue').html(red);
    $('.greenValue').html(green);
    $('.blueValue').html(blue);

    /* Change the hex number displayed */
    $('.hexValue').val(color);
  }

  showColor();

});