$(document).ready(function() {

  var width = $(window).width();
  var sushiCount = 0;
  var sushiQueue = [];

  $(".item").click(function(){
    if (sushiCount < 5){
      $("#tip").html("Sushi is coming!");
      var ordered = this.id;
      sushiQueue.push(ordered);
      sushiCount = sushiCount + 1;
    } else {
      $("#tip").html("Maximum number of sushi ordered! Click to eat.");
    }
  });

  function addSushi(item){
    var sushi = $("<img src='" + item + ".png' class='food " + item + "' />");
    sushi.click(function(){
      $(this).remove();
      sushiCount = sushiCount - 1;
      $("#tip").html("Yumm! Order more sushi?");
    });
    $(".sushicontainer").append(sushi);
    sushi.animate({"left":"0px"}, 33500, "linear");
  }

  function checkSushiQueue() {
    if (sushiQueue.length){
      var food = sushiQueue[0];
      addSushi(food);
      sushiQueue.splice(0, 1);
    }
  }

setInterval(checkSushiQueue, 3000);

});