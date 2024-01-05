import styles from "./index.module.css"
import { TextTypes } from "./index.types";

export const Text = ({
	kind,
	children
}: TextTypes) => {

	const textDictionary = {
		"p": <p>{children}</p>,
		"h1": <h1>{children}</h1>,
		"h2": <h2>{children}</h2>,
		"h3": <h3>{children}</h3>,
		"default": children
	}
	return <div className={styles[`${kind}Text`]}>{textDictionary[kind ?? "default"]}</div>
};