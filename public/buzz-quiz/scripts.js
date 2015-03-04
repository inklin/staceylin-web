$(document).ready(function() {
  
  var description = [];
  description.push('You come from humble beginnings but dream of finding your true self. You may fall in with the wrong crowd but good friends and support from will family keep you grounded. You are an honest and brave individual.');
  description.push('You are a romantic at heart. Family is very important to you and you are fiercely protective of those you care about. You have empathy for others and do not let society dictate who you love.');
  description.push('You have a gentle soul and believe that cleanliness is close to godliness. Some may be jealous of the attention you get, but you are a popular person who has many guy friends.');
  description.push('You were born for greatness. Although you carry big expectations on your shoulders, you know how to let loose and relax every once in a while. You have a small group of friends who are always up for a little singing and dancing. Hakuna matata!');

  var movies = ['Pinocchio', 'Lady & the Tramp', 'Snow White & the Seven Dwarves', 'The Lion King'];
  var movie = null;

  $('.poster').click(function(){
    $('.choice').attr('checked', false);
    var chosen = $(this).parent().find('input[type=checkbox]')[0];
    chosen.checked = true;
    movie = chosen.id;

    highlight(this);
    showResult();
  });


  $('.choice').click(function(){
    $('.choice').attr('checked', false);
    $(this)[0].checked = true;
    movie = $(this)[0].id;

    highlight(this);
    showResult();
  });

  function highlight(item){
    $('.movie').removeClass('chosen');
    $('.movie').addClass('notchosen');
    $(item).parents('div.movie').removeClass('notchosen').addClass('chosen');
  }

  function showResult(){
    var result;
    var title;
    switch (movie){
      case 'pin':
        result = description[0];
        title = movies[0];
        break;
      case 'lady':
        result = description[1];
        title = movies[1];
        break;
      case 'snow':
        result = description[2];
        title = movies[2];
        break;
      case 'lion':
        result = description[3];
        title = movies[3];
        break;
    }
      $('.result').html('<p class="title">You chose <span class="chosen-title">' + title + '</span> as your favourite.</p><img src="imgs/' + movie + '.gif" class="gif" /><p class="description">'+ result + '</p>');

  }

});