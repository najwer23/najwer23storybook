import { createElement } from "react";
import styles from "./index.module.css"
import { TextTypes } from "./index.types";

export const Text = ({
	kind,
	children
}: TextTypes) => {
	return <>
		{createElement(kind.includes("h") ? kind : "p", { className: styles[kind + "Text"] }, children)}
	</>
};