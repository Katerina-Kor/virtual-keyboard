import { keysInEnglish } from "../../data/keys.js";
import { createKeyButton } from "../button/button.js";
import { input } from "../input-box/input-box.js";

const keyboard = createWrapper('div', 'keyboard');
let keys;
const rows = [];
const buttons = [];
const body = document.body;

if (!keys) keys = keysInEnglish;

for (let i = 0; i < 5; i++) {
  const row = createWrapper('div', 'keyboard__row');
  rows.push(row);
  keyboard.append(row);
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


function createWrapper(tagName, className) {
  const wrapper = document.createElement(tagName);
  wrapper.classList.add(className);
  return wrapper;
}

input.addEventListener('blur', () => input.focus());
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
    if (elem.classList.contains('active')) {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toUpperCase();
        }
      });
    } else {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toLowerCase();
        }
      });
    }
    return;
  }

  if (elem.classList.contains('Enter')) {
    input.setRangeText('\n', input.selectionStart, input.selectionEnd, 'end');
    return;
  }

  if (elem.classList.contains('ShiftLeft')) {
    buttons[0].innerText = '~';
    buttons[1].innerText = '!';
    buttons[2].innerText = '@';
    buttons[3].innerText = '#';
    buttons[4].innerText = '$';
    buttons[5].innerText = '%';
    buttons[6].innerText = '^';
    buttons[7].innerText = '&';
    buttons[8].innerText = '*';
    buttons[9].innerText = '(';
    buttons[10].innerText = ')';
    buttons[11].innerText = '_';
    buttons[12].innerText = '+';
    buttons[25].innerText = '{';
    buttons[26].innerText = '}';
    buttons[38].innerText = ':';
    buttons[39].innerText = '"';
    buttons[40].innerText = '|';
    buttons[50].innerText = '<';
    buttons[51].innerText = '>';
    buttons[52].innerText = '?';

    if (buttons[28].classList.contains('active')) {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toLowerCase();
        }
      })
    } else {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toUpperCase();
        }
      })
    }
    return;
  }

  if (elem.classList.contains('ShiftRight')) {
    buttons[0].innerText = '~';
    buttons[1].innerText = '!';
    buttons[2].innerText = '@';
    buttons[3].innerText = '#';
    buttons[4].innerText = '$';
    buttons[5].innerText = '%';
    buttons[6].innerText = '^';
    buttons[7].innerText = '&';
    buttons[8].innerText = '*';
    buttons[9].innerText = '(';
    buttons[10].innerText = ')';
    buttons[11].innerText = '_';
    buttons[12].innerText = '+';
    buttons[25].innerText = '{';
    buttons[26].innerText = '}';
    buttons[38].innerText = ':';
    buttons[39].innerText = '"';
    buttons[40].innerText = '|';
    buttons[50].innerText = '<';
    buttons[51].innerText = '>';
    buttons[52].innerText = '?';

    if (buttons[28].classList.contains('active')) {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toLowerCase();
        }
      })
    } else {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toUpperCase();
        }
      })
    }
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

  if (elem.classList.contains('ShiftLeft') || elem.classList.contains('ShiftRight')) {
    buttons[0].innerText = '`';
    buttons[1].innerText = '1';
    buttons[2].innerText = '2';
    buttons[3].innerText = '3';
    buttons[4].innerText = '4';
    buttons[5].innerText = '5';
    buttons[6].innerText = '6';
    buttons[7].innerText = '7';
    buttons[8].innerText = '8';
    buttons[9].innerText = '9';
    buttons[10].innerText = '0';
    buttons[11].innerText = '-';
    buttons[12].innerText = '=';
    buttons[25].innerText = '[';
    buttons[26].innerText = ']';
    buttons[38].innerText = ';';
    buttons[39].innerText = '\'';
    buttons[40].innerText = '\\';
    buttons[50].innerText = ',';
    buttons[51].innerText = '.';
    buttons[52].innerText = '/';

    if (buttons[28].classList.contains('active')) {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toUpperCase();
        }
      })
    } else {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toLowerCase();
        }
      })
    }
    return;
  }
}

