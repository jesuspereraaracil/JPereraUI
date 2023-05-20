import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: ${theme.spacing.HUGE};
  justify-content: center;
  margin: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};
  width: 100%;
`;
