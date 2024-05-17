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
		height: "200px",
		speed: "10s",
		children: (
			<>
				{Array.from({ length: 5 }, (_, i) => <img key={i} src="https://source.unsplash.com/random/200x200" />)}
				<img key={5} src="https://source.unsplash.com/random/400x200" />
			</>
		)
	},
	decorators: [
		(Story) => <div style={{ width: "900px" }}> <Story /></div>
	]
};

