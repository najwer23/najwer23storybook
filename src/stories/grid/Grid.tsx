import { Children } from "react";
import styles from "./Grid.module.css"
import { GridTypes } from "./Grid.types";

export const Grid = ({
	children,
	gap,
	col
}: GridTypes) => {

	return (
		<>
			<div
				className={styles.gridContainer}
				style={
					{
						"--n23-fc-m": col.mobile,
						"--n23-fc-t": col.tablet,
						"--n23-fc-sd": col.smallDesktop,
						"--n23-fc-d": col.desktop,
						"--n23-fg-c": gap.col,
						"--n23-fg-r": gap.row
					} as React.CSSProperties}
			>
				{
					Children.map(children.props.children, (child: any) => (
						child && <div className={styles.gridContainerChild}>{child}</div>
					))
				}
			</div>
		</>
	)
};