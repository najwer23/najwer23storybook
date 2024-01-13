import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
	title: "Footer/Footer",
	component: Footer,
	parameters: {
		layout: "centered",
		with: "500px"
	},
	tags: ["autodocs"],
	argTypes: {
	},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const FooterAlwaysOnBottom: Story = {
	args: {
	},
};

