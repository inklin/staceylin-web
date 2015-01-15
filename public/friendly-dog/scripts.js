$(document).ready(function() {
  
  setTimeout(startRinging, 5000);
  var isRinging = false;
  var phoneInterval;

  function startRinging() {
    $(".phone-container").addClass("phone-ringing");
    isRinging = true;
  }

  $(".phone-container").click(function() {
    if (isRinging === true){
      $(".text-bubble").css({"visibility": "visible"});
      $(".phone-container").removeClass("phone-ringing");
    }
    isRinging = false;
    setTimeout(function(){$(".text-bubble").css({"visibility": "hidden"});}, 2000);
    setTimeout(startRinging, 7000);
  });


});