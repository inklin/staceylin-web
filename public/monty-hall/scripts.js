$(document).ready(function() {
  
// Show three doors
// Randomly assign one door as the prize
// Prompt user to pick a door 
// Get the door that the user selected
// Show a door that is not a winner
// Ask user if they want to switch their choice
// User makes choice
// Reveal user door and tell them if they won
  var prize,
      selected,
      turn = 1;
  var toOpen;
  var canSelect = false;

// generates a random number from 1 - 3
function randomNum(){
  var number = Math.floor(Math.random() * 3 + 1);
  if (number === 0){
    randomNum();
  }
  return number;
}

function showTurn(){
    if (turn === 1){
      $('.choice').html('Pick a door!');
    }
    if (turn === 2){
      $('.choice').html('You chose door number' + selected.slice(-1) + ' ! Do you want to switch doors?');
    }
}

function playGame(){
  prize = 'door-' + randomNum();
  console.log('prize is ' + prize);

  showTurn();
  canSelect = true;
}

function showDoor(){
  if (selected === prize){
    toOpen = 'door-' + randomNum();
    while (toOpen === selected){
      toOpen = 'door-' + randomNum();
    }
  }

  if (selected != prize){
    toOpen = 'door-' + randomNum();
    while (toOpen === prize || toOpen === selected){
      toOpen = 'door-' + randomNum();
    }
  }
  console.log('door to open is ' + toOpen);
  $('#' + toOpen).addClass('shown');

  showTurn();
}

$('.door').click(function(){
  if (canSelect === true){
    canSelect = false;
    selected = this.id;
    console.log('user selected' + selected);
    turn = 2;

    showDoor();
  }

});

$('#yes').click(function(){
  var newDoor = 'door-' + randomNum();
  while (newDoor === toOpen || newDoor == selected){
    newDoor = 'door-' + randomNum();
  }

  $('#' + newDoor).addClass('shown');

});

$('#no').click(function(){
  $('#' + selected).addClass('shown');
});

playGame();



});