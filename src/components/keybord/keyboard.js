import { keysInEnglish } from "../../data/keys.js";
import { createKeyButton } from "../button/button.js";

function createWrapper(className) {
  const wrapper = document.createElement('div');
  wrapper.classList.add(className);
  return wrapper;
}

const KEYBOARD = createWrapper('keyboard');
let keys;
if (!keys) keys = keysInEnglish;

const rows = [];
const buttons = []

for (let i = 0; i < 5; i++) {
  const row = createWrapper('keyboard__row');
  rows.push(row);
  KEYBOARD.append(row);
}

for (let key in keys) {
  let button = createKeyButton('key');
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

export { KEYBOARD };
