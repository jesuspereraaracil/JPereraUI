import React, { ChangeEventHandler } from 'react';
export interface TextInputProps {
    disabled?: boolean;
    value?: string;
    onChangeHandler?: ChangeEventHandler;
    placeholder?: string;
    className?: string;
}
export declare const TextInput: React.FC<TextInputProps>;
