import { LabelProps } from './Label.types';
import { LabelStyled } from './Label.styled';
import React from 'react';
import { Container } from '../Container/Container.styled';

export const Label = ({ text }: LabelProps): React.JSX.Element => (
  <Container>
    <LabelStyled>{text}</LabelStyled>
  </Container>
);
