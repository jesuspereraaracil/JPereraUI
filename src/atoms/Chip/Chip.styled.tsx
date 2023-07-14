import styled from 'styled-components';
import { theme } from '../../theme';

export const ChipStyled = styled.div`
  background-color: ${theme.colors.primary.normal};
  border-radius: ${theme.spacing.HUGE};
  box-sizing: border-box;
  padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};
  user-select: none;
  width: fit-content;
`;
