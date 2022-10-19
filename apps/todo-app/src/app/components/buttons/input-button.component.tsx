import React from 'react';
import { colorClassNames, ColorType } from './helper/button-color';

type Props = JSX.IntrinsicElements['input'] & {
  colorType?: ColorType;
};

const InputButton: React.FC<Props> = ({ colorType = 'primary', ...rest }) => {
  const color = colorClassNames(colorType) + ' ' + rest.className;
  return (
    <input
      {...rest}
      className={`flex-no-shrink rounded border-2 py-2 px-4 ${color}`}
    />
  );
};

export default InputButton;