function keyDownHandler(event) {
  event.preventDefault();

  let code = event.code;
  let elem = buttons.find(item => item.classList.contains(code));

  if (elem && elem.classList.contains('CapsLock')) {
    elem.classList.toggle('active');
  } else if (elem) {
    elem.classList.add('active');
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
    if (elem.classList.contains('active')) {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toUpperCase();
        }
      });
    } else {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toLowerCase();
        }
      });
    }
    return;
  }

  if (code == 'Enter') {
    input.setRangeText('\n', input.selectionStart, input.selectionEnd, 'end');
    return;
  }

  if (code == 'ShiftLeft') {
    buttons[0].innerText = '~';
    buttons[1].innerText = '!';
    buttons[2].innerText = '@';
    buttons[3].innerText = '#';
    buttons[4].innerText = '$';
    buttons[5].innerText = '%';
    buttons[6].innerText = '^';
    buttons[7].innerText = '&';
    buttons[8].innerText = '*';
    buttons[9].innerText = '(';
    buttons[10].innerText = ')';
    buttons[11].innerText = '_';
    buttons[12].innerText = '+';
    buttons[25].innerText = '{';
    buttons[26].innerText = '}';
    buttons[38].innerText = ':';
    buttons[39].innerText = '"';
    buttons[40].innerText = '|';
    buttons[50].innerText = '<';
    buttons[51].innerText = '>';
    buttons[52].innerText = '?';

    if (buttons[28].classList.contains('active')) {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toLowerCase();
        }
      })
    } else {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toUpperCase();
        }
      })
    }
    return;
  }

  if (code == 'ShiftRight') {
    buttons[0].innerText = '~';
    buttons[1].innerText = '!';
    buttons[2].innerText = '@';
    buttons[3].innerText = '#';
    buttons[4].innerText = '$';
    buttons[5].innerText = '%';
    buttons[6].innerText = '^';
    buttons[7].innerText = '&';
    buttons[8].innerText = '*';
    buttons[9].innerText = '(';
    buttons[10].innerText = ')';
    buttons[11].innerText = '_';
    buttons[12].innerText = '+';
    buttons[25].innerText = '{';
    buttons[26].innerText = '}';
    buttons[38].innerText = ':';
    buttons[39].innerText = '"';
    buttons[40].innerText = '|';
    buttons[50].innerText = '<';
    buttons[51].innerText = '>';
    buttons[52].innerText = '?';

    if (buttons[28].classList.contains('active')) {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toLowerCase();
        }
      })
    } else {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toUpperCase();
        }
      })
    }
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

  input.setRangeText(elem.innerText, input.selectionStart, input.selectionEnd, 'end');
}

function keyUpHandler(event) {
  let code = event.code;
  let elem = buttons.find(item => item.classList.contains(code));

  if (elem && elem.classList.contains('CapsLock')) {
    return;
  } else if (elem) elem.classList.remove('active');

  if (elem.classList.contains('ShiftLeft') || elem.classList.contains('ShiftRight')) {
    buttons[0].innerText = '`';
    buttons[1].innerText = '1';
    buttons[2].innerText = '2';
    buttons[3].innerText = '3';
    buttons[4].innerText = '4';
    buttons[5].innerText = '5';
    buttons[6].innerText = '6';
    buttons[7].innerText = '7';
    buttons[8].innerText = '8';
    buttons[9].innerText = '9';
    buttons[10].innerText = '0';
    buttons[11].innerText = '-';
    buttons[12].innerText = '=';
    buttons[25].innerText = '[';
    buttons[26].innerText = ']';
    buttons[38].innerText = ';';
    buttons[39].innerText = '\'';
    buttons[40].innerText = '\\';
    buttons[50].innerText = ',';
    buttons[51].innerText = '.';
    buttons[52].innerText = '/';

    if (buttons[28].classList.contains('active')) {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toUpperCase();
        }
      })
    } else {
      buttons.forEach((button, index) => {
        if (index == 0 || index >= 15 && index <= 26 || index >= 29 && index <= 39 || index >= 43 && index <= 51) {
          button.innerText = button.innerText.toLowerCase();
        }
      })
    }
    return;
  }
}

export { keyboard };
