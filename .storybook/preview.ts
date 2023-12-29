import type { Preview } from "@storybook/react";
import "./Theme.css"

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ["Getting Started", "Colors"],
			},
		},
		backgrounds: {
			default: "twitter",
			values: [
				{
					name: "--n23-color-surface",
					value: "var(--n23-color-surface)",
				},
				{
					name: "white",
					value: "#fff",
				},
			],
		},
	},
};

export default preview;
