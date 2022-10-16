export type ColorType = 'primary' | 'secondary' | 'danger' | 'warning';

export function colorClassNames(colorType: ColorType) {
  let color = '';
  switch (colorType) {
    case 'primary': {
      color =
        'font-bold text-white rounded shadow-sm bg-teal-600 disabled:bg-slate-300 hover:bg-teal-400';
      break;
    }
    case 'secondary': {
      color =
        'font-bold text-white rounded shadow-sm bg-sky-600 disabled:bg-slate-300 hover:bg-sky-400';
      break;
    }
    case 'danger': {
      color =
        'font-bold text-white rounded shadow-sm bg-rose-600 disabled:bg-slate-300 hover:bg-rose-400';
      break;
    }
    case 'warning': {
      color =
        'font-bold text-white rounded shadow-sm bg-yellow-600 disabled:bg-slate-300 hover:bg-yellow-400';
      break;
    }
  }

  return color;
}
