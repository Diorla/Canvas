const canvas = document.getElementById("canvas");

// We will be using 2d, some newer browser support 3d/webgl
const ctx = canvas.getContext("2d");


ctx.beginPath()
ctx.moveTo(10, 10);
ctx.lineTo(40, 40);
ctx.lineTo(10, 70);

ctx.stroke();


ctx.beginPath();
ctx.moveTo(40, 10);
ctx.lineTo(70, 40);
ctx.lineTo(40, 70);

ctx.fill();