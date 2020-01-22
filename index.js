const canvas = document.getElementById("canvas");

// We will be using 2d, some newer browser support 3d/webgl
const ctx = canvas.getContext("2d");


ctx.fillRect(10, 10, 90, 90);
ctx.clearRect(20, 20, 70, 70);
ctx.strokeRect(30, 30, 50, 50);
