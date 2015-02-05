$(document).ready(function() {

  $("#red, #green, #blue").slider({
    max: 255,
    orientation: 'horizontal',
    value: 40,
  });

  /* set the initial value of the green slider */
  $("#green").slider({
    value: 135,
  });

  /* set the initial value of the blue slider */
  $("#blue").slider({
    value: 80,
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
        hex[index] = "0" + value;
      }
    });

    /* return the strings joined together with no separator */
    /* make all the letters uppercase */
    return hex.join('').toUpperCase();
  }


});