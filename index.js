const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const draw = () => {
  // create a path for rectangle
  const rectangle = new Path2D();
  rectangle.rect(100, 100, 50, 50);

  // create a path for circle
  const circle = new Path2D();
  circle.moveTo(125, 35);
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  // duplicate the rectangle
  const newRect = new Path2D(rectangle);

  // using svg
  const p = new Path2D("M20 15 h 40 v 40 h -80 Z");

  ctx.lineWidth = 5;
  ctx.fillStyle = "red";

  // Now draw them
  ctx.stroke(rectangle);
  ctx.fill(circle);
  ctx.fill(newRect);

  ctx.fillStyle = "green";

  // Draw the path
  ctx.fill(p);
};

draw();
