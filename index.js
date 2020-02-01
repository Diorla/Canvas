const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");


const draw = () => {
  // fillRect
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.rect(0, 0, 50, 50)
  ctx.fillStyle = "green";
  ctx.fill();

  // clearRect
  ctx.beginPath();
  ctx.rect(15, 15, 20, 20);
  ctx.fillStyle = "white";
  ctx.fill();

  // strokeRect
  ctx.beginPath();
  ctx.rect(45, 45, 50, 50);
  ctx.strokeStyle = "red";
  ctx.stroke();
};

draw();
