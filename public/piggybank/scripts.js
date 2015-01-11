$(document).ready(function() {
  var depositedCoins = 0;
  var totalAmount = 0;
  var coinType;

  $(".money").draggable({
    helper: "clone"
  });

  $(".bank").droppable({
    drop: function(event, ui){
      playSound();
      coinType = ui.draggable.attr("id");
      calculateAmount(coinType);
      $(".savings").html(totalAmount.toFixed(2));
    }

  });

  function playSound(){
    if (depositedCoins < 6){
      $(".sound").html("<audio autoplay><source src='coin.wav' type='audio/wav'></audio>");
    } else {
      $(".sound").html("<audio autoplay><source src='coins.wav' type='audio/wav'></audio>");
    }
    depositedCoins = depositedCoins + 1;
  }

  function calculateAmount(coinName){
    switch(coinName){
      case "toonie":
        totalAmount += 2;
        break;
      case "loonie":
        totalAmount += 1;
        break;
      case "quarter":
        totalAmount += 0.25;
        break;
      case "dime":
        totalAmount += 0.10;
        break;
      case "nickel":
        totalAmount += 0.05;
        break;
      case "penny":
        totalAmount += 0.01;
        break;
    }
  }

});