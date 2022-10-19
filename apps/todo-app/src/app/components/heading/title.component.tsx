import React, { PropsWithChildren } from 'react';

const Title: React.FC<PropsWithChildren<JSX.IntrinsicElements['h1']>> = ({
  children,
  ...rest
}) => {
  return <h1 {...rest}>{children}</h1>;
};

export default Title;
