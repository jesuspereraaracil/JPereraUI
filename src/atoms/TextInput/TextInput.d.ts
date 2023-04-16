import React, { ChangeEventHandler } from 'react';
interface TextInputProps {
    disabled: boolean;
    value?: string;
    onChangeHandler?: ChangeEventHandler;
    placeholder?: string;
}
export declare const TextInput: React.FC<TextInputProps>;
export {};
