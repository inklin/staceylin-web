$(document).ready(function() {

  $("#text").keyup(function() {

    var string = $("#text").val();
        wordCount = string.split(" ").length;
        characterCount = string.length;

    $("#wordNumber").html(wordCount);
    $("#characterNumber").html(characterCount);
  });
});