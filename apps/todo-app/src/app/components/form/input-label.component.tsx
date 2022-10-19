import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledInputLabel = styled.label`
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 70%,
    rgb(52, 221, 188) 70%
  );
`;

const InputLabel: React.FC<
  PropsWithChildren<React.ComponentProps<typeof StyledInputLabel>>
> = ({ children, ...rest }) => {
  return (
    <StyledInputLabel
      {...rest}
      className={`inline text-2xl font-bold text-teal-900 ${rest['className']}`}
    >
      {children}
    </StyledInputLabel>
  );
};

export default InputLabel;
