/*

- The keydown and keyup functions are specially named to listen to events corresponding to key up / key downb. 
- To add new keys just find the key code and add it to the key map and add a boolean var in pressed keys. 


*/

var state = {
  pressedKeys: {
    d: false,
    a: false,
    right: false,
    left: false,
    w: false,
    s: false,
    up: false,
    down: false,
    enter: false
  }
};

var keyMap = {
  68: 'd',
  65: 'a',
  39: 'right',
  37: 'left',
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