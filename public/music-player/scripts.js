$(document).ready(function() {

  // check if the page supports HTML5 audio
  var testAudio = document.createElement('audio');

  // canPlayType returns blank if not supported
  // to convert to Boolean value of False for no support
  var isSupported = !!testAudio.canPlayType;
  console.log(isSupported);

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

    var trackCount = tracks.length;

    var audio = $('#audio-player').bind('play', function(){
      // event listener for media event play
      playing = true;
    }).bind('pause', function(){
      // event listener for media event pause
      playing = false;
    }).bind('ended', function(){
      // event listener for media event ended
      // check to see if the audio is the last song
      if ((index + 1) < trackCount){
        index ++;
        loadSong(index);
        audio.play();
      } else {
        audio.pause();
        index = 0;
        loadSong(index);
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

    // Load the first song to start
    loadSong(index);
  }

});