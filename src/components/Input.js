import { codeToValue } from '../utils';

const PRESSED_BUTTON = 'btn--pressed';
const INFO_TEXT = `
Привет!<br>
Переключение раскладки выполняется через стандартный Ctrl + Alt<br>
Или клику по этой надписи. Сейчас выбрана 
`;

export default class {
  constructor(element, state) {
    this.state = state;
    this.root = element;
  }

  init() {
    this.render(this.root);

    this.info.addEventListener('click', () => this.switchLang());
  }

  createButton(key) {
    const b = document.createElement('button');
    b.classList.add('btn');
    b.classList.add(`btn-${key.toLowerCase()}`);
    b.tabIndex = -1;
    b.dataset.code = key;

    b.textContent = codeToValue(key, this.state.lang);

    return b;
  }

  render(element) {
    // create container
    this.wrapper = document.createElement('div');
    this.wrapper.classList.toggle('container');
    element.append(this.wrapper);

    // create keyboard
    this.state.data.keys.forEach((rowsElements) => {
      // create rows
      const row = document.createElement('div');
      row.classList.add('row');
      this.wrapper.append(row);

      // create keys
      rowsElements.forEach((key) => row.append(this.createButton(key)));
    });

    // create info
    this.info = document.createElement('div');
    this.info.classList.add('row', 'info');
    this.info.innerHTML = INFO_TEXT + this.state.lang;
    this.wrapper.append(this.info);
  }

  press(code) {
    const b = document.querySelectorAll(`.btn-${code.toLowerCase()}`);
    if (b) {
      b.forEach((e) => e.classList.add(PRESSED_BUTTON));
    }

    if (code === 'CapsLock') {
      this.state.caps = !this.state.caps;
      this.toggleUpperCase(this.state.caps);
    }
    if (code === 'ShiftLeft') {
      this.toggleUpperCase(true);
    }
  }

  release(code, isCtrlPressed = false, isAltPressed = false) {
    if (code === 'CapsLock' && this.state.caps) {
      this.toggleUpperCase(this.state.caps);
      return;
    }
    if (code === 'ShiftLeft') {
      this.toggleUpperCase(false);
    }
    if (code === 'AltLeft' && isCtrlPressed) {
      this.switchLang();
    }
    if (code === 'ControlLeft' && isAltPressed) {
      this.switchLang();
    }

    const b = document.querySelectorAll(`.btn-${code.toLowerCase()}`);

    if (b) {
      b.forEach((e) => e.classList.remove(PRESSED_BUTTON));
    }
  }

  switchLang() {
    const newLang = (this.state.lang === 'en') ? 'ru' : 'en';

    this.info.innerHTML = INFO_TEXT + newLang;
    this.state.lang = newLang;

    localStorage.setItem('lang', newLang);

    document.querySelectorAll('.btn').forEach((btn) => {
      const t = btn;

      t.textContent = codeToValue(t.dataset.code, this.state.lang, this.state.caps);
    });
  }

  toggleUpperCase(upper) {
    document.querySelectorAll('.btn').forEach((btn) => {
      const t = btn;

      t.textContent = codeToValue(t.dataset.code, this.state.lang, upper);
    });
  }
}
