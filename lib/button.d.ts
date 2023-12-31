import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonTypes {
    onClick?: () => void;
    text: any;
    type: "button" | "reset" | "submit";
    disabled?: boolean;
    ariaLabel: string;
}

declare const Button: ({ ariaLabel, type, text, disabled, ...props }: ButtonTypes) => react_jsx_runtime.JSX.Element;

export { Button };
