import { Fragment, useEffect, useState } from "react";
import { Button } from "../button";
import styles from "./index.module.css"
import { useWindowSize } from "../utils/hooks/useWindowSize";
import { MenuAsideType } from "./index.types";
import { Text } from "../text";

export const MenuAside = ({ menuItems, menuTitle }: MenuAsideType) => {
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
			<div className={styles["asideMenuWrapper"]}>
				<div className={styles["asideMenu"]}>
					<div className={styles["asideMenuLogo"]}> {menuTitle} </div>
					{menuItems && (menuItems.map((menuItem) => (
						menuItem.map((itemGroup) => (
							<Fragment key={`desktop${itemGroup.menuTitle}`}>
								<div className={[menuTitle && styles["asideMenuTitleSpace"], styles["asideMenuTitle"]].join(" ")}>{itemGroup.menuTitle}</div>
								<ul>
									{itemGroup.items.map(({ itemLinkText, itemLink, itemLinkType }) => (
										<li key={`desktopMenu-${itemGroup.menuTitle}-${itemLinkText}`}>
											{itemLinkType === "hash" && <a href={`/#/${itemLink}`}> {itemLinkText}</a>}
											{itemLinkType === "link" && <a href={`/${itemLink}`}> {itemLinkText}</a>}
											{itemLinkType === "linkOut" && <a target="_blank" rel="noopener noreferrer" href={`${itemLink}`}> {itemLinkText}</a>}
										</li>
									))}
								</ul>
							</Fragment>
						)))))}
				</div>
			</div>

			{/* Mobile */}
			<div className={[styles["asideMenuMobile"], menuMobileOpen && styles["open"]].join(' ')}>
				<div className={styles["asideMenuLogo"]}> {menuTitle} </div>

				{menuItems && (menuItems.map((menuItem) => (
					menuItem.map((itemGroup) => (
						<Fragment key={`mobile${itemGroup.menuTitle}`}>
							<div className={[menuTitle && styles["asideMenuTitleSpace"], styles["asideMenuTitle"]].join(" ")}>{itemGroup.menuTitle}</div>
							<ul>
								{itemGroup.items.map(({ itemLinkText, itemLink, itemLinkType }) => (
									<li key={`MobileMenu-${itemGroup.menuTitle}-${itemLinkText}`} >
										{itemLinkType === "hash" && <a href={`/#/${itemLink}`} onClick={() => {setMenuMobileOpen(false)}} > {itemLinkText}</a>}
										{itemLinkType === "link" && <a href={`/${itemLink}`} onClick={() => {setMenuMobileOpen(false)}}> {itemLinkText}</a>}
										{itemLinkType === "linkOut" && <a target="_blank" rel="noopener noreferrer" href={`${itemLink}`}> {itemLinkText}</a>}
									</li>
								))}
							</ul>
						</Fragment>
					)))))}
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
