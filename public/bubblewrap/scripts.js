$(document).ready(function() {
  var n = 0;

  $(".bubble").click(function(){
    $(this).removeClass("bubble");
    $(this).children(".shine").removeClass("shine");
    $(this).children(".gloss").removeClass("gloss");
    $(this).addClass("popped");

    var flatness = $(this).hasClass("flat");
    if (!flatness){
      $("#pop" + (n % 3))[0].play();
      n = n + 1;
    }

    $(this).addClass("flat");

  });

});