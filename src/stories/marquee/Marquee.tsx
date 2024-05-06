import styles from "./index.module.css"
import { MarqueeTypes } from "./index.types";

export const Marquee = ({
	children
}: MarqueeTypes) => {

	return (
		<div className={styles.marquee}>
			<div className={styles.track}>
				{children}
			</div>
			<div className={styles.track}>
				{children}
			</div>
		</div>
	)
};