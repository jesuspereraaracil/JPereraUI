import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { TextInputProps } from './TextInput.types';

export const TextInputStyled = styled.input<TextInputProps>`
    background-color: ${theme.colors.background};
    border-radius: ${theme.spacing.NORMAL};
    border: 1px solid ${theme.colors.border};
    color: ${theme.colors.font};
    height: ${theme.spacing.HUGE};
    outline: 0;
    padding: ${theme.spacing.SMALL} ${theme.spacing.NORMAL};

    &:focus,
    &:active,
    &:focus-visible {
        border: 1px solid ${theme.colors.primary};
    }

    &:hover {
        box-shadow: 0 0 ${theme.spacing.NORMAL} 0 ${theme.colors.primary};
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
                border: 1px solid ${theme.colors.borderDisabled};
            }

            &:hover {
                box-shadow: 0 0 ${theme.spacing.NORMAL} 0 ${theme.colors.border};
            }
        `}

    ${({ error }) =>
        error &&
        css`
            border: 1px solid ${theme.colors.states.error};

            &:focus,
            &:active,
            &:focus-visible {
                border: 1px solid ${theme.colors.states.error};
            }

            &:hover {
                box-shadow: 0 0 ${theme.spacing.NORMAL} 0
                    ${theme.colors.states.error};
            }
        `}
`;
