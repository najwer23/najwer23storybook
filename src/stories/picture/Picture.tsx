import { useState } from "react";
import styles from "./Picture.module.css"
import { PictureTypes } from "./Picture.types";

export const Picture = ({ src, alt, ar, kind }: PictureTypes) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<picture className={[styles.picture, loaded && styles.loaded, styles[kind ?? ""]].join(" ")} style={
			{
				"--n23-img-ar": ar ?? "auto",
			} as React.CSSProperties}
		>
			<img src={src} alt={alt} loading='lazy' onLoad={() => setLoaded(true)} />
		</picture>
	);
};
