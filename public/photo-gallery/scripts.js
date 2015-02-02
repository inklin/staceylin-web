$(document).ready(function() {

  /* prevent multiple image displays */
  var loading = false;
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
        $(this).addClass('landscape');
      }
    });
  }

  setTimeout(checkOrientation, 200);

  $(".photos li").click(function(){
    if (loading){
      return false;
    }
    loading = true;

    var item = $(this);
    var img = item.find("img");
    var title = item.find(".title").html();

    /* Large image */
    var large_img = new Image();
    large_img.src = img.attr("src");

    /* Remove active class from previously clicked photo */
    $(".photos li.active").removeClass("active");

    /* Mark the clicked photo as active */
    item.addClass("active");

    /* Add control bar */
    if($(".backdrop").length < 1){
      var backdrop = "<div class='backdrop'></div>";
      var canvas = "<div class='canvas'></div>";
      var previous = "<span class='previous'><</span>";
      var imgTitle = "<span class='title'>Sample</span>";
      var next = "<span class='next'>></span>";

      var controls = "<div class='controls'>" + previous + imgtitle + next + "</div>";
      var total_html = backdrop + canvas + controls;

      $("body").append(total_html);
    }

    /* Show Loading image until the image loads and make the last image transluscent so that the loader is visible */
    if (!large_img.complete){
      $(".canvas").addClass("loading").children().css("opacity", "0.5");
    }



    /* Center the canvas */
    var cw = $(".canvas").outerWidth();
    var ch = $(".canvas").outerHeight();

    /* Find top and left coordinates */
    var canvasLeft = ($(window).width() - cw)/2;
    var canvasTop = ($(window).height() - ch)/2;

    $(".canvas").css({top: canvasTop, left: canvasLeft});

    /* Insert the large image into the canvas once loaded */
    $(large_img).load(function(){
      /* Recenter the canvas with new dimensions */
      cw = large_img.width;
      ch = large_img.height;

      /* Add padding to fit the image to get the total dimensions */
      var hpadding = parseInt($(".canvas").css("paddingLeft"), 10) + parseInt($(".canvas").css("paddingRight"), 10);
      var vpadding = parseInt($(".canvas").css("paddingTop"), 10) + parseInt($(".canvas").css("paddingBottom"), 10);

      /* calculate new center of canvas */
      canvasLeft = ($(window).width() - cw - hpadding)/2;
      canvasTop = ($(window).height() - ch - vpadding)/2;

      /* Animate the canvas to new dimensions and position */
      $(".canvas").html("").animate({width: cw, height: ch, top: canvasTop, left: canvasLeft}, 500, function(){

          /* Insert the image */
          var imgtag = "<img src='" + large_img.src + "' style='opacity: 0;' />";
          $(".canvas").html(imgtag);
          $(".canvas img").fadeTo("slow", 1);

          /* Display the image title */
          $(".canvas .title").html(title);
          loading = false;
      });

    });

  });

  /* Navigation function */
  function navigate(direction){
    /* left */
    if (direction === -1){
      $(".photos li.active").prev().trigger("click");
    /* right */
    } else if (direction === 1){
      $(".photos li.active").next().trigger("click");
    /* exit */
    } else if (direction === 0){
      $("photos li.active").removeClass("active");
      /* fade out the gallery elements */
      $(".backdrop, .canvas, .controls").fadeOut("slow", function(){
        $(".canvas, .title").html("");
      });
    }
  }

});