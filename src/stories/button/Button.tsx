import styles from "./Button.module.css"

interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	label: string;
	onClick?: () => void;
}

export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary ? styles.primary : styles.secondary;
	return (
		<button
			type="button"
			className={[styles.button, styles[size] || undefined, mode].join(' ')}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
