$(document).ready(function() {
  var lat;
  var lon;

  // send Ajax post request to get longitude and latitude
  $.ajax({
    url: '//freegeoip.net/json/',
    type: 'POST',
    dataType: 'jsonp',
    success: function(location) {
      lon = location.longitude;
      lat = location.latitude;
      console.log('longitude is ' + lon);
      console.log('latitude is ' + lat);
    }
  });

  // use longitude and latitude with a center radius to find the weather 
  function getWeather(callback){
    var weather = '//api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon ;
    $.ajax({
      dataType: 'jsonp',
      url: weather,
      success: callback
    });
  }

  getWeather(function(data){
    console.log('weather data received');
    console.log(data.weather[0].description);
  });

});