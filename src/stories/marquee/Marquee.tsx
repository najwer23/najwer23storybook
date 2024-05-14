import styles from "./Marquee.module.css"
import { MarqueeTypes } from "./Marquee.types";

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