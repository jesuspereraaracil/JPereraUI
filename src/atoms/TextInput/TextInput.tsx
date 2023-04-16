import React, { ChangeEventHandler } from 'react';
import { TextInputStyled } from './TextInput.styled';

export interface TextInputProps {
    disabled?: boolean;
    value?: string;
    onChangeHandler?: ChangeEventHandler;
    placeholder?: string;
    className?: string;
}
export const TextInput: React.FC<TextInputProps> = ({ disabled = false, value, onChangeHandler, placeholder, className }) => {
    return <TextInputStyled
        disabled={disabled}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={className}
    />;
};
