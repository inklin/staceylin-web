var clicks = 0 

function lights(){
  clicks = clicks + 1
  switch(clicks){
    case 1: 
      document.getElementById('story').innerHTML = "Ahh! What's that? Turn on the lights!";
      document.getElementById('eyeball').style.visibility = 'visible';
      togglelights("off");
      break;
    case 2:
      document.getElementById('story').innerHTML = "Huh, where did it go? Guess it was just a trick of the light."
      document.getElementById('eyeball').style.visibility = 'hidden';
      togglelights("on");
      break;
    case 3:
      document.getElementById('story').innerHTML = "Arghhhh! There it is again! Lights, lights!";
      document.getElementById('eyeball').style.visibility = 'visible';
      togglelights("off");
      break;
    case 4:
      document.getElementById('story').innerHTML = "A monster!! Click to capture him!!";
      document.getElementById('eyeball').style.visibility = 'hidden';
      document.getElementById('monster').style.visibility = 'visible';
      togglelights("on");
      break;
    default: 
      if (document.body.style.backgroundColor === "white"){
        togglelights("off")
      } else {
        togglelights("on")
      }
  }
}

function disappear(){
  document.getElementById('monster').style.visibility = 'hidden';
  document.getElementById('story').innerHTML = "Oops! Looks like you weren't fast enough...<br><h2>Inspired by Lights Off, a short film.";
  document.getElementById('video').style.visibility = 'visible';
  document.getElementById('tip').style.visibility = 'visible';
}

function togglelights(status){
  if (status === "on"){
    document.getElementById('story').style.color = "black";
    document.body.style.backgroundColor = "white";
  } else {
    document.getElementById('story').style.color = "white";
    document.body.style.backgroundColor = "black";
  }
}