const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const draw = () => {
  // Create first path and add a rectangle
  let p1 = new Path2D();
  p1.rect(0, 0, 100, 150);

  // Create second path and add a rectangle
  let p2 = new Path2D();
  p2.rect(0, 0, 100, 75);

  // Create transformation matrix that moves 200 points to the right
  // And skews it.
  let m = document
    .createElementNS("http://www.w3.org/2000/svg", "svg")
    .createSVGMatrix();
  m.a = 1;
  m.b = 0.5;
  m.c = 0;
  m.d = 1;
  m.e = 200;
  m.f = 0;

  // Add second path to the first path
  // It will be slightly skewed
  p1.addPath(p2, m);
  
  // Draw the first path
  // It will draw the two objects
  ctx.fill(p1);
};

draw();
