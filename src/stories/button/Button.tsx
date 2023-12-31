import styles from "./index.module.css"
import { ButtonTypes } from "./index.types";

export const Button = ({ ariaLabel, type, text, disabled = false, ...props }: ButtonTypes) => {
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
