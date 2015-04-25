$(document).ready(function() {

  var menuOpen = false;
  var effect;

  $(".effect-btn").click(function(){
    effect = this.id;

    if (!menuOpen){
      openMenu(effect);
    } else {
      closeMenu(effect);
    }
  });

  function openMenu(effect){

    $(".menu-wrapper").addClass(effect);
    setTimeout(function(){
      $(".menu-wrapper").addClass("menu-open");
      menuOpen = true;
    }, 10);
  }

  function closeMenu(effect){
    menuOpen = false;
    $(".menu-wrapper").removeClass(effect).removeClass("menu-open");
  }

});