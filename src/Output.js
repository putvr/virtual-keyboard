export default class {
  constructor(element) {
    this.root = element;
  }

  init() {
    this.textArea = document.createElement('textarea');
    this.textArea.cols = 80;
    this.textArea.rows = 10;
    this.root.append(this.textArea);
  }

  add(text) {
    this.textArea.textContent += `${text}`;
  }

  delete() {
    this.textArea.textContent += this.textArea.textContent.slice(0, -1);
  }
}
