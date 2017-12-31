var state = {
  pressedKeys: {
    p1left: false,
    p1right: false,
    p2left: false,
    p2right: false,
    w: false,
    s: false,
    up: false,
    down: false,
    enter: false
  }
};

var keyMap = {
  68: 'p1right',
  65: 'p1left',
  39: 'p2right',
  37: 'p2left',
  87: 'w',
  83: 's',
  38: 'up',
  40: 'down',
  13: 'enter'
};

function keydown(event) {
  var key = keyMap[event.keyCode];
  state.pressedKeys[key] = true;
};

function keyup(event) {
  var key = keyMap[event.keyCode];
  state.pressedKeys[key] = false;
};

window.addEventListener("keydown", keydown, false);
window.addEventListener("keyup", keyup, false);