$(document).ready(function() {

  function init(){
    if ('geolocation' in navigator){
      getLocation();
    } else {
      alert('Sorry, it seems geolocation is not available for your browser.');
    }
  }

  // Get user location
  function getLocation(){

    navigator.geolocation.getCurrentPosition(function(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      getSundown(latitude, longitude);
    });

  }

  // Make api call and get sundown time for the location
  function getSundown(lat, lon){
    var sunset;
    var sunrise;
    var remainingTime;

    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon;

    $.getJSON (weatherAPI, function(data){
      // convert sunset time from seconds to milliseconds
      sunset = data.sys.sunset * 1000;
      sunrise = data.sys.sunrise * 1000;
      showRemaining(sunset, sunrise);
    });
  }

  // Calculate and show remaining time until sundown 
  function showRemaining(sunset_time, sunrise_time){
    var time = Date.now();
    var formattedTime;

    if (sunset_time < sunrise_time){
        remainingTime = sunset_time - time;
        formattedTime = convertMilliseconds(remainingTime);
        $('.remaining-time').text(formattedTime + ' before sundown');
      } else {
        remainingTime = sunrise_time - time;
        formattedTime = convertMilliseconds(remainingTime);
        $('.remaining-time').text(formattedTime + ' before sunrise');
        $('body').addClass('night');
        $('.sun-container').addClass('night');
      }
  }

  // Convert time in milliseconds to hours, minutes, seconds
  function convertMilliseconds(time_in_milliseconds){
    var time_in_seconds = time_in_milliseconds / 1000;
    var seconds = Math.floor(time_in_seconds % 60);
    var minutes = Math.floor((time_in_seconds / 60) % 60);
    var hours = Math.floor(time_in_seconds / (60 * 60));

    return hours + ' hours ' + minutes + ' minutes';
  }

  init();
});