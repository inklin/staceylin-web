$(document).ready(function(){
    
  

    $("#submit").click(function feedMe(){
      var eggs = $("input[name=eggs]:checked").val();
      var meat = $("input[name=meat]:checked").val();
      var carbs = $("input[name=carbs]:checked").val();
      var drink = $("input[name=drink]:checked").val();

      $("#" + eggs).show();
      $("#" + meat).show();
      $("#" + carbs).show();
      $("#" + drink).show();
      $("#menu").hide();
      $("#hungry").show();
    });

    $("#hungry").click(function newMeal(){
      console.log("test");
      $("input:radio").attr("checked", false);
      $("#menu").show();
      $("#meal").hide();
      $("#hungry").hide();
    })
});
