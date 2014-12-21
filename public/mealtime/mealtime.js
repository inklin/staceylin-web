$(document).ready(function(){
    
  

    $("#submit").click(function feedMe(){
      var eggs = $("input[name=eggs]:checked").val();
      var meat = $("input[name=meat]:checked").val();
      var carbs = $("input[name=carbs]:checked").val();
      var drink = $("input[name=drink]:checked").val();


      $("#meal").show();
      $(".egg .meat .carbs .drink").hide();
      
      $("#" + eggs).show();
      $("#" + meat).show();
      $("#" + carbs).show();
      $("#" + drink).show();
      $("#menu").hide();

    });

});
