$(document).ready(function() {

  // canPlayType returns blank if not supported
  // to convert to Boolean value of False for no support
  var isSupported = !!document.createElement('audio').canPlayType;

  if (isSupported){
    var index = 0;
    var playing = false;
    var mediaPath = 'song-files/';
    var songs = [
      {'number': 1, 'title': 'Song Number One', 'file': 'Song_1'},
      {'number': 2, 'title': 'Song Number Two', 'file': 'Song_2'},
      {'number': 3, 'title': 'Song Number Three', 'file': 'Song_3'}
    ];

    var createPlaylist = function(){
      for (var i = 0; i < songs.length; i++){
        var song = songs[i];
        var songInfo = '<li class="listItem"><span class="songNum">' + song.number + '</span><span>' + song.title + '</span><span>';
        $('#playlist').append(songInfo);
      }
    };

    var extension = '.mp3';
    var loop = true;
    var songCount = songs.length;

    var audio = $('#audio-player').bind('play', function(){
      // event listener for media event play
      playing = true;
      console.log(audio.duration);
    }).bind('pause', function(){
      // event listener for media event pause
      playing = false;
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
    }).get(0);

    var loadSong = function(id){
      var songTitle = songs[id].title;
      $('#songInfo').text(songTitle);

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
      } else if (loop) {
        // if there is no previous song but loop is on, play last song in list
        index = songCount - 1;
        loadSong(index);
        if (playing){
          audio.play();
        }
      } else {
        // if loop is not on, reset player
        audio.pause();
        index = 0;
        loadSong(index);
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
      } else if (loop) {
        // if there is no next song but loop is on, play the very first song
        index = 0;
        loadSong(index);
        if (playing){
          audio.play();
        }
      } else {
        // if there is no next song and no loop, just reset player
        audio.pause();
        index = 0;
        loadSong(index);
      }
    });

    // Play button 
    $('#play-btn').click(function(){
      if (!playing){
        audio.play();

        // Play icon
        $('.fa-play').removeClass('fa-play').addClass('fa-pause');
      } else {
        audio.pause();
        $('.fa-pause').removeClass('fa-pause').addClass('fa-play');
      }
    });


    // Loop Button Control
    $('#loop-btn').click(function(){
      if (loop){
        loop = false;
        console.log("loop off");
      } else {
        loop = true;
        console.log("loop on");
      }
    });

    // Change song when title is clicked on
    $(document).on('click', '.listItem', function(){
      var songNum = $(this).children('.songNum').text();
      var songIndex = songNum - 1;
      playSong(songIndex);
    });

    createPlaylist();
    
    // Load the first song to start
    loadSong(index);
  }

});