import { codeToValue } from './data';

const PRESSED_BUTTON = 'btn--pressed';
// const INFO_TEXT = `
// Тесмтирование выполняет на Windows
// Переключение раскладки выполняется     `;

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
    for (const r of this.state.data.keys) {
      // create rows
      const row = document.createElement('div');
      row.classList.add('row');
      this.wrapper.append(row);

      // create keys
      for (const key of r) {
        row.append(this.createButton(key));
      }
    }

    // create info
    this.info = document.createElement('div');
    this.info.classList.add('row');
    this.info.textContent = this.state.lang;
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

  release(code) {
    if (code === 'CapsLock' && this.state.caps) {
      this.toggleUpperCase(this.state.caps);
      return;
    }
    if (code === 'ShiftLeft') {
      this.toggleUpperCase(false);
    }

    const b = document.querySelectorAll(`.btn-${code.toLowerCase()}`);

    if (b) {
      b.forEach((e) => e.classList.remove(PRESSED_BUTTON));
    }
  }

  switchLang() {
    const newLang = (this.state.lang === 'en') ? 'ru' : 'en';

    this.info.textContent = newLang;
    this.state.lang = newLang;

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
