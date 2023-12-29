interface ButtonProps {
    onClick: () => void;
    text: string;
    kind: "classic" | "odd";
}
export declare const Button: ({ kind, text, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
