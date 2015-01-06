$(document).ready(function() {

  var memory = "";
  var display = "";
  var clearDisplay = true;
  var lastoperator;

  $(".number").click(function(){
    if (clearDisplay === true){
      display = "";
      display = display + $(this).html();
      clearDisplay = false;
    } else {
    display = display + $(this).html();
    }
    showDisplay(display);
  });

  $(".operator").click(function(){
    var operator = $(this).html();
    var result;
    if (memory && lastoperator){
      memory = parseInt(memory, 10);
      display = parseInt(display, 10);
      switch(lastoperator){
        case "/":
          result = memory / display;
          break;
        case "*":
          result = memory * display;
          break;
        case "+":
          result = memory + display;
          break;
        case "-":
          result = memory - display;
          break;
        }
      showDisplay(result);
      memory = result;
    }

    switch (operator){
      case "C":
        memory = "";
        display = "";
        showDisplay(display);
        break;
      case "+/-":
        display = - parseInt(display, 10);
        showDisplay(display);
        break;
      case "/":
        lastoperator = "/";
        break;
      case "*":
        lastoperator = "*";
        break;
      case "+":
        lastoperator = "+";
        break;
      case "-":
        lastoperator = "-";
        break;
    }
    if (!result) {
       memory = display;
     }
       clearDisplay = true;

  });

  function showDisplay(displaynumber){
    console.log(displaynumber);
    $("#display").html(displaynumber);
  }
});