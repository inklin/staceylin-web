$(document).ready(function() {

  var level = 1;
  var gameOver = false;

  $(".start").on("mouseenter", function(){
    var win = false;
    gameOver = false;

    $(".end").on("mouseenter", function(){
      if (!gameOver){
        win = true;
        $(".win").show();
      }
      gameOver = true;
    });

    $(".teeth").hover(function(){
      if (win === false){
        $(".fail").show();
        gameOver = true;
      }
    });

    $(".game-container").mouseleave(function(){
      if (win === false){
        $(".fail").show();
        gameOver = true;
      }
    });

    $(".bar").mouseenter(function(){
      if (win === false){
        $(".fail").show();
        gameOver = true;
      }
    });

  });

  $("#try-again").click(function(e){
    e.preventDefault();
    location.reload();
  });

  $(".option").click(function(){
    var name = $(this).attr('id');

    switch (name){
      case "easy":

        $(".upper").removeClass().addClass("easy-upper teeth upper");
        $(".lower").removeClass().addClass("easy-lower teeth lower");
        break;
      case "medium":
        $(".upper").removeClass().addClass("medium-upper teeth upper");
        $(".lower").removeClass().addClass("medium-lower teeth lower");
        break;
      case "hard":
        $(".upper").removeClass().addClass("hard-upper teeth upper");
        $(".lower").removeClass().addClass("hard-lower teeth lower");
        break;
    }
  });

});