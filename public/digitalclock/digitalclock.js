$(document).ready(function() {
  function showTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM"
    /* pad with zeros if required */
    /* converting hours to am and pm */
    if (hours > 12){
      hours = hours - 12;
      var meridian = "PM"
    }

    if (hours < 10){
      hours = "0" + hours;
    }

    /* 0AM and 0PM should be 12 */
    if (hours === 0){
      hours = 12;
    }

    if (minutes < 10){
      minutes = "0" + minutes;
    }

    if (seconds < 10){
      seconds = "0" + seconds;
    }

    /* get div element for time */
    var timeDiv = document.getElementById('clockTime');
    timeDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridian;
  }

  function showDate(){
    var currentDate = new Date();
    var month = currentDate.getMonth();
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = monthName[month];
    var dateDiv = document.getElementById('clockDate');
    dateDiv.innerText = month + " " + date + ", " + year;

  }

  function showDay(){
    var currentDay = new Date();
    var day = currentDay.getDay();

    var dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    day = dayName[day];

    var dayDiv = document.getElementById('clockDay');
    dayDiv.innerText = day;
  }

  showDate();
  showDay();
  setInterval(showTime, 1000);
});

