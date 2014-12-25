$(document).ready(function() {
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
  });
});