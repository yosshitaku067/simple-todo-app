import React, { PropsWithChildren } from 'react';
import { colorClassNames, ColorType } from './helper/button-color';

type Props = JSX.IntrinsicElements['button'] & {
  colorType?: ColorType;
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  colorType = 'primary',
  ...rest
}) => {
  const color = colorClassNames(colorType) + ' ' + rest.className;
  return (
    <button
      {...rest}
      type="button"
      className={`flex-no-shrink rounded border-2 p-2 ${color}`}
    >
      {children}
    </button>
  );
};

export default Button;
