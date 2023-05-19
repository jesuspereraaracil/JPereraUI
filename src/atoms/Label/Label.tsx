import { LabelProps } from './Label.types';
import { LabelStyled } from './Label.styled';
import React from 'react';

export const Label = ({ text }: LabelProps): React.JSX.Element => (
  <LabelStyled>{text}</LabelStyled>
);
