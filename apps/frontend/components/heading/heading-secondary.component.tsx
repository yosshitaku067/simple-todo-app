import React, { ComponentProps, PropsWithChildren } from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  position: relative;
  font-weight: 700;
  font-size: 1.15rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;

    background-image: repeating-linear-gradient(
      45deg,
      #0f766e 0px,
      #0f766e 1px,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 50%
    );
    background-size: 4px 4px;
  }

  &::after {
    content: attr(data-en);
    position: relative;
    margin-left: 20px;
    font-size: 1rem;
    z-index: 2;
    color: #0f766e;
  }
`;

const HeadingSecondary: React.FC<
  PropsWithChildren<ComponentProps<typeof H3>>
> = ({ children, ...rest }) => {
  return <H3 {...rest}>{children}</H3>;
};

export default HeadingSecondary;
