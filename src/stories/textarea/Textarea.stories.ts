import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
	title: "Example/Textarea",
	component: Textarea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;


export const TypeTextarea: Story = {
	args: {
		name: "text77",
		label: "Uuuu Label",
		placeholder: "tttt",
		defaultValue: "88",
		onBlur: (e, isError) => console.log(e.target.value, isError),
		errorOptions: {
			empty: true,
		},
	},
};


