import styled from 'styled-components';
import { theme } from '../../theme';

export const LabelStyled = styled.label`
  align-items: center;
  color: ${theme.colors.font};
  display: flex;
  height: ${theme.spacing.HUGE};
  justify-content: center;
  outline: 0;
  padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};
  width: fit-content;
`;
