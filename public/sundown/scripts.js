$(document).ready(function() {
  
  // Get current time
  function getTime() {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
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

    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat={"+ lat + "}&lon={" + lon + "}";
    $.getJSON (weatherAPI, function(data){
      sunset = data.sys.sunset;
      sunrise = data.sys.sunrise;
    });
  }
});