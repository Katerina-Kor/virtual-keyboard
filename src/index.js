import { textarea } from './components/components-creation/components-creation.js';
import {
  keyboard, heading, firstParagraph, secondParagraph,
} from './components/keyboard/keyboard.js';

document.body.append(heading);
document.body.append(textarea);
document.body.append(keyboard);
document.body.append(firstParagraph);
document.body.append(secondParagraph);
