import styled from 'styled-components';
import { theme } from '../../theme';

export const LabelStyled = styled.label`
    color: ${theme.colors.font};
    height: ${theme.spacing.HUGE};
    outline: 0;
    padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};
`;
