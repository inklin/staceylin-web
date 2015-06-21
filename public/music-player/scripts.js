$(document).ready(function() {

  // canPlayType returns blank if not supported
  // to convert to Boolean value of False for no support
  var isSupported = !!document.createElement('audio').canPlayType;

  if (isSupported){
    var index = 0;
    var playing = false;
    var mediaPath = 'song-files/';
    var tracks = [
      {'number': 1, 'title': 'Song Number One', 'file': 'Song_1'},
      {'number': 2, 'title': 'Song Number Two', 'file': 'Song_2'},
      {'number': 3, 'title': 'Song Number Three', 'file': 'Song_3'}
    ];
    var extension = '.mp3';
    var loop = true;

    var trackCount = tracks.length;

    var audio = $('#audio-player').bind('play', function(){
      // event listener for media event play
      playing = true;
    }).bind('pause', function(){
      // event listener for media event pause
      playing = false;
    }).bind('ended', function(){
      // event listener for media event ended
      // check to see if the finished audio is the last song
      if ((index + 1) < trackCount){
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
      audio.src = mediaPath + tracks[id].file + extension;
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
        index = trackCount - 1;
        loadSong(index);
        if (playing){
          audio.play();
        }
      } else {
        // if loop is not on, just pause the song and reset player
        audio.pause();
        index = 0;
        loadSong(index);
      }
    });

    // Next Song
    $('#next-btn').click(function(){
      if ((index + 1) < trackCount){
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

    // Load the first song to start
    loadSong(index);
  }

});