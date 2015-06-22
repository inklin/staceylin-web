$(document).ready(function() {

  // canPlayType returns blank if not supported
  // to convert to Boolean value of False for no support
  var isSupported = !!document.createElement('audio').canPlayType;
  
  // Format time
  var formatTime = function(min, sec){
    if (sec < 10){
      sec = '0' + sec;
    }
    return min + ':' + sec;
  };

  if (isSupported){
    var index = 0;
    var playing = false;
    var mediaPath = 'song-files/';
    var songs = [
      {'number': 0, 'title': 'Somebody ft. Jeremih', 'artist': 'Natalie La Rose', 'image': 'Somebody.png', 'file': 'Somebody'},
      {'number': 1, 'title': 'Shut Up and Dance', 'artist': 'Walk the Moon', 'image': 'WalkTheMoon.png', 'file': 'ShutUpAndDance'},
      {'number': 2, 'title': 'Bad Blood', 'artist': 'Taylor Swift', 'image': 'BadBlood.png', 'file': 'BadBlood'},
      {'number': 3, 'title': 'See you again', 'artist': 'Wiz Khalifa ft. Charlie Push', 'image': 'SeeYouAgain.png', 'file': 'SeeYouAgain'},
      {'number': 4, 'title': 'Where Are U', 'artist': 'Skrillex and Diplo ft. Justin Bieber', 'image': 'WhereAreYou.png', 'file': 'WhereAreYou'}
    ];

    var createPlaylist = function(){
      for (var i = 0; i < songs.length; i++){
        var song = songs[i];
        var songInfo = '<div class="listItem song' + song.number + '"><span class="songNum">' + song.number + '</span><img src="' + song.image + '" class="plImage"><span class="plTitle">' + song.title + '</span><span class="plArtist">' + song.artist + '</span></div>';
        $('#playlist').append(songInfo);
      }
    };

    var extension = '.mp3';
    var loop = false;
    var songCount = songs.length;

    var audio = $('#audio-player').bind('play', function(){
      // event listener for media event play
      playing = true;
      // Play icon
      $('.fa-play').removeClass('fa-play').addClass('fa-pause');

    }).bind('pause', function(){
      // event listener for media event pause
      playing = false;
      $('.fa-pause').removeClass('fa-pause').addClass('fa-play');

    }).bind('ended', function(){
      // event listener for media event ended
      // check to see if the finished audio is the last song
      if ((index + 1) < songCount){
        index ++;
        loadSong(index);
        audio.play();
      } else {
        audio.pause();
        index = 0;
        loadSong(index);

        if (loop){
          audio.play();
        }
      }
    }).bind('timeupdate', function(){
      var remaining = parseInt(audio.duration - audio.currentTime, 10);
      var remainingMin = Math.floor(remaining/60);
      var remainingSec = remaining - (remainingMin * 60);
      var currentMin = Math.floor(audio.currentTime/60);
      var currentSec = Math.floor(audio.currentTime - (currentMin * 60));

      currentTime = formatTime(currentMin, currentSec);
      remainingTime = formatTime(remainingMin, remainingSec);

      $('#currentTime').text(currentTime);
      $('#remainingTime').text('-' + remainingTime);

      $('#timeline').slider({
        value: audio.currentTime,
        step: 0.01,
        range: 'min',
        max: audio.duration,
        animate: true,
        slide: function(event, ui){
          manualSeek = true;
        },
        stop: function(event, ui){
          manualSeek = false;
          audio.currentTime = ui.value;
        }
      });
    }).get(0);

    var loadSong = function(id){
      $('#songTitle').text(songs[id].title);
      $('#songArtist').text(songs[id].artist);

      $('.listItem').removeClass('highlighted');
      $('.song' + index).addClass('highlighted');
      audio.src = mediaPath + songs[id].file + extension;
      audio.load();
    };

    var playSong = function(id){
      loadSong(id);
      audio.play();
    };

    // Previous Song
    $('#prev-btn').click(function(){
      // check to see if there is a previous song in the list
      if ((index - 1) > -1) {
        // play previous song
        index --;
        loadSong(index);
        if (playing){
          audio.play();
        }
      } else {
        audio.pause();
        index = songCount - 1;
        loadSong(index);
        if (playing){
          audio.play();
        }
      }
    });

    // Next Song
    $('#next-btn').click(function(){
      if ((index + 1) < songCount){
        // if there is a next song, play next song
        index ++;
        loadSong(index);
        if (playing){
          audio.play();
        }
      } else {
        // if there is no next song
        audio.pause();
        index = 0;
        loadSong(index);

        if (playing){
          audio.play();
        }
      }
    });

    // Play button 
    $('#play-btn').click(function(){
      if (!playing){
        audio.play();
      } else {
        audio.pause();
      }
    });

    // Initiate slider Slider 
    $('#timeline').slider({
    });

    // Loop Button Control
    $('#loop-btn').click(function(){
      if (loop){
        loop = false;
        $('.repeat-btn').removeClass('on');
      } else {
        loop = true;
        $('.repeat-btn').addClass('on');
      }
    });

    // Change song when title is clicked on
    $(document).on('click', '.listItem', function(){
      var songIndex = $(this).children('.songNum').text();
      index = parseInt(songIndex, 10);
      playSong(index);
    });

    createPlaylist();

    // Load the first song to start
    loadSong(index);
  }

});