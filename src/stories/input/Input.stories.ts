import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: "Example/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
	},
};

export default meta;
type Story = StoryObj<typeof meta>;



export const TypeText: Story = {
	args: {
		name: "text77",
		type: "text",
		label: "Uuuu Label",
		placeholder: "tttt",
		defaultValue: "88",
		onBlur: (e, isError) => console.log(e.target.value, isError),
		errorOptions: {
			empty: true,
		},
	},
};


export const TypeEmail: Story = {
	args: {
		name: "text77",
		type: "text",
		label: "Uuuu Label",
		placeholder: "tttt",
		defaultValue: "88",
		onBlur: (e, isError) => console.log(e.target.value, isError),
		errorOptions: {
			empty: true,
			email: true,
		},
	},
};


