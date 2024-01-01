import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import styles from "./index.module.css"
import { useWindowSize } from "../hooks/useWindowSize";
import { CarouselType } from "./index.types";

export const Carousel = ({ children, arrowLeftIcon, arrowRightIcon }: CarouselType): JSX.Element => {
	const carouselRef = useRef<any>(null)
	const [showArrowLeft, setShowArrowLeft] = useState<boolean>(false)
	const [showArrowRight, setShowArrowRight] = useState<boolean>(false)
	const [width] = useWindowSize();

	// check if show right arrow
	useEffect(() => {
		let timerId = setTimeout(() => {
			handleScroll()
		}, 1);

		return () => clearTimeout(timerId);
	}, [width]);

	const slideLeft = () => {
		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
	}

	const slideRight = () => {
		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
	}

	const handleScroll = () => {
		if (carouselRef.current.scrollLeft <= 0) {
			setShowArrowLeft(false)
			if ((carouselRef.current.scrollWidth - carouselRef.current.clientWidth) !== 0) {
				setShowArrowRight(true)
			} else {
				setShowArrowRight(false)
			}
		} else if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
			setShowArrowLeft(true)
			setShowArrowRight(false)
		} else {
			setShowArrowLeft(true)
			setShowArrowRight(true)
		}
	}

	return (
		<div className={styles["carouselWrapper"]}>
			<div className={styles["carouselStyled"]} ref={carouselRef} onScroll={handleScroll}>
				<div className={[styles["arrowLeft"], showArrowLeft && styles["arrowShow"]].join(' ')} >
					<Button
						text={arrowLeftIcon}
						ariaLabel={"move carousel left"}
						type={"button"}
						onClick={slideLeft} />
				</div>
				{children}
				<div className={[styles["arrowRight"], showArrowRight && styles["arrowShow"]].join(' ')} >
					<Button
						text={arrowRightIcon}
						ariaLabel={"move carousel right"}
						type={"button"}
						onClick={slideRight} />
				</div>
			</div>
		</div>
	)
}