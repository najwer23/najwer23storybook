import type { Meta, StoryObj } from '@storybook/react';

import { GridMasonry } from './GridMasonry';
import { ReactNode } from 'react';

const meta: Meta<typeof GridMasonry> = {
	title: "Grid-Masonry/GridMasonry",
	component: GridMasonry,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = Array.from({ length: 20 }).map((_, index) => (
	<div
		key={index}
		style={{
			background: "#" + Math.floor(Math.random() * 16777215).toString(16),
			// width: "300px"
		}}
	>
		<>
			<div>{index}</div>
			{"MSMSM SMSS".repeat(Math.floor(Math.random() * 160))}
		</>
	</div>
));

export const Grid3columns: Story = {
	args: {
		gap: {
			col: "20px",
			row: "20px"
		},
		col: {
			smallDesktop: 3,
			desktop: 3,
			mobile: 3,
			tablet: 3,
		},
		children: items
	},
};

