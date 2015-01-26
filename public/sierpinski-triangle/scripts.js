$(document).ready(function() {
  var canvas = document.getElementByID('canvas');
  var context = canvas.getContext('2d');

  /* An empty array which will contain all triangles */
  var trgs = [];

  /* The dimension of the main triangle */
  var dim = 500;

  var trg = {
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
    di: dim,
  };

  trgs.push(triangle);

  function iterate_fractal(){
    /* clear the screen for each iteration */
    /* a rectangle with canvas width and height lengths, with starting point at top left corner */
    context.clearRect(0, 0, canvas.width, canvas.height);

    /* iterate through all the triangles to find the black ones */
    for (var i in trgs){
      /* check the color property of the single triangle */
      if (trgs[i].c === "black"){

        /* create the middle white triangle */
        var trgWhite = {
          c: "white",
          /* calculate the mid points of the sides of the triangle */
          ly: (trg[i].ly + trg[i].ty) /2,
          lx: (trg[i].lx + trg[i].tx) /2,
          ry: (trg[i].ry + trg[i].ty) /2,
          rx: (trg[i].rx + trg[i].tx) /2,
          /* the top vertex y coordinate plus the height of the big triangle */
          ty: trig[i].ty + (Math.sqrt(3) * trig[i].dim)/2,
          /* the top x vertex is the same as the big triangle */
          tx: trig[i].tx,
          /* the dimension is half the size of the triangle it is inside */
          di: triangles[i].di/2,
        };

        trgs.push(trgWhite);

        /* create the top black triangle */
        var trgTop = {
          c: "black",
          /* The left vertex is the same as the left vertex of the white triangle */
          ly: (trg[i].ly + trg[i].ty) /2,
          lx: (trg[i].lx + trg[i].tx) /2,
          /* The right vertex is the same as the right vertex of the white triangle */
          ry: (trg[i].ry + trg[i].ty) /2,
          rx: (trg[i].rx + trg[i].tx) /2,
          ty:
          tx;
          di: triangles[i].di/2,
        };

        trgs.push(trgTop);
      }
    }
  }

});