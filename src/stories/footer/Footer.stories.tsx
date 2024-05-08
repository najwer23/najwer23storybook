import type { StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
	title: "Footer/Footer",
	component: Footer,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const FooterAlwaysOnBottom: Story = {
	args: {
	},
};

