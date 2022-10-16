import React, { PropsWithChildren } from 'react';
import { colorClassNames, ColorType } from './helper/button-color';

type Props = JSX.IntrinsicElements['button'] & {
  colorType?: ColorType;
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  colorType,
  ...rest
}) => {
  const color = colorClassNames(colorType) + ' ' + rest.className;
  return (
    <button
      {...rest}
      type="button"
      className={`flex-no-shrink p-2 border-2 rounded ${color}`}
    >
      {children}
    </button>
  );
};

export default Button;
