import styles from "./index.module.css"
import { ContainerTypes } from "./index.types";

export const Container = ({  }: ContainerTypes) => {
	return (
		<div className={styles.wrapper}>
		"Hello"
		</div>
	);
};
