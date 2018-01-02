
/* 
NEEDS DOING:
- list all collision points
- create blob physics in sprites.js
- create game

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
    allBlobs[i].update(progress);
  }

  //resolve collisions
  resolveCollisions();
  // PADDLE CONTROLS
  //player1.update()
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

function checkCollision(paddle,ball){
  //https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
  //check for collision between paddle and ball
  //only calculate for balls which are above the paddle
  //console.log("checking collisions")
  //console.log(ball.x)
  //console.log(paddle.axis.x-PADDLE_WIDTH)

  paddle.updateLineEquation();

  if (paddle.start<ball.x && ball.x <paddle.end){
    var dist=this.distanceFromLine(paddle.a,paddle.b,paddle.c,ball.x,ball.y);
    //console.log(dist);
    //console.log(ball.width/2);
    //console.log(paddle.height/2);
    //console.log(333);
    if (dist<ball.width/2+paddle.height/2){
      return true;
    }
  }

  return false;
}

function distanceFromLine(a,b,c,x,y){
  //console.log([a,b,c,x,y]);
  return Math.abs(a*x+b*y+c)/Math.sqrt(a*a+b*b);
}

function resolveCollisions(){
  //detect all collisions and resolve accordingly
  //todo ball to ball collisions
  for(var i =0; i < allBlobs.length ; i++){
    if (checkCollision(player1,allBlobs[i])){
      //bounce off paddle todo
      allBlobs[i].velocity.y*=-1;
      console.log("collision with paddle 1!");
    }else if (checkCollision(player2,allBlobs[i]) ){
      //bounce off paddle todo
      allBlobs[i].velocity.y*=-1;
      console.log("collision with paddle 2!");
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

