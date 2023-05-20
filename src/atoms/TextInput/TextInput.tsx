import { TextInputStyled } from './TextInput.styled';
import { TextInputProps } from './TextInput.types';
import React from 'react';
import { Container } from '../Container/Container.styled';

export const TextInput = ({
  extraClassnames,
  ...props
}: TextInputProps): React.JSX.Element => (
  <Container>
    <TextInputStyled {...props} className={extraClassnames} />
  </Container>
);
