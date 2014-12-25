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
      $("#message").html(greeting);
    }
  });

  /* Function to check the input image and add it to the preview html */
  function readURL(input){
    if(input.files && input.files[0]){
      var reader = new FileReader();

      reader.onload = function(e){
        $("#preview").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  /* When the picture changes, call readURL function and change hasImage value */
  $("#picture").change(function(){
    readURL(this);
    hasImage = 2;
  });

  $("#save").click(function(){
    var card = $("#envelope");
    html2canvas(card[0], {
      onrendered: function(canvas){
        window.open(canvas.toDataURL("image/png"));
      }
    });

  });

});