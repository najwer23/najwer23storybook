import { useEffect, useRef } from "react";
import styles from "./index.module.css"
import { DialogTypes } from "./index.types";
import { Text } from "../text";
import { Button } from "../button";
import { Container } from "../container";
import { Grid } from "../grid";


export const Dialog = ({ modalOpen, modalClose, children, title }: DialogTypes) => {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (modalOpen) {
			ref.current?.showModal()
		} else {
			ref.current?.classList.add(styles.minimize)

			const timeoutId = setTimeout(() => {
				ref.current?.close();
				ref.current?.classList.remove(styles.minimize)
			}, 400);

			return () => clearTimeout(timeoutId);
		}
	}, [modalOpen]);

	return (
		<dialog
			className={styles.dialog}
			modal-mode="mega"
			ref={ref}
			onCancel={modalClose}
		>
			<Container kind={"dialog"}>
				<Grid
					gap={{
						col: "0px",
						row: "20px"
					}} col={{
						mobile: 1,
						smallDesktop: 1,
						desktop: 1,
						tablet: 1
					}}
				>
					<>
						{title && <header><Text kind={"p"}><b>{title}</b></Text></header>}

						<article>{children}</article>

						<footer>
							<Button
								onClick={modalClose}
								text={"Close"} type={"button"} ariaLabel={"close-dialo"} />
						</footer>
					</>

				</Grid>
			</Container>

		</dialog>
	);
}
