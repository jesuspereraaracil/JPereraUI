import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { TextInputProps } from './TextInput.types';

export const TextInputStyled = styled.input<TextInputProps>`
  background-color: ${theme.colors.background};
  border-radius: ${theme.border.radius};
  border: ${theme.border.size} solid ${theme.colors.border};
  box-sizing: border-box;
  color: ${theme.colors.font};
  font-size: ${theme.spacing.BIG};
  outline: 0;
  margin: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};
  padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};
  width: 100%;

  &:focus,
  &:active,
  &:focus-visible {
    border: ${theme.border.size} solid ${theme.colors.primary.normal};
  }

  &:hover {
    box-shadow: 0 0 ${theme.spacing.NORMAL} 0 ${theme.colors.primary.normal};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.backgroundDisabled};
      color: ${theme.colors.fontDisabled};
      cursor: not-allowed;

      &:focus,
      &:active,
      &:focus-visible {
        border: ${theme.border.size} solid ${theme.colors.borderDisabled};
      }

      &:hover {
        box-shadow: 0 0 ${theme.spacing.NORMAL} 0 ${theme.colors.border};
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: ${theme.border.size} solid ${theme.colors.states.error};

      &:focus,
      &:active,
      &:focus-visible {
        border: ${theme.border.size} solid ${theme.colors.states.error};
      }

      &:hover {
        box-shadow: 0 0 ${theme.spacing.NORMAL} 0 ${theme.colors.states.error};
      }
    `}
`;
