import type { StoryObj } from '@storybook/react';

import { Picture } from "." ;

const meta = {
	title: "Picture/Picture",
	component: Picture,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: "https://source.unsplash.com/random/300x400",
		alt: "",
		ar: 3/4,
	},
	decorators: [
		(Story) => <Story />
	]
};

export const PictureBorder: Story = {
	args: {
		src: "https://source.unsplash.com/random/300x400",
		alt: "",
		ar: 3 / 4,
		kind: "border"
	},
	decorators: [
		(Story) => <Story />
	]
};
