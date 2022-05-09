import { codeToValue, getCodeFromEvent } from '../utils';

export default class {
  constructor(element, state) {
    this.root = element;
    this.state = state;
  }

  init() {
    // container
    this.container = document.createElement('div');
    this.container.classList.toggle('container');

    this.root.append(this.container);

    // textarea
    this.textArea = document.createElement('textarea');
    this.textArea.cols = 70;
    this.textArea.rows = 10;
    this.textArea.tabIndex = -1;
    this.textArea.autofocus = true;
    this.textArea.readOnly = true;
    this.textArea.classList.toggle('display');

    this.container.append(this.textArea);
  }

  add(event) {
    const code = getCodeFromEvent(event);
    event.preventDefault();

    let s = '';

    switch (code) {
      case 'Delete':
        this.delete();
        break;

      case 'Backspace':
        this.delete();
        break;

      // ignore mods
      case 'AltRight':
      case 'AltLeft':
      case 'MetaRight':
      case 'MetaLeft':
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'ControlLeft':
      case 'ControlRight':
      case 'CapsLock':
      case 'ContextMenu':
        break;

      case 'Enter':
        s = '\n';
        break;
      case 'Tab':
        s = '\t';
        break;
      case 'Space':
        s = ' ';
        break;

      default:
        s = codeToValue(code, this.state.lang, this.state.caps || event.shiftKey);
    }

    this.textArea.textContent += s;
  }

  delete() {
    this.textArea.textContent = this.textArea.textContent.slice(0, -1);
  }
}
