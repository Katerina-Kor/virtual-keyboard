import { keysInEnglish, keysInRussian } from '../../data/keys.js';
import { textarea, createWrapper } from '../components-creation/components-creation.js';
import { buttons, keyboard, exportKeys } from './keyboard-creation.js';

const { body } = document;
let keys = exportKeys;
const capsLockButton = buttons[28];
const altLeftButton = buttons[57];
const altRightButton = buttons[59];
const controlLeftButton = buttons[55];
const controlRightButton = buttons[60];
let currentButton;
const heading = createWrapper('h1', 'heading');
const firstParagraph = createWrapper('p', 'text');
const secondParagraph = createWrapper('p', 'text');

heading.innerText = 'Virtual keyboard';
firstParagraph.innerText = 'The keyboard was created in Windows OS';
secondParagraph.innerText = 'Press Ctrl + Alt to switch language';

function fillButtonsInner(...args) {
  if (args.length === 0) {
    let i = 0;
    Object.keys(keys).forEach((key) => {
      buttons[i].innerText = keys[key];
      i += 1;
    });

    if (capsLockButton.classList.contains('active')) {
      fillButtonsInner('CapsLock', 'up');
    }
  }

  if (args[0] === 'CapsLock' && args[1] === 'up') {
    buttons.forEach((button, index) => {
      if (index === 0 || (index >= 15 && index <= 26)
        || (index >= 29 && index <= 39) || (index >= 43 && index <= 51)) {
        const thisButton = button;
        thisButton.innerText = button.innerText.toUpperCase();
      }
    });
  }

  if (args[0] === 'CapsLock' && args[1] === 'down') {
    buttons.forEach((button, index) => {
      if (index === 0 || (index >= 15 && index <= 26)
        || (index >= 29 && index <= 39) || (index >= 43 && index <= 51)) {
        const thisButton = button;
        thisButton.innerText = button.innerText.toLowerCase();
      }
    });
  }

  if (args[0] === 'Shift' && args[1] === 'up' && keys === keysInEnglish) {
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

    if (capsLockButton.classList.contains('active')) {
      fillButtonsInner('CapsLock', 'down');
    } else {
      fillButtonsInner('CapsLock', 'up');
    }
  }

  if (args[0] === 'Shift' && args[1] === 'up' && keys === keysInRussian) {
    buttons[1].innerText = '!';
    buttons[2].innerText = '"';
    buttons[3].innerText = '№';
    buttons[4].innerText = ';';
    buttons[5].innerText = '%';
    buttons[6].innerText = ':';
    buttons[7].innerText = '?';
    buttons[8].innerText = '*';
    buttons[9].innerText = '(';
    buttons[10].innerText = ')';
    buttons[11].innerText = '_';
    buttons[12].innerText = '+';
    buttons[40].innerText = '/';
    buttons[52].innerText = ',';

    if (capsLockButton.classList.contains('active')) {
      fillButtonsInner('CapsLock', 'down');
    } else {
      fillButtonsInner('CapsLock', 'up');
    }
  }

  if (args[0] === 'Shift' && args[1] === 'down' && keys === keysInEnglish) {
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

    if (capsLockButton.classList.contains('active')) {
      fillButtonsInner('CapsLock', 'up');
    } else {
      fillButtonsInner('CapsLock', 'down');
    }
  }

  if (args[0] === 'Shift' && args[1] === 'down' && keys === keysInRussian) {
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
    buttons[40].innerText = '\\';
    buttons[52].innerText = '.';

    if (capsLockButton.classList.contains('active')) {
      fillButtonsInner('CapsLock', 'up');
    } else {
      fillButtonsInner('CapsLock', 'down');
    }
  }
}

fillButtonsInner();

function buttonDownHandler(event) {
  const elem = event.target;
  currentButton = elem;
  if (!elem.classList.contains('button')) return;

  if (elem.classList.contains('CapsLock')) {
    elem.classList.toggle('active');
  } else {
    elem.classList.add('active');
  }

  if (elem.classList.contains('Backspace')) {
    if (textarea.selectionStart === 0 && textarea.selectionEnd === 0) return;
    if (textarea.selectionStart === 0) {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
      return;
    }
    if (textarea.selectionStart === textarea.selectionEnd) {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
    } else {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
    }

    return;
  }

  if (elem.classList.contains('Tab')) {
    textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, 'end');
    return;
  }

  if (elem.classList.contains('Delete')) {
    if (textarea.selectionStart === textarea.selectionEnd) {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
    } else {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
    return;
  }

  if (elem.classList.contains('CapsLock')) {
    if (elem.classList.contains('active')) {
      fillButtonsInner('CapsLock', 'up');
    } else {
      fillButtonsInner('CapsLock', 'down');
    }
    return;
  }

  if (elem.classList.contains('Enter')) {
    textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
    return;
  }

  if (elem.classList.contains('ShiftLeft')) {
    fillButtonsInner('Shift', 'up');
    return;
  }

  if (elem.classList.contains('ShiftRight')) {
    fillButtonsInner('Shift', 'up');
    return;
  }

  if (elem.classList.contains('ControlLeft')) {
    if (event.repeat === true) return;
    if (altLeftButton.classList.contains('active') || altRightButton.classList.contains('active')) {
      if (keys === keysInEnglish) {
        keys = keysInRussian;
      } else {
        keys = keysInEnglish;
      }
      fillButtonsInner();
    }
    return;
  }

  if (elem.classList.contains('MetaLeft')) {
    return;
  }

  if (elem.classList.contains('AltLeft')) {
    if (event.repeat === true) return;
    if (controlLeftButton.classList.contains('active') || controlRightButton.classList.contains('active')) {
      if (keys === keysInEnglish) {
        keys = keysInRussian;
      } else {
        keys = keysInEnglish;
      }
      fillButtonsInner();
    }
    return;
  }

  if (elem.classList.contains('Space')) {
    textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
    return;
  }

  if (elem.classList.contains('AltRight')) {
    if (event.repeat === true) return;
    if (controlLeftButton.classList.contains('active') || controlRightButton.classList.contains('active')) {
      if (keys === keysInEnglish) {
        keys = keysInRussian;
      } else {
        keys = keysInEnglish;
      }
      fillButtonsInner();
    }
    return;
  }

  if (elem.classList.contains('ControlRight')) {
    if (event.repeat === true) return;
    if (altLeftButton.classList.contains('active') || altRightButton.classList.contains('active')) {
      if (keys === keysInEnglish) {
        keys = keysInRussian;
      } else {
        keys = keysInEnglish;
      }
      fillButtonsInner();
    }
    return;
  }

  textarea.setRangeText(elem.innerText, textarea.selectionStart, textarea.selectionEnd, 'end');
}

