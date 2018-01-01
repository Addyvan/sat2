
/* 
NEEDS DOING:
- list collision points
- add gravity
- ...

*/


// global variables
var randNum = 0;
var allBlobs = [];
var currentLoop = 0;
var player1 = new Paddle(1);
var player2 = new Paddle(2);

function update(progress) {
  // Update the state of the game
  currentLoop++;

  // Generate new blobs and delete old ones 
  if (currentLoop % 150 == 0 && allBlobs.length < MAX_BLOBS) {
    genNewBlobs(1);
  }
  if (allBlobs.length >= MAX_BLOBS) {
    console.log("deleting blob");
    allBlobs.shift();
  } 

  // Move the blobs based on their current velocity
  for (var i = 0; i < allBlobs.length; i++) {
    allBlobs[i].move();
  }

  // PADDLE CONTROLS
  if (state.pressedKeys.a == true) {
    player1.rotateLeft();
  }
  if (state.pressedKeys.left == true) {
    player2.rotateLeft();
  }
  if (state.pressedKeys.d == true) {
    player1.rotateRight();
  }
  if (state.pressedKeys.right == true) {
    player2.rotateRight();
  }
}

function draw() {

  // Draw the shit
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw all the blobs
  for (var i = 0; i < allBlobs.length; i++) {
    allBlobs[i].draw();
  }
  player1.draw();
  player2.draw();
}

function genNewBlobs(amount) {
    for (var i = 0; i < amount; i++) {
      randNum = Math.random();
      // args for blob are (height, width, weight, x, color)
      if (randNum > 0.5) {
        allBlobs.push(new Blob(15, 15, 20, randomIntFromInterval(0,800), PLAYER_ONE_COLOR));
      } else {
        allBlobs.push(new Blob(15, 15, 20, randomIntFromInterval(0,800), PLAYER_TWO_COLOR));
      }
    }
}

// Generate a random number. Source: 
// "https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript"
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
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