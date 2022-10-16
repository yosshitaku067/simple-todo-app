import React, { ComponentProps, PropsWithChildren } from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  position: relative;
  padding-top: 16px;
  font-size: 32px;
  font-weight: 700;

  &::before {
    content: attr(data-en);
    display: block;
    font-size: 24px;
    color: #0f766e;
  }

  &::after {
    content: ' ';
    display: block;
    width: 80px;
    height: 2px;
    background-color: #0f766e;
  }
`;

const HeadingPrimary: React.FC<
  PropsWithChildren<ComponentProps<typeof H2>>
> = ({ children, ...rest }) => {
  return <H2 {...rest}>{children}</H2>;
};

export default HeadingPrimary;
