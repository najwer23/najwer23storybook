import styles from "./Button.module.css"

interface ButtonProps {
	onClick: () => void;
	text: string,
	kind: "classic" | "odd";
}

export const Button = ({ kind, text, ...props }: ButtonProps) => {
	return (
		<>
			<button
				type="button"
				className={[styles[kind]].join(' ')}
				{...props}
			>
				{text}
			</button>
		</>
	);
};
