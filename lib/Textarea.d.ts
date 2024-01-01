/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ErrorValidatorOptions {
    empty?: boolean;
    email?: boolean;
}

interface TextareaTypes {
    name: string;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>, isError: boolean) => void;
    label: string;
    placeholder?: string;
    readonly?: boolean;
    onChange?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    errorOptions?: ErrorValidatorOptions;
    defaultValue?: string;
    innerRef?: React.RefObject<HTMLTextAreaElement>;
}

declare const Textarea: ({ name, placeholder, onBlur, label, readonly, errorOptions, defaultValue, innerRef, ...props }: TextareaTypes) => react_jsx_runtime.JSX.Element;

export { Textarea };
