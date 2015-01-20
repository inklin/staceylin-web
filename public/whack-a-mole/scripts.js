$(document).ready(function() {

  $("#start-button").click(function(){
    $(".start-game").hide();
  });

  function animateMole(timeShown, frequency){
    setInterval(function(){
      var number = Math.floor(Math.random() * 8 + 1);
      popMole(number, timeShown);
    }, frequency);
  }

  function popMole(number, timeShown){
    $("#mole-" + number).addClass("up");
    setTimeout(function(){
      $("#mole-" + number).removeClass("up");
    }, timeShown);
  }

  animateMole(1000, 1500);

});