import type { Meta, StoryObj } from '@storybook/react';

import { MenuAside } from "./MenuAside";

const meta: Meta<typeof MenuAside> = {
	title: "Menu/MenuAside",
	component: MenuAside,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuLeftAside: Story = {
	args: {
		menuItems: [
			[
				{
					menuTitle: "Menu",
					items: [
						{
							itemLink: "link1",
							itemLinkText: "link1",
							itemLinkType: "hash",
						},
						{
							itemLink: "link2",
							itemLinkText: "link2",
							itemLinkType: "hash",
						},
					],
				},
				{
					menuTitle: "Projects",
					items: [
						{
							itemLink: "link1",
							itemLinkText: "link1",
							itemLinkType: "hash",
						},
						{
							itemLink: "link2",
							itemLinkText: "link2",
							itemLinkType: "hash",
						},
					],
				},
			],
		],
	},
};


