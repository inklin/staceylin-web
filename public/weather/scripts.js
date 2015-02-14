$(document).ready(function() {
  var lat;
  var lon;
  var weather;
  var temp;
  var icon;


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  } else {
    alert("Oops, looks like Geolocation is not supported by your browser!");
  }

//Get the latitude and the longitude;
  function successFunction(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    getWeather(function(data){
      weather = data.weather[0].description;
      temp = kelvinToCelsius(data.main.temp);
      icon = data.weather[0].icon;
      // if icon is for clouds, point to 03 svg 
      if (icon === '04n' || icon === '04d' || icon === '03n'){
        icon = '03';
      }
      showWeather();
    });
  }

  function errorFunction(){
    alert("Oh no, looks like geocoder failed.");
  }

  // use longitude and latitude to find the weather description, temp, and icon
  function getWeather(callback){
    var weather = '//api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon ;
    $.ajax({
      dataType: 'jsonp',
      url: weather,
      success: callback
    });
  }


  // Show weather display on the page
  function showWeather(){
    $('.display').append('<img src="images/' + icon + '.svg" class="icon" />');
    $('.description').html(weather);
    $('.temp').html(temp + ' &#x2103;');
  }

  // function to convert kelvin to celsius
  function kelvinToCelsius(k){
    var c = Math.floor(k - 273);
    return c;
  }

});
