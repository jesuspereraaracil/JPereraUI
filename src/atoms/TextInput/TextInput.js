import React from 'react';
import { TextInputStyled } from './TextInput.styled';
export const TextInput = ({ disabled, value, onChangeHandler, placeholder }) => {
    return React.createElement(TextInputStyled, { disabled: disabled, value: value, onChange: onChangeHandler, placeholder: placeholder });
};
