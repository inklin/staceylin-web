$(document).ready(function() {
  
  var price;
  var frequency;

  $("#calculate").click(function(){
    getImpact();
  });

  function getImpact(){
    var price = $("#cost").val();

    if (price === ""){
      $("#cost").addClass("missing-input");
      return;
    } else {
      $("#cost").removeClass("missing-input");
    }

    $(".coffee-header").addClass("coffee-drain");
    $("#calculate").val("Calculating");
    
    setTimeout(function(){
      $("#calculate").val("Calculate");
      $(".coffee-header").removeClass("coffee-drain");
      var yearlyCost = yearlyImpact();
      calcYears(yearlyCost);
    }, 3100);

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
    $(".result").show();
    $(".result").html("");

    for (var i = 1; i <= 5; i++){
      $(".result").append("<p class='yearly-costs'>" + i + " year <span class='impact-cost'> $" + (costPerYear * i).toFixed(2) + "</span></p>");
    }

  }

});