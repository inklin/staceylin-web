var fortunes = new Array(6);

fortunes[0] = "Those shoes look like they need some spicing up!";
fortunes[1] = "Do you feel like you're wading through peanut butter? Wear rain boots.";
fortunes[2] = "Your students secretly think you look like a muffin.";
fortunes[3] = "The road to fame and glory is paved with failed macarons.";
fortunes[4] = "I'm trapped in a Chinese bakery with no escape. Help!";
fortunes[5] = "There is secretly M.S.G here, run!";
fortunes[6] = "There is melted ice cream at the bottom of the cone."
fortunes[7] = "Cold tea can always be warmed up again."
fortunes[8] = "Take care not to overcook the instant noodles."
fortunes[9] = "Cookies are best baked with love and chocolate chips."
fortunes[10] = "This cookie is meh."

function getfortune() {
  var i = Math.floor((Math.random() * 10 ))
  var fortune = fortunes[i]
  document.getElementById('fortune').innerHTML = "Your fortune: " + fortune;
  document.getElementById('nom').value = "Eat another cookie?";
}




