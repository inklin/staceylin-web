$(document).ready(function() {

/* Variable to update every second */
var updateRemaining;
/* Get time for new year's date */
var newYear = new Date(2015, 0, 1);


function countDown() {
/* Get system time */
  var currentTime = new Date();
/* Subtract to get the remaining milliseconds until date */
  var remaining = newYear - currentTime;
  if (remaining > 0 ){
/* 1000 milliseconds in one second */
  var second = 1000;
/* 60 seconds in one minute */
  var minute = second * 60;
/* 60 minutes in one hour */
  var hour = minute * 60;
/* 24 hours in one day */
  var day = hour * 24;

/* Divide remaining time by milliseconds in a day, get full number of days */
/* Get remainder and divide by number of milliseconds in an hour to get full number of hours */
  var remainingDay = Math.floor(remaining / day);
  var remainingHour = Math.floor((remaining % day) / hour);
  var remainingMinute = Math.floor((remaining % hour) / minute);
  var remainingSecond = Math.floor((remaining % minute) / second);

/* When there is only one minut left, drop the ball */
  if (remaining === 60000){
    $("#timer").html(remainingSecond + "seconds to New Year's!");
    $("#ball").addClass("ballfall");
  }

  if (remaining === 0){
    $("#timer").html("HAPPY NEW YEAR 2015!");
    $("#dropit").val("Relive the ball drop");
  }

/* Show remaining days on the page */
  $("#timer").html(remainingDay + " days " + remainingHour + " hours " + remainingMinute + " minutes " + remainingSecond + " seconds until New Year's!");
  }
}

/* call the function, then update the remaining time every second, every 1000 milliseconds */
countDown();
updateRemaining = setInterval(countDown, 1000);

/* Drop the ball if user is too impatient */
  $("#dropit").click(function(){
    $("#ball").addClass("ballfall");
  });
});