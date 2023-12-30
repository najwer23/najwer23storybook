interface Props {
    onClick?: () => void;
    text: any;
    type: "button" | "reset" | "submit";
    disabled?: boolean;
    ariaLabel: string;
}
export declare const Button: ({ ariaLabel, type, text, disabled, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
