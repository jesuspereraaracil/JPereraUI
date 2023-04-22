import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { theme } from '../../theme';
import { TextInputProps } from './TextInput.types';

export const TextInputStyled = styled.input<TextInputProps>`
  background-color: ${theme.colors.background};
  border-radius: ${theme.spacing.NORMAL};
  border: 1px solid ${theme.colors.background};
  color: ${theme.colors.font};
  height: ${theme.spacing.HUGE};
  outline: 0;
  padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};

  &:focus, &:active, &:focus-visible {
    border: 1px solid ${theme.colors.primary};
  }

  &:hover {
    box-shadow: 0 0 ${theme.spacing.NORMAL} 0 ${theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ error }) => error && css`
    background-color: ${theme.colors.states.error};
  `}
`;
