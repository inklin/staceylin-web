$(document).ready(function(){
  var workItems = [
    {
      name: 'cherry blossom',
      image: 'img/cherryblossom.png',
      description: "I drew trees using HTML5 canvas with recursive functions in JavaScript.",
      layout: 'portrait',
      link: 'cherry-blossoms'
    },
    {
      name: 'weather',
      image: 'img/weather.png',
      description: "I used geolocation and a weather api to display the current weather.",
      layout: 'square',
      link: 'current-weather'
    },
    { name: 'dog',
      image: 'img/friendlydog.png',
      description: "I drew the Softbank mascot using CSS.",
      layout: 'portrait',
      link: 'friendlydog'
    },
    { name: 'Draw a Face',
      image: 'img/drawaface.png',
      description: "I drew Rocket and Groot with html2canvas.js",
      layout: 'square',
      link: 'drawaface'
    },
    {
      name: 'bing bong',
      image: 'img/bingbong.png',
      description: "I created a looping music player using HTML5 audio, jQuery, and CSS.",
      layout: 'landscape',
      link: 'bing-bong'
    },
    {
      name: 'inbox zero',
      image: 'img/inboxzero.png',
      description: "I replicated Google Inbox's animation with CSS.",
      layout: 'landscape',
      link: 'inbox-zero'
    },
    {
      name: 'pool clock',
      image: 'img/poolclock.png',
      description: "I used HTML5 canvas to create this pool clock.",
      layout: 'square',
      link: 'pool-clock'
    },
    {
      name: 'tic tac toe',
      image: 'img/tictactoe.png',
      description: "A simple tic tac toe game with JavaScript.",
      layout: 'square',
      link: 'tictactoe'
    },
    {
      name: 'triangle',
      image: 'img/triangle.png',
      description: "I used a recursive JavaScript function and HTML5 canvas to create a Sierpinski triangle.",
      layout: 'landscape',
      link: 'sierpinski-triangle'
    },
    {
      name: 'spiral',
      image: 'img/spiral.png',
      description: "I drew Archimedean spirals with HTML5 canvas.",
      layout: 'square',
      link: 'spiral'
    },
    {
      name: 'simon',
      image: 'img/simon.png',
      description: "I recreated the game Simon with CSS and JavaScript.",
      layout: 'landscape',
      link: 'simon'
    },
    {
      name: 'music player',
      image: 'img/music-player.png',
      description: "I created a looping music player using HTML5 audio, jQuery, and CSS.",
      layout: 'portrait',
      link: 'music-player'
    },
    {
      name: 'digital clock',
      image: 'img/clock.png',
      description: "One of my very first pages, a digital clock with JavaScript.",
      layout: 'square',
      link: 'digital-clock'
    },
    {
      name: 'neon lights',
      image: 'img/neonlights.png',
      description: "I used CSS3 animations to create flickering neon lights.",
      layout: 'landscape',
      link: 'neon-lights'
    },
    {
      name: 'pong',
      image: 'img/pong.png',
      description: "I used HTML5 canvas and JavaScript to create the classic game Pong.",
      layout: 'landscape',
      link: 'pool-clock'
    },
    { name: 'Rainbow Piano',
      image: 'img/piano.png',
      description: "A rainbow piano using Math sine and JavaScript.",
      layout: 'landscape',
      link: 'rainbowpiano'
    },
    { name: 'Buzz Quiz',
      image: 'img/buzzquiz.png',
      description: "A simple personality quiz based on Buzzfeed quizzes.",
      layout: 'portrait',
      link: 'buzzquiz'
    },
    {
      name: 'elephants',
      image: 'img/elephants.png',
      description: "I used AngularJS to create this simple quiz app.",
      layout: 'square',
      link: 'how-many-elephants'
    },
    {
      name: 'love calculator',
      image: 'img/lovecalculator.png',
      description: "Nostalgic love calculator based on letters in names!",
      layout: 'landscape',
      link: 'love-calculator'
    }
  ];

  for (var i = 0; i < workItems.length; i++){
    var item = workItems[i];
    var portfolioItem = "<div class='work-item " + item.layout + "' ><a href='" + item.link + "' target='new'><img src='" + item.image + "' class='background'></a></div>";
    $('.portfolio').append(portfolioItem);
  }

  var grid = $('.portfolio').masonry({
      // options
      itemSelector: '.work-item',
      columnWidth: 250,
      isFitWidth: true,
      gutter: 20
  });

});