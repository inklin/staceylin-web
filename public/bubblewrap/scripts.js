$(document).ready(function() {

  $(".bubble").click(function(){
    $(this).removeClass("bubble");
    $(this).children(".shine").removeClass("shine");
    $(this).children(".gloss").removeClass("gloss");
    $(this).addClass("popped");

    var flatness = $(this).hasClass("flat");
    if (!flatness){
      $("#pop")[0].play();
    }

    $(this).addClass("flat");

  });

});