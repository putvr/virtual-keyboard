// const ANIMATION_TIMEOUT = 300;

import data from './data';

const PRESSED_BUTTON = 'btn--pressed';

export default class {
  constructor(element) {
    this.layoit = 'en';
    this.caps = false;
    this.root = element;
  }

  init() {
    this.render(this.root);
  }

  createButton(key) {
    const b = document.createElement('button');
    b.classList.add('btn');

    b.dataset.code = key.code;
    b.textContent = key.en;

    // if (!key.class) {
    //   b.classList.add(key.class);
    // }

    return b;
  }

  render(element) {
    // create container
    const wrapper = document.createElement('div');
    wrapper.classList.toggle('container');
    element.append(wrapper);

    console.log('data :>> ', data);

    for (const r of data.keys) {
      // create rows
      const row = document.createElement('div');
      row.classList.add('row');
      wrapper.append(row);

      // create keys
      for (const key of r) {
        row.append(this.createButton(key));
      }
    }
  }

  press(code) {
    console.log(code);

    const b = document.querySelector(`[data-code="${code}"]`);

    // if (b.classList.contains(PRESSED_BUTTON)){
    //   return
    // }
    b.classList.add(PRESSED_BUTTON);
  }

  release(code) {
    const b = document.querySelector(`[data-code="${code}"]`);
    // setTimeout(
    //   () => b.classList.remove(PRESSED_BUTTON),
    //   ANIMATION_TIMEOUT
    // )
    b.classList.remove(PRESSED_BUTTON);
  }
}
