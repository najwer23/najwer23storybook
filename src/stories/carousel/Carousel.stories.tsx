import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from "./Carousel";

const meta: Meta<typeof Carousel> = {
	title: "Carousel/Carousel ",
	component: Carousel,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselStandard: Story = {
	args: {
		arrowLeftIcon: <div>L</div>,
		arrowRightIcon: <div>R</div>,
		children: <>
			{Array.from({ length: 15 }, (_, i) => <img key={i} src="https://source.unsplash.com/random/500x700" height="700" width="500" alt="" />)}
		</>
	},

};

export const CarouselStandardSmallerChild: Story = {
	args: {
		arrowLeftIcon: <div>L</div>,
		arrowRightIcon: <div>R</div>,
		children: <>
			{Array.from({ length: 10 }, (_, i) => <img key={i} src="https://source.unsplash.com/random/300x400" height="400" width="300" alt="" />)}
		</>,
	},

};

