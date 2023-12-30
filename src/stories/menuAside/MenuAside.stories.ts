import type { Meta, StoryObj } from '@storybook/react';

import { MenuAside } from "./MenuAside";

const meta: Meta<typeof MenuAside> = {
	title: "Example/MenuAside",
	component: MenuAside,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	args: {
		menuItems: [
			{
				itemLink: "sss",
				itemLinkText: "text999",
				itemLinkType: "hash",
			},
			{
				itemLink: "sss",
				itemLinkText: "text9997",
				itemLinkType: "hash",
			},
			{
				itemLink: "link",
				itemLinkText: "Link",
				itemLinkType: "link",
			},
		],
	},
};


