import type { StoryObj } from '@storybook/react';

import { Container } from "." ;

const meta = {
	title: "Container/Container",
	component: Container,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		test: "A"
	},
	decorators: [
		(Story) => <Story />
	]
};

