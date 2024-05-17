import { Children } from "react";
import styles from "./Marquee.module.css"
import { MarqueeTypes } from "./Marquee.types";

export const Marquee = ({
	children,
	gap = "40px",
	height = "200px",
	speed = "10s"
}: MarqueeTypes) => {
	return (
		<div className={styles.marquee} style={
			{
				"--n23-marqueee-height": height,
				"--n23-marqueee-gap": gap,
				"--n23-marqueee-speed": speed,
			} as React.CSSProperties}>
			<div className={styles.track}>
				{
					Children.map(children.props.children, (child: any, index) => (
						child && <>{child}</>
					))
				}
			</div>
			<div className={styles.track}>
				{
					Children.map(children.props.children, (child: any, index) => (
						child && <>{child}</>
					))
				}
			</div>
		</div>
	)
};