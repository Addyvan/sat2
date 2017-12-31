// Setup variables

var canvas = document.getElementById("canv");
var width = canvas.width;
var height = canvas.height;
width = WIDTH;
height = HEIGHT;
var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";



function update(progress) {
  // Update the state of the game  
  
}

function draw() {
  // Draw the shit
  ctx.clearRect(0, 0, width, height);
}

function loop(timestamp) {
  var progress = timestamp - lastRender;
  update(progress);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}
var lastRender = 0;
window.requestAnimationFrame(loop);