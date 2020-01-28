const canvas = document.getElementById("canvas");

// We will be using 2d, some newer browser support 3d/webgl
const ctx = canvas.getContext("2d");

// Tangential triangle
ctx.beginPath();

ctx.strokeStyle = "gray";
ctx.moveTo(200, 20);
ctx.lineTo(200, 130);
ctx.lineTo(50, 20);

ctx.stroke();

// Arc
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 7;
ctx.moveTo(200, 20);
ctx.arcTo(200, 130, 50, 20, 40);
ctx.stroke();