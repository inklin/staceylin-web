$(document).ready(function() {

  var time;

  function getTime(){
    time = Date.now();
  }

  getTime();

  // Get user location
  function getLocation(){

    navigator.geolocation.getCurrentPosition(function(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      getSundown(latitude, longitude);
    });

  }
  getLocation();

  function getSundown(lat, lon){
    var sunset;
    var sunrise;
    var remainingTime;

    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon;

    $.getJSON (weatherAPI, function(data){

      // convert sunset time from seconds to milliseconds
      sunset = data.sys.sunset * 1000;

      if (sunset > time){
        remainingTime = sunset - time;
        console.log('It is still day out');
        console.log(remainingTime);
        convertMilliseconds(remainingTime);

      } else {
        console.log("You should be sleeping!");
      }
    });
  }

  function convertMilliseconds(time_in_milliseconds){
    var time_in_seconds = time_in_milliseconds / 1000;
    var seconds = Math.floor(time_in_seconds % 60);
    var minutes = Math.floor((time_in_seconds / 60) % 60);
    var hours = Math.floor(time_in_seconds / (60 * 60));

    console.log(hours);
    console.log(minutes);
  }


});