/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ErrorValidatorOptions {
    empty?: boolean;
    email?: boolean;
}

interface InputTypes {
    name: string;
    type: "text";
    onBlur?: (e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void;
    label: string;
    placeholder?: string;
    readonly?: boolean;
    onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
    errorOptions?: ErrorValidatorOptions;
    defaultValue?: string;
    innerRef?: React.RefObject<HTMLInputElement>;
}

declare const Input: ({ name, placeholder, type, onBlur, label, readonly, errorOptions, defaultValue, innerRef, ...props }: InputTypes) => react_jsx_runtime.JSX.Element;

export { Input };
