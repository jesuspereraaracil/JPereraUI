import { ChipProps } from './Chip.types';
import React from 'react';
import { ChipStyled } from './Chip.styled';

export const Chip = ({ text }: ChipProps): React.JSX.Element => {
  return <ChipStyled>{text}</ChipStyled>;
};
