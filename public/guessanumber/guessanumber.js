var x = Math.floor((Math.random() * 100) + 1);

var turns = 5;

function guessNumber() {
  if (document.getElementById("guess").value === '') {
    return;
  }
  var guess = parseInt(document.getElementById("guess").value);
  if (guess === x) {
    document.getElementById("result").innerHTML = "You win! " + guess + " is the answer!";
    document.getElementById("userguess").style.display = 'none';
    document.getElementById("playagain").style.display = 'block';
    turns = 0; 
    document.getElementById("turns").innerHTML = "You have 0 guesses left.";
  } else {
    if (guess < x) {
      document.getElementById("result").innerHTML = "Sorry, " + guess + " is too small!";
    }
    if (guess > x) {
      document.getElementById("result").innerHTML = "Sorry, " + guess + " is too big!";
    }
    turns = turns - 1;
    document.getElementById("turns").innerHTML = "You have " + turns + " guesses left.";
    }
  
  if (turns === 0 && guess != x){
    document.getElementById("result").style.display = "none";
    document.getElementById("turns").innerHTML = "Game Over. You're out of guesses! The answer is " + x + ".";
    document.getElementById("userguess").style.display = 'none';
    document.getElementById("playagain").style.display = 'block';
  }
}

function playAgain() {
  turns = 5;
  x = Math.floor((Math.random() * 100) + 1);
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("userguess").style.display = 'block';
  document.getElementById("turns").innerHTML = "You have 5 guesses. Good luck!";
  document.getElementById("playagain").style.display = 'none';
  document.getElementById("guess").value = "";
}


