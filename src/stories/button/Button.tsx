import styles from "./index.module.css"

interface Props {
	onClick?: () => void;
	text: any,
	type: "button" | "reset" | "submit";
	disabled?: boolean;
	ariaLabel: string;
}

export const Button = ({ ariaLabel, type, text, disabled = false, ...props }: Props) => {
	return (
		<button
			type={type}
			className={[styles["standard"]].join(' ')}
			disabled={disabled}
			aria-label={ariaLabel}
			{...props}
		>
			{text}
		</button>
	);
};
