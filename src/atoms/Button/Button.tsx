import { ButtonProps } from './Button.types';
import { ButtonStyled } from './Button.styled';
import React from 'react';
import { Container } from '../Container/Container.styled';

export const Button = (props: ButtonProps): React.JSX.Element => {
  const { text } = props;
  return (
    <Container>
      <ButtonStyled {...props}>{text}</ButtonStyled>
    </Container>
  );
};
