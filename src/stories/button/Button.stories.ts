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

export const Classic: Story = {
  args: {
		text: "Button",
		kind: "classic"
  },
};
