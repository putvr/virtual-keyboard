import './style.scss';
import Display from './components/Output';
import Keyboard from './components/Input';
import { data, getCodeFromEvent, renderTitle } from './utils';

const ANIMATION_TIMEOUT = 100;

const state = {
  lang: localStorage.getItem('lang') || 'en',
  text: '',
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
      k.release(action.code, action.ctrlKey, action.altKey);
      d.add(action);
      break;

    case 'click':
      handleKeyClick(action);
      break;
    default:
  }
};

renderTitle('Virtual keyboard');
d.init();
k.init();

document.addEventListener('keydown', dispacher);
document.addEventListener('keyup', dispacher);
document.addEventListener('click', dispacher);
