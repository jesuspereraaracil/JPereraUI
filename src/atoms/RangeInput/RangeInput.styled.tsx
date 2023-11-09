import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const thumb = css`
  appearance: none;
  cursor: ew-resize;
  background: ${theme.colors.primary.hover};
  border: 0;
  border-radius: 50%;
  box-sizing: border-box;
  height: ${theme.spacing.BIG};
  outline: 0;
  padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};
  transition: all 0.2s ease;
  width: ${theme.spacing.BIG};

  &:hover {
    height: ${theme.spacing.HUGE};
    border-radius: ${theme.border.radius};
  }
`;

export const RangeInputStyled = styled.input.attrs({ type: 'range' })`
  appearance: none;
  border-radius: ${theme.border.radius};
  box-sizing: border-box;
  width: 100%;
  height: ${theme.spacing.NORMAL};
  background: ${theme.colors.primary.active};
  outline: none;
  padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};
  transition: all 0.2s ease;

  &:hover {
    height: ${theme.spacing.HUGE};
  }

  &::-webkit-slider-thumb {
    ${thumb}
  }

  &::-moz-range-thumb {
    ${thumb}
  }
`;
