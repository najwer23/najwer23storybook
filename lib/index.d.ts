/// <reference types="react" />
import * as react from 'react';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => react.JSX.Element;

export { Button };
