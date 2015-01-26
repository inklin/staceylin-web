$(document).ready(function() {
  var canvas = document.getElementByID('canvas');
  var context = canvas.getContext('2d');

  /* An empty array which will contain all triangles */
  var triangles = [];

  /* The dimension of the main triangle */
  var dim = 500;

  var triangle = {
    c: "black",
    /* left vertex of the triangle */
    ly: canvas.height,
    lx: 0,
    /* right vertex of the triangle */
    ry: canvas.height,
    rx: dim,
    /* top vertex of the equilateral triangle, y calculated by height formula */
    ty: canvas.height - (Math.sqrt(3)* dim)/2,
    tx: dim/2,
    /* dimension of the triangle, the sides */
    di: dim
  };

  triangles.push(triangle);

  function iterate_fractal(){
    /* clear the screen for each iteration */
    /* a rectangle with canvas width and height lengths, with starting point at top left corner */
    context.clearRect(0, 0, canvas.width, canvas.height);
    /* iterate through all the triangles to find the black ones */
    for (var i in triangles){
      /* check the color property of the single triangle */
      if (triangles[i].c === "black"){

      }
    }
  }

});