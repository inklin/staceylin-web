$(document).ready(function() {
  
  var bunnywidth;
  var leanforward = false;

  $("#drink").click(function() {
    $("#result").html("");
    $("#bunny").css({"-webkit-transform": ""});
    $("#bunny").css({"-moz-transform": ""});
    $("#bunny").css({"-o-transform": ""});
    $("#bunny").css({"transform": ""});
    bunnywidth = parseInt($("#bunny").css("width"), 10);
    var newWidth = bunnywidth + 30;
    if (newWidth >= 300){
      $("#bunny").css("width", 500);
      $("#result").css("font-size", "45px");
      $("#result").html("Biggest bunny possible!");
      $("#bunny").css({"-moz-transform": "rotateX(-30deg)", "height": 800});
      $("#bunny").css({"-o-transform": "rotateX(-30deg)", "height": 800});
      $("#bunny").css({"-webkit-transform": "rotateX(-30deg)", "height": 800});
      $("#bunny").css({"transform": "rotateX(-30deg)", "height": 800});
     leanforward = true;
    } else {
      $("#bunny").css("width", newWidth);
    }
  });

  $("#eat").click(function(){
    if (leanforward === true){
      $("#result").html("");
      $("#bunny").css({"-webkit-transform": "rotateX(0deg)", "width": 300, "height" : ""});
      $("#bunny").css({"-moz-transform": "rotateX(0deg)", "width": 300, "height" : ""});
      $("#bunny").css({"-o-transform": "rotateX(0deg)", "width": 300, "height" : ""});
      $("#bunny").css({"transform": "rotateX(0deg)", "width": 300, "height" : ""});
      leanforward = false;
    }
    bunnywidth = parseInt($("#bunny").css("width"), 10);
    newWidth = bunnywidth - 30;
    if (newWidth <= 100){
      $("#bunny").css({"-webkit-transform": "rotateX(20deg)"});
      $("#bunny").css({"-moz-transform": "rotateX(20deg)"});
      $("#bunny").css({"-o-transform": "rotateX(20deg)"});
      $("#bunny").css({"transform": "rotateX(20deg)"});
      $("#result").css("font-size", "10px");
      $("#result").html("Smallest bunny possible!");
    } else {
      $("#bunny").css("width", newWidth);
    }
  });
});
