$(document).ready(function() {

  function init(){
    for (var i = 1; i < 5; i++){
      var menu = "<div class='menu-wrapper effect-" + i + "' id='menu-effect" + i + "'><h2>Sidebar Menu</h2><ul><li><a href='#'>About</a></li><li><a href='#'>Blog</a></li><li><a href='#'>FAQ</a></li><li><a href='#'>Contact</a></li></ul></div>";
      $('body').append(menu);
    }
  }

  init();

  $('.effect-btn').click(function(){
    var effect = this.id;
    var menu = $("." + effect);
    if (!menu.hasClass("menu-open")){
      menu.addClass("menu-open");
      $('.content').addClass("content-" + effect);
    } else {
      menu.removeClass("menu-open");
      $('.content').removeClass("content-" + effect);
    }
  });

});