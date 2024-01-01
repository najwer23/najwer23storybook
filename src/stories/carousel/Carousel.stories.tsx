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
			<div style={{width: "500px", height: "400px", margin: "20px", background: "green"}}></div>
			<div style={{width: "500px", height: "400px", margin: "20px", background: "red"}}></div>
			<div style={{width: "500px", height: "400px", margin: "20px", background: "yellow"}}></div>
			<div style={{width: "500px", height: "400px", margin: "20px", background: "blue"}}></div>
			<div style={{width: "500px", height: "400px", margin: "20px", background: "grey"}}></div>
		</>,
	},

};


