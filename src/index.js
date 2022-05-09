import './style.scss';
import Display from './Output';
import Keyboard from './Input';
import { data, getCodeFromEvent } from './data';

const ANIMATION_TIMEOUT = 100;

const state = {
  lang: 'en',
  text: '',
  mods: {
    caps: false,
    shift: false,
    ctrl: false,
  },
};

state.data = data;

const d = new Display(document.getElementById('root'), state);
const k = new Keyboard(document.getElementById('root'), state);

const handleKeyClick = (action) => {
  if (action.target.tagName !== 'BUTTON') {
    return;
  }
  const code = getCodeFromEvent(action);

  k.press(code);
  d.add(action);
  setTimeout(() => k.release(code), ANIMATION_TIMEOUT);
};

const dispacher = (action) => {
  switch (action.type) {
    case 'keydown':
      k.press(action.code);
      break;

    case 'keyup':
      k.release(action.code);
      d.add(action);
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
