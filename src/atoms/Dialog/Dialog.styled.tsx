import styled from 'styled-components';
import {theme} from '../../theme';
import {DialogStyledProps} from './Dialog.types';

export const DialogStyled = styled.dialog<DialogStyledProps>`
  background-color: ${theme.colors.background};
  border: 0;
  border-radius: ${theme.spacing.NORMAL};
  box-sizing: border-box;
  padding: ${theme.spacing.HUGE} ${theme.spacing.HUGE};
  overflow: hidden;

  &:focus-visible {
    outline: none;
  }

  &::backdrop {
    background-color: ${theme.colors.background};
    opacity: 0.4;
  }
`;
