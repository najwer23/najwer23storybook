import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: "Example/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	args: {
		text: "Button",
		type: "button",
		ariaLabel: "button-click"
	},
};

export const Disabled: Story = {
	args: {
		text: "Button",
		type: "button",
		disabled: true,
		ariaLabel: "button-click"
	},
};

