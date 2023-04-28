import createInputBox from './components/input-box/input-box.js';
import { KEYBOARD } from './components/keybord/keyboard.js';

const inputComponent = createInputBox();

document.body.append(inputComponent);
document.body.append(KEYBOARD);
