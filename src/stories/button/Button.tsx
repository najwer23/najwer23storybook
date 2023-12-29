import styles from "./Button.module.css"

interface ButtonProps {
	onClick: () => void;
	text: string,
	kind: "button" | "reset" | "submit";
	disabled?: boolean;
	ariaLabel: string;
}

export const Button = ({ ariaLabel, kind, text, disabled = false, ...props }: ButtonProps) => {
	return (
		<button
			type="button"
			className={[styles["standard"]].join(' ')}
			disabled={disabled}
			title={text}
			aria-label={ariaLabel}
			{...props}
		>
			{text}
		</button>
	);
};
