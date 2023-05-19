import { TextInputStyled } from './TextInput.styled';
import { TextInputProps } from './TextInput.types';
import React from 'react';

export const TextInput = ({
  extraClassnames,
  ...props
}: TextInputProps): React.JSX.Element => (
  <TextInputStyled {...props} className={extraClassnames} />
);
