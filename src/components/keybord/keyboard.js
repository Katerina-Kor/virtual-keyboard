import { keysInEnglish } from "../../data/keys.js";
import { createKeyButton } from "../button/button.js";
import { input } from "../input-box/input-box.js";

function createWrapper(className) {
  const wrapper = document.createElement('div');
  wrapper.classList.add(className);
  return wrapper;
}

const KEYBOARD = createWrapper('keyboard');
let keys;
if (!keys) keys = keysInEnglish;

const rows = [];
const buttons = [];

for (let i = 0; i < 5; i++) {
  const row = createWrapper('keyboard__row');
  rows.push(row);
  KEYBOARD.append(row);
}

for (let key in keys) {
  let button = createKeyButton(key);
  button.innerText = keys[key];
  buttons.push(button);
}

for (let i = 0; i < buttons.length; i++) {
  if (i < 14) rows[0].append(buttons[i]);
  if (i > 13 && i < 28) rows[1].append(buttons[i]);
  if (i > 27 && i < 42) rows[2].append(buttons[i]);
  if (i > 41 && i < 55) rows[3].append(buttons[i]);
  if (i > 54) rows[4].append(buttons[i]);
}


let body = document.body;

body.addEventListener('mousedown', buttonDownHandler);
body.addEventListener('mouseup', buttonUpHandler);
body.addEventListener('keydown', keyDownHandler);
body.addEventListener('keyup', keyUpHandler);

function buttonDownHandler(event) {
  let elem = event.target;
  if (!elem.classList.contains('button')) return;

  if (elem.classList.contains('CapsLock')) {
    elem.classList.toggle('active');
  } else {
    elem.classList.add('active');
  }

  if (elem.classList.contains('Backspace')) {
    if (input.selectionStart === 0) return;
    input.setRangeText('', input.selectionStart - 1, input.selectionEnd, 'end');
    return;
  }
  if (elem.classList.contains('Tab')) {
    input.setRangeText('    ', input.selectionStart, input.selectionEnd, 'end');
    return;
  }
  if (elem.classList.contains('Delete')) {
    input.setRangeText('', input.selectionStart, input.selectionEnd + 1, 'end');
    return;
  }
  if (elem.classList.contains('CapsLock')) {
    //??
    return;
  }
  if (elem.classList.contains('Enter')) {
    input.setRangeText('\n', input.selectionStart, input.selectionEnd, 'end');
    return;
  }
  if (elem.classList.contains('ShiftLeft')) {
    //??
    return;
  }
  if (elem.classList.contains('ShiftRight')) {
    //??
    return;
  }
  if (elem.classList.contains('ControlLeft')) {
    //??
    return;
  }
  if (elem.classList.contains('MetaLeft')) {
    //??
    return;
  }
  if (elem.classList.contains('AltLeft')) {
    //??
    return;
  }
  if (elem.classList.contains('Space')) {
    input.setRangeText(' ', input.selectionStart, input.selectionEnd, 'end');
    return;
  }
  if (elem.classList.contains('AltRight')) {
    //??
    return;
  }
  if (elem.classList.contains('ControlRight')) {
    //??
    return;
  }
  input.setRangeText(elem.innerText, input.selectionStart, input.selectionEnd, 'end');
}

function buttonUpHandler(event) {
  let elem = event.target;
  if (!elem.classList.contains('button')) return;

  if (elem.classList.contains('CapsLock')) {
    return;
  } else {
    elem.classList.remove('active');
  }
}

function keyUpHandler(event) {
  let code = event.code;
  let button = buttons.find(item => item.classList.contains(code));
  if (button && button.classList.contains('CapsLock')) {
    return;
  } else if (button) button.classList.remove('active');
}

function keyDownHandler(event) {
  event.preventDefault();
  let code = event.code;
  let button = buttons.find(item => item.classList.contains(code));
  if (button && button.classList.contains('CapsLock')) {
    button.classList.toggle('active');
  } else if (button) {
    button.classList.add('active');
  } else {
    return;
  }
  if (code == 'Backspace') {
    if (input.selectionStart === 0) return;
    input.setRangeText('', input.selectionStart - 1, input.selectionEnd, 'end');
    return;
  }
  if (code == 'Tab') {
    input.setRangeText('    ', input.selectionStart, input.selectionEnd, 'end');
    return;
  }
  if (code == 'Delete') {
    input.setRangeText('', input.selectionStart, input.selectionEnd + 1, 'end');
    return;
  }
  if (code == 'CapsLock') {
    //??
    return;
  }
  if (code == 'Enter') {
    input.setRangeText('\n', input.selectionStart, input.selectionEnd, 'end');
    return;
  }
  if (code == 'ShiftLeft') {
    //??
    return;
  }
  if (code == 'ShiftRight') {
    //??
    return;
  }
  if (code == 'ControlLeft') {
    //??
    return;
  }
  if (code == 'MetaLeft') {
    //??
    return;
  }
  if (code == 'AltLeft') {
    //??
    return;
  }
  if (code == 'Space') {
    input.setRangeText(' ', input.selectionStart, input.selectionEnd, 'end');
    return;
  }
  if (code == 'AltRight') {
    //??
    return;
  }
  if (code == 'ControlRight') {
    //??
    return;
  }
  input.setRangeText(keys[code], input.selectionStart, input.selectionEnd, 'end');
}

input.addEventListener('blur', () => input.focus());

console.log(buttons);
export { KEYBOARD };
