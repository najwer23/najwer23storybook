import styles from "./index.module.css"
import { ContainerTypes } from "./index.types";

export const Container = ({ children, kind }: ContainerTypes) => {
	return (
		<div className={styles["n23" + kind]}>
			{children}
		</div>
	);
};
