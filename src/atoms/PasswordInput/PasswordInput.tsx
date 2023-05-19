import { TextInputProps } from '../TextInput/TextInput.types';
import { TextInputStyled } from '../TextInput/TextInput.styled';
import React from 'react';

export const PasswordInput = ({
  extraClassnames,
  ...props
}: TextInputProps): React.JSX.Element => (
  <TextInputStyled {...props} className={extraClassnames} type="password" />
);
