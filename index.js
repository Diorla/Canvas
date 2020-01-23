const canvas = document.getElementById("canvas");

// We will be using 2d, some newer browser support 3d/webgl
const ctx = canvas.getContext("2d");

ctx.beginPath();
// Happy face
ctx.arc(35, 75, 30, 0, Math.PI, false);

ctx.fill();

ctx.beginPath();
// Sad face
ctx.arc(35, 65, 30, 0, Math.PI, true);
ctx.closePath();
ctx.stroke();
