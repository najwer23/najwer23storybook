import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import styles from "./Carousel.module.css"
import { useWindowSize } from "../utils/hooks/useWindowSize";
import { CarouselType } from "./Carousel.types";

export const Carousel = ({ children, arrowLeftIcon, arrowRightIcon, gap = "60px" }: CarouselType) => {
	const carouselRef = useRef<any>(null)
	const [showArrowLeft, setShowArrowLeft] = useState<boolean>(false)
	const [showArrowRight, setShowArrowRight] = useState<boolean>(false)
	const [width] = useWindowSize();

	const getChildWidth = () => {
		return carouselRef.current?.scrollWidth / (carouselRef.current?.childNodes.length - 2);
	}

	// check if show right arrow
	useEffect(() => {
		let timerId = setTimeout(() => {
			handleScroll()
		}, 1);

		return () => clearTimeout(timerId);
	}, [width]);

	const slideLeft = () => {
		carouselRef.current.scrollLeft -= Math.floor(carouselRef.current.offsetWidth / getChildWidth()) * getChildWidth()
	}

	const slideRight = () => {
		carouselRef.current.scrollLeft += Math.floor(carouselRef.current.offsetWidth / getChildWidth()) * getChildWidth()
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
		<div className={styles.carouselWrapper} style={
			{
				"--n23-carousel-gap": gap
			} as React.CSSProperties}
		>
			<div className={styles.carousel} ref={carouselRef} onScroll={handleScroll}>
				<div className={[styles.arrowLeft, showArrowLeft && styles.arrowShow].join(' ')} >
					<Button
						text={arrowLeftIcon}
						ariaLabel={"move carousel left"}
						type={"button"}
						onClick={slideLeft} />
				</div>
				{children}
				<div className={[styles.arrowRight, showArrowRight && styles.arrowShow].join(' ')} >
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