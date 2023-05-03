import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { ButtonProps } from './Button.types';

const disabledCSS = css`
  background-color: ${theme.colors.backgroundDisabled};
  box-shadow: unset;
  color: ${theme.colors.fontDisabled};
  cursor: not-allowed;

  &:focus,
  &:active,
  &:focus-visible,
  &:hover {
    background-color: ${theme.colors.backgroundDisabled};
    box-shadow: unset;
  }
`;

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${theme.colors.buttons.primary.normal};
  border-radius: ${theme.border.radius};
  border: 0;
  color: ${theme.colors.font};
  cursor: pointer;
  min-height: ${theme.spacing.HUGE};
  outline: 0;
  padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};

  &:hover {
    background-color: ${theme.colors.buttons.primary.hover};
    box-shadow: 0 0 ${theme.spacing.SMALL} 0
      ${theme.colors.buttons.primary.hover};
  }

  &:focus,
  &:active,
  &:focus-visible {
    border: 0;
    background-color: ${theme.colors.buttons.primary.active};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      ${disabledCSS}
    `}
`;
