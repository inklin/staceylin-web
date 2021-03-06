$(document).ready(function() {

  var first;
  var second;
  var loveLetters = 0;
  var love = 0;

  $('.calculate').mousedown(function(){
    $(this).addClass('pressed');
  });

  $('.calculate').mouseup(function(){
    $(this).removeClass('pressed');
  });

  function calculateLove(){
    first = $("#field1").val().toLowerCase();
    second = $("#field2").val().toLowerCase();

    if (first.length === 0  || second.length === 0){
      alert("Oops, looks like you're missing a name!");
    } else {
      var total = (first.length + second.length);
      countLetters(first);
      countLetters(second);
      love = Math.floor((loveLetters / total ) * 100);
      $(".heart").show();
      $(".result").html(love + '%');
    }
  }

  function countLetters(name){
    var letter;
    for (var i = 0; i < name.length; i ++ ){
      letter = name.substring(i, i + 1);
      switch(letter){
        case 'l':
          loveLetters += 1;
          break;
        case 'o':
          loveLetters += 1;
          break;
        case 'v':
          loveLetters += 1;
          break;
        case 'e':
          loveLetters += 1;
          break;
        case 'd':
          loveLetters += 1;
          break;
        case 'a':
          loveLetters += 1;
          break;
        case 'y':
          loveLetters += 1;
          break;
      }
    }
  }

$('.calculate').click(function(){
  calculateLove();
  love = 0;
  loveLetters = 0;
});

});