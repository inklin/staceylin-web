$(document).ready(function() {
  
  var currentPlayer = "X";
  

  // Set the box to the current player's symbol
  // check for a win (for tie)
  // Change the current player

  $(".box").click(function(){
    var value = $(this).find("span").text();
    if (value === ""){
      $(this).find("span").text(currentPlayer);
    } else {
      return;
    }

    if (currentPlayer === "X"){
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  });

});