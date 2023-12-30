import * as react_jsx_runtime from 'react/jsx-runtime';

interface Props {
    onClick?: () => void;
    text: any;
    type: "button" | "reset" | "submit";
    disabled?: boolean;
    ariaLabel: string;
}
declare const Button: ({ ariaLabel, type, text, disabled, ...props }: Props) => react_jsx_runtime.JSX.Element;

export { Button };
