$(document).ready(function() {
  var photos = ["flowers", "flowers2", "fried-sushi", "kimono", "night-restaurant", "night", "papritot", "ramen", "sakura", "sakurajima", "shop", "sushi"];

  function addPhotos(){
    var photoNumber = 12;
    for (var i = 0; i < photoNumber; i++) {
      $(".photos").append("<div class='captioned-image'><li class='thumbnail'><img src='images/" + photos[i] + ".jpg' class='photo' /></li><div class='imageTitle'><h5 class='title'>" + photos[i] + "</h5></div></div>");
    }
  }

  addPhotos();

  function checkOrientation(){
    $(".photo").each(function() {
      if ($(this).width() > $(this).height()) {
        console.log("landscape photo");
        $(this).addClass('landscape');
      }
    });
  }

  setTimeout(checkOrientation, 200);

});