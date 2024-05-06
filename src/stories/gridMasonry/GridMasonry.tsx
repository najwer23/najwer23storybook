
import { useEffect, useState } from "react";
import styles from './index.module.css'
import { useWindowSize } from "../utils/hooks/useWindowSize";
import { GridMasonryColumn } from "./GridMasonryColumn";
import { ChildrenMasonry, GridMasonryTypes } from "./index.types";

export const GridMasonry = ({ children, gap, col, onGridMasonryLoadEnd }: GridMasonryTypes) => {
	const [itemCnt, setItemCnt] = useState<number>(0)
	const [width] = useWindowSize();

	const getNumberOfColumns = (width: number) => {
		if (width < 767.98) {
			return col.mobile
		}

		if ((width >= 768.98) && (width < 1199.98)) {
			return col.tablet
		}

		if ((width >= 1199.98) && (width < 1599.98)) {
			return col.smallDesktop
		}

		if (width >= 1599.98) {
			return col.desktop
		}

		return 3 as never;
	}


	const [numberOfColumns, setNumberOfColumns] = useState<number>(() => {
		return getNumberOfColumns(width)
	})


	const initChildrenMasonry = (numberOfColumns: number) => {
		return Array.from({ length: numberOfColumns }).map((_, i) => {
			return {
				name: `col${i}`,
				arrWithElm: [],
				height: 0
			}
		})
	}

	const [childrenMasonry, setChildrenMasonry] = useState<ChildrenMasonry[]>(() => {
		return initChildrenMasonry(numberOfColumns);
	});

	const getChildNameWithMinHeight = (childrenMasonry: ChildrenMasonry[]) => {
		return [...childrenMasonry].sort((a, b) => a.height - b.height)[0].name
	}

	const onHeightChange = (height: number, name: string) => {
		setChildrenMasonry(childrenMasonry.map((value) => {
			return (value.name === name) ?
				{
					...value,
					height
				}
				: value;
		}))
	}

	useEffect(() => {
		if (getNumberOfColumns(width) != numberOfColumns) {
			setItemCnt(0)
			setNumberOfColumns(getNumberOfColumns(width))
			setChildrenMasonry(initChildrenMasonry(getNumberOfColumns(width)))
		}
	}, [width])

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (itemCnt < children.length) {
				const childNameWithMinHeight = getChildNameWithMinHeight(childrenMasonry)
				setChildrenMasonry(childrenMasonry.map((value) => {
					return (value.name === childNameWithMinHeight) ?
						{
							...value,
							arrWithElm: [...value.arrWithElm, children[itemCnt]]
						}
						: value;
				}))
				setItemCnt(itemCnt => itemCnt + 1)

				if (itemCnt == (children.length-1)) {
					if (onGridMasonryLoadEnd) {
						onGridMasonryLoadEnd(true)
					}
				}
			}
		}, 40);

		return () => clearTimeout(timeoutId);

	}, [JSON.stringify(childrenMasonry.map(({ height }) => height))])

	return (
		<div className={styles.masonryContainer} style={
			{
				"--n23-m-fc-m": col.mobile,
				"--n23-m-fc-t": col.tablet,
				"--n23-m-fc-sd": col.smallDesktop,
				"--n23-m-fc-d": col.desktop,
				"--n23-m-fg-c": gap.col,
				"--n23-m-fg-r": gap.row
			} as React.CSSProperties}
		>
			{childrenMasonry.map(({ arrWithElm, name }) => (
				<GridMasonryColumn key={"parent" + name} arrWithChildren={arrWithElm} onHeightChange={(height) => onHeightChange(height, name)} id={name} />
			))}
		</div>)
}