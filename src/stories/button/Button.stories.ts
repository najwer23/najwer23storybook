import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: "Buttons/Button",
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

export const ButtonButton: Story = {
	args: {
		text: "Button",
		type: "button",
		ariaLabel: "button-click"
	},
};

export const ButtonDisabled: Story = {
	args: {
		text: "Button",
		type: "button",
		disabled: true,
		ariaLabel: "button-click"
	},
};

export const ButtonReset: Story = {
	args: {
		text: "Button",
		type: "reset",
		disabled: false,
		ariaLabel: "button-click",
	},
};

