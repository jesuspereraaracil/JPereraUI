import { ButtonProps } from './Button.types';
import { ButtonStyled } from './Button.styled';
import React from 'react';

export const Button = (props: ButtonProps): React.JSX.Element => {
  const { text } = props;
  return <ButtonStyled {...props}>{text}</ButtonStyled>;
};
