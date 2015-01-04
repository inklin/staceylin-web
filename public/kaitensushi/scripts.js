$(document).ready(function() {

  var width = $(window).width();
  var sushiCount = 0;
  var sushiQueue = [];

  $(".item").click(function(){
    if (sushiCount < 5){
      var ordered = this.id;
      sushiQueue.push(ordered);
      sushiCount = sushiCount + 1;
    } else {
      $("#tip").html("Maximum number of sushi ordered!");
    }
  });

  function addSushi(item){
    var sushi = $("<img src='" + item + ".png' class='food " + item + "' />");
    sushi.click(function(){
      $(this).remove();
      sushiCount = sushiCount - 1;
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