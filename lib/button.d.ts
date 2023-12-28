import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };
