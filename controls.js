var state = {
  pressedKeys: {
    p1left: false,
    p1right: false,
    p2left: false,
    p2right: false
  }
}

var keyMap = {
  68: 'p1right',
  65: 'p1left',
  39: 'p2right',
  37: 'p2left',
};

function keydown(event) {
  var key = keyMap[event.keyCode];
  state.pressedKeys[key] = true;
};

function keyup(event) {
  var key = keyMap[event.keyCode];
  state.pressedKeys[key] = false;
};