function buttonUpHandler() {
  const elem = currentButton;

  if (!elem.classList.contains('button')) return;

  if (elem.classList.contains('CapsLock')) {
    return;
  }
  elem.classList.remove('active');

  if (elem.classList.contains('ShiftLeft') || elem.classList.contains('ShiftRight')) {
    fillButtonsInner('Shift', 'down');
  }
}

function keyDownHandler(event) {
  event.preventDefault();

  const { code } = event;
  const elem = buttons.find((item) => item.classList.contains(code));

  if (!elem) return;

  if (elem.classList.contains('CapsLock')) {
    elem.classList.toggle('active');
  } else {
    elem.classList.add('active');
  }

  if (code === 'Backspace') {
    if (textarea.selectionStart === 0 && textarea.selectionEnd === 0) return;
    if (textarea.selectionStart === 0) {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
      return;
    }
    if (textarea.selectionStart === textarea.selectionEnd) {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
    } else {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
    }

    return;
  }

  if (code === 'Tab') {
    textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, 'end');
    return;
  }

  if (code === 'Delete') {
    if (textarea.selectionStart === textarea.selectionEnd) {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
    } else {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
    return;
  }

  if (code === 'CapsLock') {
    if (elem.classList.contains('active')) {
      fillButtonsInner('CapsLock', 'up');
    } else {
      fillButtonsInner('CapsLock', 'down');
    }
    return;
  }

  if (code === 'Enter') {
    textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
    return;
  }

  if (code === 'ShiftLeft') {
    fillButtonsInner('Shift', 'up');
    return;
  }

  if (code === 'ShiftRight') {
    fillButtonsInner('Shift', 'up');
    return;
  }

  if (code === 'ControlLeft') {
    if (event.repeat === true) return;
    if (altLeftButton.classList.contains('active') || altRightButton.classList.contains('active')) {
      if (keys === keysInEnglish) {
        keys = keysInRussian;
      } else {
        keys = keysInEnglish;
      }
      fillButtonsInner();
    }
    return;
  }

  if (code === 'MetaLeft') {
    return;
  }

  if (code === 'AltLeft') {
    if (event.repeat === true) return;
    if (controlLeftButton.classList.contains('active') || controlRightButton.classList.contains('active')) {
      if (keys === keysInEnglish) {
        keys = keysInRussian;
      } else {
        keys = keysInEnglish;
      }
      fillButtonsInner();
    }
    return;
  }

  if (code === 'Space') {
    textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
    return;
  }

  if (code === 'AltRight') {
    if (event.repeat === true) return;
    if (controlLeftButton.classList.contains('active') || controlRightButton.classList.contains('active')) {
      if (keys === keysInEnglish) {
        keys = keysInRussian;
      } else {
        keys = keysInEnglish;
      }
      fillButtonsInner();
    }
    return;
  }

  if (code === 'ControlRight') {
    if (event.repeat === true) return;
    if (altLeftButton.classList.contains('active') || altRightButton.classList.contains('active')) {
      if (keys === keysInEnglish) {
        keys = keysInRussian;
      } else {
        keys = keysInEnglish;
      }
      fillButtonsInner();
    }
    return;
  }

  textarea.setRangeText(elem.innerText, textarea.selectionStart, textarea.selectionEnd, 'end');
}

function keyUpHandler(event) {
  const { code } = event;
  const elem = buttons.find((item) => item.classList.contains(code));

  if (!elem) return;

  if (elem?.classList.contains('CapsLock')) {
    return;
  }
  elem?.classList.remove('active');

  if (elem.classList.contains('ShiftLeft') || elem.classList.contains('ShiftRight')) {
    fillButtonsInner('Shift', 'down');
  }
}

textarea.addEventListener('blur', () => textarea.focus());
body.addEventListener('mousedown', buttonDownHandler);
body.addEventListener('mouseup', buttonUpHandler);
body.addEventListener('keydown', keyDownHandler);
body.addEventListener('keyup', keyUpHandler);
window.addEventListener('unload', () => {
  if (keys === keysInEnglish) {
    localStorage.setItem('keys', 'english');
  } else {
    localStorage.setItem('keys', 'russian');
  }
});

export {
  keyboard, heading, firstParagraph, secondParagraph,
};
