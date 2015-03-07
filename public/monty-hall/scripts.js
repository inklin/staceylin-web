$(document).ready(function() {

  var prize,
      selected,
      turn = 1;
  var toOpen;
  var canSelect = false;

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
      $('.choice').html('You chose door number ' + selected.slice(-1) + ' !');
    }
}

function playGame(){
  prize = 'door-' + randomNum();
  $('#' + prize).append('<img src="prize.png" class="prize">');

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

  showTurn();
  setTimeout(function(){
    $('#' + toOpen).find('img.pic').addClass('shown');
    $('.choice').html('Do you want to switch doors?');
    $('.switch').show();
  }, 2000);
}

$('.door').click(function(){
  if (canSelect === true){
    canSelect = false;
    selected = this.id;
    $(this).addClass('selected');
    turn = 2;

    showDoor();
  }

});

$('#yes').click(function(){
  $('#' + selected).removeClass('selected');

  var newDoor = 'door-' + randomNum();
  while (newDoor === toOpen || newDoor == selected){
    newDoor = 'door-' + randomNum();
  }

  $('#' + newDoor).find('img.pic').addClass('shown');

  if (newDoor === prize){
    $('.info').html('You won!');
  } else {
    $('.info').html('Unfortunately you lost. The prize was behind door ' + prize.slice(-1) + ' !');
    setTimeout(function() {
      $('#' + prize).find('img.pic').addClass('shown');
    }, 3000);
  }

});

$('#no').click(function(){
  $('#' + selected).removeClass('selected');
  $('#' + selected).find('img.pic').addClass('shown');

  if (selected === prize){
    $('.info').html('You won!');
  } else {
    $('.info').html('Unfortunately you lost. The prize was behind door ' + prize.slice(-1) + ' !');
    setTimeout(function() {
      $('#' + prize).find('img.pic').addClass('shown');
    }, 2000);
  }
});


playGame();



});