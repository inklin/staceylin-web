$(document).ready(function() {

  var hasImage = 1;

  $("#inputimage").click(function(){
    if (hasImage === 1){
      alert("You haven't chosen an image yet!");
    } else {
      $("#preview").show();
    }
  });

  $("#inputgreeting").click(function(){
    var greeting = $("#greeting").val();
    if (greeting === "") {
      alert("You haven't entered a greeting yet!");
    } else {
      $("#card").append(greeting);
      $("#greeting, #inputgreeting").hide();
    }
  });

  function readURL(input){
    if(input.files && input.files[0]){
      var reader = new FileReader();

      reader.onload = function(e){
        $("#preview").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#picture").change(function(){
    readURL(this);
    hasImage = 2;
  });

});