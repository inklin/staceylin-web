$(document).ready(function() {
  
  var price;
  var frequency;

  $("#calculate").click(function(){
    getImpact();
  });

  function getImpact(){
    
    var yearlyCost = yearlyImpact();
    calcYears(yearlyCost);

  }

  function yearlyImpact(){
    var frequency = $("input[name='frequency']:checked").val();
    var price = $("#cost").val();

    var totalCups;
    var yearlyCost;

    switch (frequency) {
      case "daily":
        totalCups = 365;
        break;
      case "weekly":
        totalCups = Math.floor(365/7);
        break;
      case "monthly":
        totalCups = 12;
        break;
      case "yearly":
        totalCups = 1;
        break;
    }

    yearlyCost = (totalCups * price).toFixed(2);
    return yearlyCost;
  }

  function calcYears(costPerYear){
    for (var i = 1; i <= 5; i++){
      $(".result").append(i + " year cost: $" + (costPerYear * i).toFixed(2) + "<br>");
    }

  }

});