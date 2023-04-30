import { keysInEnglish, keysInRussian } from '../../data/keys.js';
import { createWrapper, createKeyButton } from '../components-creation/components-creation.js';

const rows = [];
const buttons = [];
let initialKeys;
const language = localStorage.getItem('keys');

if (language === 'undefined' || language === 'english') {
  initialKeys = keysInEnglish;
} else {
  initialKeys = keysInRussian;
}
const exportKeys = initialKeys;

function createKeyboard() {
  const newKeyboard = createWrapper('div', 'keyboard');

  for (let i = 0; i < 5; i += 1) {
    const row = createWrapper('div', 'keyboard__row');
    rows.push(row);
    newKeyboard.append(row);
  }

  Object.keys(initialKeys).forEach((key) => {
    const button = createKeyButton(key);
    buttons.push(button);
  });

  for (let i = 0; i < buttons.length; i += 1) {
    if (i < 14) rows[0].append(buttons[i]);
    if (i > 13 && i < 28) rows[1].append(buttons[i]);
    if (i > 27 && i < 42) rows[2].append(buttons[i]);
    if (i > 41 && i < 55) rows[3].append(buttons[i]);
    if (i > 54) rows[4].append(buttons[i]);
  }

  return newKeyboard;
}

const keyboard = createKeyboard();

export { buttons, keyboard, exportKeys };
