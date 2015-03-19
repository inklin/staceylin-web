$(document).ready(function() {
  
  
  var currentPlayer = "X";
  var moves = 0;
  var gameOver = false;
  
  $(".result").hide();

  $("#replay").click(function(){
    playAgain();
  });

  $(".box").click(function(){
    if (gameOver === true){
      return;
    }

    var value = $(this).find("span").text();
    if (value === ""){
      $(this).find("span").text(currentPlayer);
      moves = moves + 1;
    } else {
      return;
    }

    checkWin(currentPlayer);

    if (currentPlayer === "X"){
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  });

  function checkWin(player) {

   var board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    var i, j;

    // 
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        var playerText = $("#box-" + i + "-" + j).find("span").text();
        if (playerText.length) {
          board[i][j] = playerText;
        }
      }
    }

    if (
      // Check the rows
      (currentPlayer === board[0][0] && currentPlayer === board[0][1] && currentPlayer === board[0][2]) ||
      (currentPlayer === board[1][0] && currentPlayer === board[1][1] && currentPlayer === board[1][2]) ||
      (currentPlayer === board[2][0] && currentPlayer === board[2][1] && currentPlayer === board[2][2]) ||
      // Check the columns 
      (currentPlayer === board[0][0] && currentPlayer === board[1][0] && currentPlayer === board[2][0]) ||
      (currentPlayer === board[0][1] && currentPlayer === board[1][1] && currentPlayer === board[2][1]) ||
      (currentPlayer === board[0][2] && currentPlayer === board[1][2] && currentPlayer === board[2][2]) ||
      // Check the diagonals
      (currentPlayer === board[0][0] && currentPlayer === board[1][1] && currentPlayer === board[2][2]) ||
      (currentPlayer === board[2][0] && currentPlayer === board[1][1] && currentPlayer === board[0][2])
      )
    {
      $(".result").show();
      $(".winner").html(currentPlayer + " is the winner!");// show winner! no more games;
      gameOver = true;
    }

  }

  function playAgain(){
    $(".box").find("span").text("");
    $(".result").hide();
    gameOver = false;
  }
  

});