import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
	title: "Grid/Grid",
	component: Grid,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
	},
};

export default meta;
type Story = StoryObj<typeof meta>;


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
		children: (
			<>
				<div style={{background: "darkgrey"}}> Test1 </div>
				<div style={{background: "darkgrey"}}> <div> Test2, level2</div> </div>
				<div style={{background: "darkgrey"}}> Test3 </div>
				<div style={{background: "darkgrey"}}> Test4 </div>
				<div style={{background: "darkgrey"}}> Test5 </div>
			</>
		)
	},
};

