import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { Button } from '../Button';

export const GhostButtonStyled = styled(Button)`
  background-color: ${theme.colors.background}00;
  border: 0;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.primary.normal};

  &:hover {
    background-color: ${theme.colors.primary.hover}11;
    box-shadow: 0 0 0 0 ${theme.colors.primary.hover};
  }

  &:focus,
  &:active,
  &:focus-visible {
    border: 0;
    background-color: ${theme.colors.primary.active}33;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.backgroundDisabled}11;
      box-shadow: unset;
      color: ${theme.colors.fontDisabled};
      cursor: not-allowed;

      &:focus,
      &:active,
      &:focus-visible,
      &:hover {
        background-color: ${theme.colors.backgroundDisabled}11;
        box-shadow: unset;
      }
    `}
`;
