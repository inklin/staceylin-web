$(document).ready(function() {
  var selectedLevel;
  var level = 1;
  var gameOver = false;

  $(".start").on("mouseenter", function(){
    var win = false;
    gameOver = false;

    $(".end").on("mouseenter", function(){
      if (!gameOver){
        win = true;
        $(".win").show();
        $(".try-again").show();
      }
      gameOver = true;
    });

    $(".teeth").hover(function(){
      if (win === false){
        $(".fail").show();
        $(".try-again").show();
        gameOver = true;
      }
    });

    $(".game-container").mouseleave(function(){
      if (win === false){
        $(".fail").show();
        $(".try-again").show();
        gameOver = true;
      }
    });

    $(".bar").mouseenter(function(){
      if (win === false){
        $(".fail").show();
        $(".try-again").show();
        gameOver = true;
      }
    });

  });

  $(".try-again").click(function(e){
    e.preventDefault();
    $(".fail").hide();
    $(".win").hide();
    $(".try-again").hide();
    animateTeeth(selectedLevel);
  });

  $(".option").click(function(){
    var name = $(this).attr('id');

    $(".upper").removeClass().addClass("teeth upper");
    $(".lower").removeClass().addClass("teeth lower");

        setTimeout(function(){
          animateTeeth(name);
        } ,50);
  });

  function animateTeeth(levelName) {
    switch (levelName){
      case "easy":
        selectedLevel = "easy";
        $(".upper").removeClass().addClass("easy-upper teeth upper");
        $(".lower").removeClass().addClass("easy-lower teeth lower");
        break;
      case "medium":
        selectedLevel = "medium";
        $(".upper").removeClass().addClass("medium-upper teeth upper");
        $(".lower").removeClass().addClass("medium-lower teeth lower");
        break;
      case "hard":
        selectedLevel = "hard";
        $(".upper").removeClass().addClass("hard-upper teeth upper");
        $(".lower").removeClass().addClass("hard-lower teeth lower");
        break;
    }
  }
});