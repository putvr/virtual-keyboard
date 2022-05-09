import { codeToValue, getCodeFromEvent } from './data';

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
    // this.textArea.disabled = true;
    this.textArea.classList.toggle('display');

    this.container.append(this.textArea);

    // cursor
    // this.cursor = document.createElement('div');
    // this.cursor.classList.toggle('cursor');
    // this.cursor = [0, 0];
    // this.container.append(this.cursor);
  }

  add(event) {
    const code = getCodeFromEvent(event);

    console.log(event);

    let s = '';

    switch (code) {
      case 'Delete':
        console.log('delete!');
        break;

      case 'Backspace':
        console.log('Backspace!');
        this.delete();
        break;

      case 'AltRight':
      case 'AltLeft':
        console.log('Alt!');
        break;

      case 'MetaRight':
      case 'MetaLeft':
        console.log('Meta!');
        break;

      case 'ShiftLeft':
      case 'ShiftRight':
        console.log('Shift!');
        break;

      case 'ControlLeft':
        break;

      case 'CapsLock':
        this.toggleCaps();
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
