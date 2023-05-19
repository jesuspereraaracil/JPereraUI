import styled from 'styled-components';
import { theme } from '../../theme';

export const RangeInputStyled = styled.input.attrs({ type: 'range' })`
  appearance: none;
  width: 100%;
  height: ${theme.spacing.NORMAL};
  background: ${theme.colors.primary.active};
  outline: none;
  //opacity: 0.5;
  transition: opacity 0.2s;
`;
