import { ChangeEventHandler } from 'react';

export interface TextInputProps {
    disabled?: boolean;
    value?: string;
    onChangeHandler?: ChangeEventHandler;
    placeholder?: string;
    extraClassnames?: string;
    error?: boolean
}
