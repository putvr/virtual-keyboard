import './style.scss';

import Display from './Output';
import Keyboard from './Input';

const d = new Display(document.getElementById('root'));
const k = new Keyboard(document.getElementById('root'));

const handleKeyClick = (action) => {
  if (action.target.tagName !== 'BUTTON') {
    return;
  }
  console.log(action.type, action);
  // this.dispacher(action);
  // k.release(action.key);
};

const dispacher = (action) => {
  switch (action.type) {
    case 'keydown':
      k.press(action.key);
      break;
    case 'keyup':
      k.release(action.key);
      break;
    case 'click':
      handleKeyClick(action);
      break;
    default:
  }
};

d.init();
k.init();

document.addEventListener('keydown', dispacher);
document.addEventListener('keyup', dispacher);
document.addEventListener('click', dispacher);
