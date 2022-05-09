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
    this.textArea.autofocus = true;
    // this.textArea.disabled = true;
    this.textArea.classList.toggle('display');

    this.container.append(this.textArea);

    this.textArea.addEventListener('input', (e) => {
      console.log(e, e.target.selectionStart);
    });

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
        this.delete();
        break;

      case 'Backspace':
        this.delete(true);
        break;

      // ignore mods
      case 'AltRight':
      case 'AltLeft':
      case 'MetaRight':
      case 'MetaLeft':
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'ControlLeft':
      case 'CapsLock':
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

    const offset = this.textArea.selectionStart;

    this.textArea.textContent = this.textArea.textContent.slice(0, offset) + s
    + this.textArea.textContent.slice(offset);

    if (offset === 0) {
      const len = this.textArea.textContent.length;
      this.textArea.focus();
      this.textArea.setSelectionRange(len, len);
    }

    // const len = this.textArea.textContent.length;
    // this.textArea.focus();
    // this.textArea.setSelectionRange(len, len);
  }

  delete(next = true) {
    const text = this.textArea.textContent;

    if (text.length === 0) { return; }
    // find cursor position
    const offset = this.textArea.selectionStart;

    console.log('offset :>> ', `${offset}${next}${this.textArea.selectionEnd}`);

    this.textArea.textContent = this.textArea.textContent.slice(0, offset)
    + this.textArea.textContent.slice(offset);
  }
}
