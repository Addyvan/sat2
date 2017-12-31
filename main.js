var allBlobs = [];
var currentLoop = 0;

function update(progress) {
  // Update the state of the game
  currentLoop++;
  if (currentLoop % 150 == 0 && allBlobs.length < 25) {
    genNewBlobs(1);
  }
  if (allBlobs.length >= 25) {
    allBlobs.shift();
  } 
  for (var i = 0; i < allBlobs.length; i++) {
    allBlobs[i].move();
  }

}

function draw() {
  // Draw the shit
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < allBlobs.length; i++) {
    allBlobs[i].draw();
  }
}

function genNewBlobs(amount) {
    for (var i = 0; i < amount; i++) {
      allBlobs.push(new Blob(15, 15, 20, 400, "blue"));
      console.log(allBlobs.length);
    }
}




function loop(timestamp) {
  var progress = timestamp - lastRender;

  if (menuOn == false) {
    update(progress);
    draw();
  } else {
    menu();
  }

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}
var lastRender = 0;
window.requestAnimationFrame(loop);