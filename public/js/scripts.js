$(document).ready(function(){
  var workItems = [
    { name: 'dog',
      image: 'img/dog.png',
      description: "I drew the Softbank mascot using CSS.",
      layout: 'portrait',
      link: 'friendlydog'
    },
    {
      name: 'inbox zero',
      image: 'img/inboxzero.png',
      description: "I replicated Google Inbox's animation with CSS.",
      layout: 'landscape',
      link: 'inbox-zero'
    },
    {
      name: 'music player',
      image: 'img/musicplayer.png',
      description: "I created a looping music player using HTML5 audio, jQuery, and CSS.",
      layout: 'portrait',
      link: 'music-player'
    },
    {
      name: 'cherry blossom',
      image: 'img/cherryblossom.png',
      description: "I drew trees using HTML5 canvas with recursive functions in JavaScript.",
      layout: 'landscape',
      link: 'cherry-blossoms'
    },
    {
      name: 'weather',
      image: 'img/weather.png',
      description: "I used geolocation and a weather api to display the current weather.",
      layout: 'landscape',
      link: 'current-weather'
    },
    {
      name: 'spiral',
      image: 'img/spiral.png',
      description: "I drew Archimedean spirals with HTML5 canvas.",
      layout: 'portrait',
      link: 'spiral'
    },
    {
      name: 'elephants',
      image: 'img/elephants.png',
      description: "I used AngularJS to create this simple quiz app.",
      layout: 'landscape',
      link: 'how-many-elephants'
    },
    {
      name: 'pool clock',
      image: 'img/poolclock.png',
      description: "I used HTML5 canvas to create this pool clock.",
      layout: 'portrait',
      link: 'pool-clock'
    },
    {
      name: 'neon lights',
      image: 'img/neonlights.png',
      description: "I used CSS3 animations to create flickering neon lights.",
      layout: 'landscape',
      link: 'neon-lights'
    },
    {
      name: 'triangle',
      image: 'img/triangle.png',
      description: "I used a recursive JavaScript function to create a Sierpinski triangle.",
      layout: 'landscape',
      link: 'sierpinski-triangle'
    },
    {
      name: 'digital clock',
      image: 'img/clock.png',
      description: "One of my very first pages, a digital clock with JavaScript.",
      layout: 'landscape',
      link: 'digital-clock'
    },
    {
      name: 'fireflies',
      image: 'img/fireflies.png',
      description: "Glowing fireflies created with CSS animations.",
      layout: 'landscape',
      link: 'fireflies'
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
      columnWidth: 200
  });

});