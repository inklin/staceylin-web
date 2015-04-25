$(document).ready(function() {

  var menuOpen = false;

  $(".effect-btn").click(function(){
    var effect = this.id;
    console.log(effect);
    if (!menuOpen){
      openMenu(effect);
      console.log("menu not open, open menu");
    } else {
      closeMenu(effect);
      console.log("menu open, close menu");
    }
  });

  function openMenu(effect){
    $(".menu-wrapper").addClass(effect);
    setTimeout(function(){
      $(".menu-wrapper").addClass("menu-open");
      menuOpen = true;
    }, 100);
  }

  function closeMenu(effect){
    menuOpen = false;
    $(".menu-wrapper").removeClass("menu-open");
    setTimeout(function(){
      $(".menu-wrapper").removeClass(effect);
    }, 10);
  }

});