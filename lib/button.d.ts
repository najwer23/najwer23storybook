import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    onClick: () => void;
    text: string;
    kind: "classic" | "odd";
}
declare const Button: ({ kind, text, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };
