import React, { ChangeEventHandler } from 'react';
import { TextInputStyled } from './TextInput.styled';
import { TextInputProps } from './TextInput.types';


export const TextInput: React.FC<TextInputProps> = ({ disabled = false, value, onChangeHandler, placeholder, className }) => {
    return <TextInputStyled
        disabled={disabled}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={className}
    />;
};
