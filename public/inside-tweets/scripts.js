$(document).ready(function() {
  var screen_name = "inklin";

  var timeline = $.ajax({
    url: "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name= " + screen_name + "&count=2",
    type: "GET",
    dataType: 'json',

    success: function(data) {
      console.log("success!");
      console.log(data);
    },
    error: function(){
      console.log("error!");
    }
  });

// // Consumer key
// // OryyX1bwYhDR0PWWKkoV1cqJA
// oauth_consumer_key
// // Nonce
// // Signature
// // Signature method: 
// oauth_signature_method: "HMAC-SHA1"
// // Timestamp
// // Token
// // 19808476-8TvvqhBQUmrFXJFsb6t3v1Rp3ffpwuYBy72yxXFP0
// // Version
// oauth_version: "1.0"


});