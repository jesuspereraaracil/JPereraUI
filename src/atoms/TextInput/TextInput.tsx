import React from 'react';
import { TextInputStyled } from './TextInput.styled';
import { TextInputProps } from './TextInput.types';

export const TextInput = ({ disabled = false, value, onChangeHandler, placeholder, className, error }: TextInputProps) => {
    return <TextInputStyled
        disabled={disabled}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={className}
        error={error}
    />;
};
