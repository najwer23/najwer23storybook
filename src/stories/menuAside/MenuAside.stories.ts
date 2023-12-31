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
			[
				{
					menuTitle: "project",
					items: [
						{
							itemLink: "sss",
							itemLinkText: "text1",
							itemLinkType: "hash",
						},
						{
							itemLink: "sss",
							itemLinkText: "text2",
							itemLinkType: "hash",
						},
					],
				},
				{
					menuTitle: "project 2",
					items: [
						{
							itemLink: "sss",
							itemLinkText: "text21",
							itemLinkType: "hash",
						},
						{
							itemLink: "sss",
							itemLinkText: "text22",
							itemLinkType: "hash",
						},
					],
				},
			],
		],
	},
};


