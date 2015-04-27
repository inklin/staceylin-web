$(document).ready(function() {
  var menuOpen = false;
  var effect;

  function init(){
    for (var i = 1; i < 6; i++){
      var menu = "<div class='menu-wrapper effect-" + i + "' id='menu-effect" + i + "'><h2>Sidebar Menu</h2><ul><li><a href='#'>About</a></li><li><a href='#'>Blog</a></li><li><a href='#'>FAQ</a></li><li><a href='#'>Contact</a></li></ul></div>";
      $('body').append(menu);
    }
  }

  function reset(){
    $(".menu-wrapper").removeClass("menu-open");
    $(".content").attr("class", "content");
    menuOpen = false;
  }

  $(".effect-btn").click(function(){
    if (menuOpen){
      reset();
    } else {
      effect = this.id;
      var menu = $("." + effect);
      menu.addClass("menu-open");
      $('.content').addClass("content-" + effect);
      menuOpen = true;
    }
  });

  $(".cover").click(function(){
    reset();
  });

  init();

});