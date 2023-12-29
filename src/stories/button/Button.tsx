import styles from "./Button.module.css"

interface ButtonProps {
	onClick?: () => void;
	text: string,
	type: "button" | "reset" | "submit";
	disabled?: boolean;
	ariaLabel: string;
}

export const Button = ({ ariaLabel, type, text, disabled = false, ...props }: ButtonProps) => {
	return (
		<button
			type={type}
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
