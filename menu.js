/*
Shitty temp menu
*/


var selected = 0;
var menuOn = true;
var colors = [selectedColor, "#FFFFFF", "#FFFFFF", "#FFFFFF"];
var options = ["PLAY", "SETTINGS", "IDK", "IDK"]
var framesSinceLastMenuMove = 0;
var moving = false;

function menu() {
  if (state.pressedKeys.enter == true && selected == 0) {
    console.log("starting the game");
    menuOn = false;
  }
  if (state.pressedKeys.w || state.pressedKeys.up) {
    moving = true;
    if (framesSinceLastMenuMove == 0) {
      menuUp();
    }
  }
  if (state.pressedKeys.s || state.pressedKeys.down) {
    moving = true;
    if (framesSinceLastMenuMove == 0) {
      menuDown();
    }
    
  }
  if (moving == true) {
    framesSinceLastMenuMove++;
    if (framesSinceLastMenuMove > 15) {
      moving = false;
      framesSinceLastMenuMove = 0;
    }
  }
  console.log(framesSinceLastMenuMove);
  
  menuDraw();
}

function menuUp() {
  selected--;
  if (selected < 0) {
    selected = 3;
  }
}

function menuDown() {
  selected++;
  if (selected > 3) {
    selected = 0;
  }
}

function menuDraw() {
  switch(selected) {
    case 0: colors = [selectedColor, "#FFFFFF", "#FFFFFF", "#FFFFFF"]; break;
    case 1: colors = ["#FFFFFF", selectedColor, "#FFFFFF", "#FFFFFF"]; break;
    case 2: colors = ["#FFFFFF", "#FFFFFF", selectedColor, "#FFFFFF"]; break;
    case 3: colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", selectedColor]; break;
    default: console.log("menu error");
  }

  for (var i = 0; i < colors.length; i++) {
    ctx.strokeStyle = "black";
    ctx.fillStyle = colors[i];
    ctx.strokeRect(100, 40 + i*(buttonHeight) + i*40, buttonWidth, buttonHeight);
    ctx.fillRect(100, 40 + i*(buttonHeight) + i*40, buttonWidth, buttonHeight);

    ctx.font="20px Georgia";
    ctx.fillStyle = "black";
    ctx.fillText(options[i], 350, 50 + (i+1)*buttonHeight + i*40 - buttonHeight/2);
  }
}