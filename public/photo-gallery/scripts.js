$(document).ready(function() {

  /* prevent multiple image displays */
  var lb_loading = false;
  var item, img, title, large_img, imgtag;
  var cw, ch, hpadding, vpadding;
  var canvasLeft, canvasTop;
  var doc = $(document);


  function checkOrientation(){
    $(".photo").each(function() {
      if ($(this).width() > $(this).height()) {
        $(this).addClass('landscape');
      }
    });
  }

  setTimeout(checkOrientation, 100);

  $(".captioned-image").click(function(){
    if (lb_loading){
      return false;
    }
    lb_loading = true;

    item = $(this);
    img = item.find("img");
    title = item.find(".title").html();

    /* Remove active class from previously clicked captioned image */
    $(".captioned-image.active").removeClass("active");
    item.addClass("active");

    /* Large image */
    large_img = new Image();
    large_img.src = img.attr("src");

    /* Add control bar */
    if($(".lb_backdrop").length < 1){
      console.log('create backdrop');
      var lb_backdrop = "<div class='lb_backdrop'></div>";
      var lb_canvas = "<div class='lb_canvas'></div>";
      var lb_previous = "<span class='lb_previous'><</span>";
      var lb_title = "<span class='lb_title'>Sample</span>";
      var lb_next = "<span class='lb_next'>></span>";

      var lb_controls = "<div class='lb_controls'>" + lb_previous + lb_title + lb_next + "</div>";
      var total_html = lb_backdrop + lb_canvas + lb_controls;

      $("body").append(total_html);

    /* Click based navigation */
    $(".lb_previous").click(function(){
      navigate(-1);
    });
    $(".lb_next").click(function(){
      navigate(1);
    });
    $(".lb_backdrop").click(function(){
      navigate(0);
    });

    }

    /* Fade in gallery elements if they are hidden due to a previous exit */
    if ($(".lb_backdrop:visible").length === 0){
      $(".lb_backdrop, .lb_canvas, .lb_controls").fadeIn("slow");
    }

    /* Show Loading image until the image loads */
    $(".lb_canvas").addClass("loading");
    

    /* Disable left and right controls on the first and last items */
    if (item.prev().length === 0){
      $(".lb_previous").addClass("inactive");
    } else {
      $(".lb_previous").removeClass("inactive");
    }

    if (item.next().length === 0){
      $(".lb_next").addClass("inactive");
    } else {
      $(".lb_next").removeClass("inactive");
    }

    /* Center the canvas */
    cw = $(".lb_canvas").outerWidth();
    ch = $(".lb_canvas").outerHeight();

    /* Find top and left coordinates */
    canvasLeft = ($(window).width() - cw)/2;
    canvasTop = ($(window).height() - ch)/2;

    $(".lb_canvas").css({top: canvasTop, left: canvasLeft});

    /* Insert the large image into the canvas once loaded */
    $(large_img).load(function(){
      /* Recenter the canvas with new dimensions */
      cw = large_img.width;
      ch = large_img.height;

      /* Add padding to fit the image to get the total dimensions */
      hpadding = parseInt($(".lb_canvas").css("paddingLeft"), 10) + parseInt($(".lb_canvas").css("paddingRight"), 10);
      vpadding = parseInt($(".lb_canvas").css("paddingTop"), 10) + parseInt($(".lb_canvas").css("paddingBottom"), 10);

      /* calculate new center of canvas */
      canvasLeft = ($(window).width() - cw - hpadding)/2;
      canvasTop = ($(window).height() - ch - vpadding)/2;

      /* Animate the canvas to new dimensions and position */
      $(".lb_canvas").html("").animate({width: cw, height: ch, top: canvasTop, left: canvasLeft}, 500, function(){

          /* Insert the image */
          imgtag = "<img src='" + large_img.src + "' style='opacity: 0;' />";
          $(".lb_canvas").html(imgtag);
          $(".lb_canvas img").fadeTo("fast", 1);

          /* Display the image title */
          $(".lb_title").html(title);
          
          lb_loading = false;
          $(".lb_canvas").removeClass("loading");
      });

    });

  });

  /* Keyboard based navigation */
  doc.keyup(function(e){
    if ($(".lb_backdrop:visible").length === 1){
      /* left */
      if (e.keyCode === "37"){
        navigate(-1);
      /* right */
      } else if (e.keyCode === "39"){
        navigate(1);
      } else if (e.keyCode ==="27"){
        navigate(0);
      }
    }
  });

  /* Navigation function */
  function navigate(direction){
    /* left */
    if (direction === -1){
      $(".captioned-image.active").prev(".captioned-image").trigger("click");
    /* right */
    } else if (direction === 1){
      $(".captioned-image.active").next(".captioned-image").trigger("click");
    /* exit */
    } else if (direction === 0){
      $(".captioned-image .active").removeClass("active");
      $(".lb_canvas").removeClass("loading");
      /* fade out the gallery elements */
      $(".lb_backdrop, .lb_canvas, .lb_controls").fadeOut("slow", function(){
        $(".lb_canvas, .lb_title").html("");
      });
      lb_loading = false;
    }
  }

});