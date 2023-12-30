import styles from "./index.module.css"

interface Props {
	menuItems: {
		itemLink: string;
		itemLinkText: string;
		itemLinkType: "hash" | "link" | "linkOut"
	}[]
}

export const MenuAside = ({ menuItems }: Props) => {
	return (
		<>
			<div className={[styles["asideMenu"]].join(' ')}>
				<ul>
					{menuItems && (menuItems.map(({ itemLink, itemLinkText, itemLinkType }) => (
						<li key={itemLinkText}>
							{itemLinkType === "hash" && (
								<a href={`/#/${itemLink}`}> {itemLinkText}</a>
							)}
							{itemLinkType === "link" && (
								<a href={`/${itemLink}`}> {itemLinkText}</a>
							)}
							{itemLinkType === "linkOut" && (
								<a target="_blank" rel="noopener noreferrer" href={`${itemLink}`}> {itemLinkText}</a>
							)}
						</li>
					))
					)}
				</ul>
			</div>
		</>
	);
};
