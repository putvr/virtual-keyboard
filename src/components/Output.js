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
    // this.textArea.readOnly = true;
    this.textArea.contentEditable = true;
    this.textArea.classList.toggle('display');

    this.container.append(this.textArea);

    this.textArea.addEventListener('oncut', (e) => e.preventDefault(), false);
    this.textArea.addEventListener('onpaste', (e) => e.preventDefault(), false);
    this.textArea.addEventListener('keydown', (e) => e.preventDefault(), false);
  }

  add(event) {
    const code = getCodeFromEvent(event);
    event.preventDefault();

    if (code.startsWith('Num')) return;
    if (code.startsWith('F')) return;

    let s = '';

    switch (code) {
      case 'Delete':
        this.delete();
        break;

      case 'Backspace':
        this.back();
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
      case 'Home':
      case 'End':
      case 'Insert':
      case 'Escape':
      case 'PageUp':
      case 'PageDown':
      case 'OSLeft':
      case 'OSRight':
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
    // const l = offset || this.textArea.textContent.length;

    this.textArea.textContent = this.textArea.textContent.slice(0, offset) + s
    + this.textArea.textContent.slice(offset);

    this.focus(offset + 1);
  }

  // WTF I`m doing? 🤦🏻‍♂️😱🤯
  delete() {
    const offset = this.textArea.selectionStart;
    this.textArea.textContent = this.textArea.textContent.slice(0, offset)
    + this.textArea.textContent.slice(offset + 1);
    this.focus(offset - 1);
  }

  back() {
    const offset = this.textArea.selectionStart;

    this.textArea.textContent = this.textArea.textContent.slice(0, offset - 1)
    + this.textArea.textContent.slice(offset);

    const o2 = (offset <= 1) ? 0 : offset - 2;

    this.textArea.setSelectionRange(o2, o2 + 1);
  }

  focus(offset = false) {
    const l = offset || this.textArea.textContent.length;
    this.textArea.focus();
    this.textArea.setSelectionRange(l, l);
  }
}
