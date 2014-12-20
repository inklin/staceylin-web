var x = Math.floor(Math.random() * 100);

var turns = 5;

function guessNumber() {
  var guess = document.getElementById("guess");
  guess = parseInt(guess);
  if (guess === x) {
    document.getElementById("result").innerHTML = "You win!"
    turns = 0; 
    document.getElementById("turns").innerHTML = "You have 0 guesses left.";
  } else {
    if (guess < x) {
    document.getElementById("result").innerHTML = "Hint: Too small!";
    }
    if (guess > x) {
    document.getElementById("result").innerHTML = "Hint: Too big!";
    }
    turns = turns - 1;
    document.getElementById("turns").innerHTML = "You have " + turns + " guesses left.";
    }
  
  if (turns === 0 && guess != x){
    document.getElementById("turns").innerHTML = "Game Over. You're out of guesses! The answer is " + x + " !";
    document.getElementById("userguess").style.visibility = "hidden";
  }
}



