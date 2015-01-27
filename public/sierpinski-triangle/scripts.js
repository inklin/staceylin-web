$(document).ready(function() {
  var canvas = $("#canvas")[0];
  var context = canvas.getContext("2d");

  /* An empty array which will contain all triangles */
  var trgs = [];

  /* The dimension of the main triangle */
  var dim = 500;

  var trg = {
    c: "#000000",
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

  trgs.push(trg);

  iterate_fractal();
  iterate_fractal();
  iterate_fractal();
  iterate_fractal();
  iterate_fractal();

  function iterate_fractal(){
    /* clear the screen for each iteration */
    /* a rectangle with canvas width and height lengths, with starting point at top left corner */
    context.clearRect(0, 0, canvas.width, canvas.height);

    /* iterate through all the triangles to find the black ones */
    for (var i in trgs){
      /* check the color property of the single triangle */
      if (trgs[i].c === "#000000"){
        /* create the middle white triangle */
        var trgWhite = {
          c: "#FFFFFF",
          /* calculate the mid points of the sides of the triangle */
          ly: (trgs[i].ly + trgs[i].ty) /2,
          lx: (trgs[i].lx + trgs[i].tx) /2,
          ry: (trgs[i].ry + trgs[i].ty) /2,
          rx: (trgs[i].rx + trgs[i].tx) /2,
          /* the top vertex y coordinate plus the height of the big triangle */
          ty: trgs[i].ty + (Math.sqrt(3) * trgs[i].di)/2,
          /* the top x vertex is the same as the big triangle */
          tx: trgs[i].tx,
          /* the dimension is half the size of the triangle it is inside */
          di: trgs[i].di/2,
        };

        trgs.push(trgWhite);

        /* create the top black triangle */
        var trgTop = {
          c: "#000000",
          /* The left vertex is the same as the left vertex of the white triangle */
          ly: (trgs[i].ly + trgs[i].ty) /2,
          lx: (trgs[i].lx + trgs[i].tx) /2,
          /* The right vertex is the same as the right vertex of the white triangle */
          ry: (trgs[i].ry + trgs[i].ty) /2,
          rx: (trgs[i].rx + trgs[i].tx) /2,
          /* The top vertex is the same as the top vertex of the large triangle */
          ty: trgs[i].ty,
          tx: trgs[i].tx,
          /* the dimension is half the size of the triangle which encloses it */
          di: trgs[i].di/2,
        };

        trgs.push(trgTop);

        /* create the bottom left black triangle */

        var trgLeft = {
          c: "#000000",
          /* The left vertex is the same as the left vertex of the large triangle */
          ly: trgs[i].ly,
          lx: trgs[i].lx,
          /* Create the right vertex */
          ry: (trgs[i].ry + trgs[i].ly)/2,
          rx: (trgs[i].rx + trgs[i].lx)/2,
          /* The top vertex is the same as the left vertex of the white triangle */
          ty: (trgs[i].ly + trgs[i].ty) /2,
          tx: (trgs[i].lx + trgs[i].tx) /2,
          di: trgs[i].di/2,
        };

        trgs.push(trgLeft);

        /* create the bottom right black triangle */
        var trgRight = {
          c: "#000000",
          /* The left vertex is the same as the top vertex of the white triangle */
          ly: (trgs[i].ly + trgs[i].ry)/2,
          lx: (trgs[i].lx + trgs[i].rx)/2,
          /* The right vertex is the same as the right vertex of the large triangle */
          ry: trgs[i].ry,
          rx: trgs[i].rx,
          /* The top vertex is the same as the right vertex of the white triangle */
          ty: (trgs[i].ry + trgs[i].ty) /2,
          tx: (trgs[i].rx + trgs[i].tx) /2,
          di: trgs[i].di/2,
        };

        trgs.push(trgRight);
      }
    }

    /* Draw all the triangles in the array */
    for (i in trgs){
      drawTrg(trgs[i]);
    }
  }

  /* Create a function to draw one triangle */
  function drawTrg(t){
    context.beginPath();
    context.moveTo(t.lx, t.ly);
    context.lineTo(t.rx, t.ry);
    context.lineTo(t.tx, t.ty);
    context.lineTo(t.lx, t.ly);

    context.fillStyle = t.c;
    context.fill();
    context.closePath();

  }

});