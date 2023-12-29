import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    onClick: () => void;
    text: string;
    kind: "button" | "reset" | "submit";
    disabled?: boolean;
    ariaLabel: string;
}
declare const Button: ({ ariaLabel, kind, text, disabled, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };
