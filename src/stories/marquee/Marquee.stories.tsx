import type { StoryObj } from '@storybook/react';

import { Marquee } from './Marquee';

const meta = {
	title: "Marquee/Marquee",
	component: Marquee,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
	args: {
		children: (
			<>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
			</>
		)
	},
};

