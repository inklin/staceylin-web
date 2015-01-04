$(document).ready(function() {

  var sushiQueue = [];

  $(".item").click(function(){
    var ordered = this.id;
    sushiQueue.push(ordered);
  });

  function addSushi(item){
    var sushi = $("<img src='" + item + ".png' class='food' />");
    $(".sushicontainer").append(sushi);
    sushi.animate({"left":"0px"}, 33500, "linear");
  }

  function checkSushiQueue() {
    if (sushiQueue.length){
      console.log('dequeed');
      var food = sushiQueue[0];
      addSushi(food);
      sushiQueue.splice(0, 1);
    }
  }

setInterval(checkSushiQueue, 6000);

});