export const data = {
  keys: [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],

    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketRight', 'BracketLeft', 'Backslash', 'Delete'],

    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],

    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftLeft'],

    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'MetaRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  ],

};

const mapping = {
  Backquote: {
    en: '`', ru: ']', caps_en: '~', caps_ru: '[',
  },
  Backslash: {
    en: '\\', ru: '\\', caps_en: '/', caps_ru: '/',
  },
  Minus: {
    en: '-', ru: '-', caps_en: '_', caps_ru: '_',
  },
  Equal: {
    en: '=', ru: '=', caps_en: '+', caps_ru: '+',
  },
  Semicolon: {
    en: ';', ru: 'ж', caps_en: ':', caps_ru: 'Ж',
  },
  Quote: {
    en: '\'', ru: 'э', caps_en: '"', caps_ru: 'Э',
  },
  Enter: {
    en: 'Enter', ru: 'Enter', caps_en: 'Enter', caps_ru: 'Enter',
  },
  Comma: {
    en: ',', ru: 'б', caps_en: '<', caps_ru: 'Б',
  },
  Period: {
    en: '.', ru: 'ю', caps_en: '>', caps_ru: 'Ж',
  },
  Slash: {
    en: '/', ru: '.', caps_en: '?', caps_ru: ',',
  },
  Delete: {
    en: 'Del', ru: 'Del', caps_en: 'Del', caps_ru: 'Del',
  },

  // Arrows
  ArrowUp: {
    en: '↑', ru: '↑', caps_en: '↑', caps_ru: '↑',
  },
  ArrowDown: {
    en: '↓', ru: '↓', caps_en: '↓', caps_ru: '↓',
  },
  ArrowLeft: {
    en: '←', ru: '←', caps_en: '←', caps_ru: '←',
  },
  ArrowRight: {
    en: '→', ru: '→', caps_en: '→', caps_ru: '→',
  },

  // Digits
  Digit1: {
    en: 1, ru: 1, caps_en: '!', caps_ru: '!',
  },
  Digit2: {
    en: 2, ru: 2, caps_en: '@', caps_ru: '"',
  },
  Digit3: {
    en: 3, ru: 3, caps_en: '#', caps_ru: '№',
  },
  Digit4: {
    en: 4, ru: 4, caps_en: '$', caps_ru: ';',
  },
  Digit5: {
    en: 5, ru: 5, caps_en: '%', caps_ru: '%',
  },
  Digit6: {
    en: 6, ru: 6, caps_en: '^', caps_ru: ':',
  },
  Digit7: {
    en: 7, ru: 7, caps_en: '*', caps_ru: '?',
  },
  Digit8: {
    en: 8, ru: 8, caps_en: '&', caps_ru: '*',
  },
  Digit9: {
    en: 9, ru: 9, caps_en: '(', caps_ru: '(',
  },
  Digit0: {
    en: 0, ru: 0, caps_en: ')', caps_ru: ')',
  },

  // Special
  BracketRight: {
    en: '[', ru: 'х', caps_en: '{', caps_ru: 'X',
  },
  BracketLeft: {
    en: ']', ru: 'ъ', caps_en: '}', caps_ru: 'Ъ',
  },

  // Mod
  CapsLock: {
    en: 'Caps', ru: 'Caps', caps_en: 'Caps', caps_ru: 'Caps',
  },
  ShiftLeft: {
    en: 'Shift', ru: 'Shift', caps_en: 'Shift', caps_ru: 'Shift',
  },
  ControlLeft: {
    en: 'Ctrl', ru: 'Ctrl', caps_en: 'Ctrl', caps_ru: 'Ctrl',
  },
  AltLeft: {
    en: 'Alt', ru: 'Alt', caps_en: 'Alt', caps_ru: 'Alt',
  },
  MetaLeft: {
    en: 'Meta', ru: 'Meta', caps_en: 'Meta', caps_ru: 'Meta',
  },
  MetaRight: {
    en: 'Meta', ru: 'Meta', caps_en: 'Meta', caps_ru: 'Meta',
  },
  Space: {
    en: '', ru: '', caps_en: '', caps_ru: '',
  },

};

const en2ru = (char) => {
  const s = {
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
  };

  return s[char.toLowerCase()] || '?';
};

export const getCodeFromEvent = (event) => {
  if (event instanceof PointerEvent) {
    return event.target.dataset.code;
  }

  if (event instanceof KeyboardEvent) {
    return event.code;
  }

  throw Error('Wrong Event!');
};

export const codeToValue = (code, lang, caps = false) => {
  let val = code;

  if (code.startsWith('Key')) {
    val = code[code.length - 1];

    if (lang === 'ru') {
      val = en2ru(val);
    }

    return caps ? val.toUpperCase() : val.toLowerCase();
  }

  if (!mapping[code]) {
    console.log(`Add ${code}`);
    return val;
  }
  const mod = (caps ? 'caps_' : '');

  val = String(mapping[code][mod + lang]);

  return val;
};
