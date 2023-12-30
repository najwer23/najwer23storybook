import { useEffect, useState } from "react";
import { Button } from "../button";
import styles from "./index.module.css"
import { useWindowSize } from "../hooks/useWindowSize";

interface Props {
	menuItems: {
		itemLink: string;
		itemLinkText: string;
		itemLinkType: "hash" | "link" | "linkOut"
	}[]
}

export const MenuAside = ({ menuItems }: Props) => {
	const [menuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);
	const [width] = useWindowSize();

	useEffect(() => {
		if (width >= 1199.98) {
			setMenuMobileOpen(false);
			document.body.classList.remove(styles["menuOpen"]);
		}
	}, [width])

	useEffect(() => {
		if (menuMobileOpen) {
			document.body.classList.add(styles["menuOpen"]);
		} else {
			document.body.classList.remove(styles["menuOpen"]);
		}

	}, [menuMobileOpen]);

	return (
		<>
			{/* Desktop */}
			<div className={[styles["asideMenuWrapper"]].join(' ')}>
				<div className={[styles["asideMenu"]].join(' ')}>
					<ul>
						{menuItems && (menuItems.map(({ itemLink, itemLinkText, itemLinkType }) => (
							<li key={`desktopMenu${itemLinkText}`}>
								{itemLinkType === "hash" && <a href={`/#/${itemLink}`}> {itemLinkText}</a>}
								{itemLinkType === "link" && <a href={`/${itemLink}`}> {itemLinkText}</a>}
								{itemLinkType === "linkOut" && <a target="_blank" rel="noopener noreferrer" href={`${itemLink}`}> {itemLinkText}</a>}
							</li>
						))
						)}
					</ul>
				</div>
			</div>


			{/* Mobile */}
			<div className={[styles["asideMenuMobile"], menuMobileOpen && styles["open"]].join(' ')}>
				<ul>
					{menuItems && (menuItems.map(({ itemLink, itemLinkText, itemLinkType }) => (
						<li key={`mobileMenu${itemLinkText}`} onClick={() => {
							setMenuMobileOpen(false)
						}}>
							{itemLinkType === "hash" && <a href={`/#/${itemLink}`}> {itemLinkText}</a>}
							{itemLinkType === "link" && <a href={`/${itemLink}`}> {itemLinkText}</a>}
							{itemLinkType === "linkOut" && <a target="_blank" rel="noopener noreferrer" href={`${itemLink}`}> {itemLinkText}</a>}
						</li>
					)))}
				</ul>
			</div>

			{/* Button */}
			<div className={[styles["asideMenuMobileButton"], menuMobileOpen && styles["open"]].join(' ')} >
				<Button
					text={"Menu"}
					type={"button"}
					ariaLabel={menuMobileOpen ? "close menu" : "open menu"}
					onClick={() => {
						setMenuMobileOpen(!menuMobileOpen)
					}
					}
				/>
			</div>
		</>
	);
};
