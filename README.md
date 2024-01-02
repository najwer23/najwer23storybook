
# Design System for React.js

This package offers a range of design system assets, including components, styles, and guidelines, to facilitate the development of consistent and user-friendly interfaces across various applications and platforms.

<div style={{ display: "flex", gap: "20px" }}>
	<a href="https://www.npmjs.com/package/najwer23storybook" target="_blank">
		<img
			title="NPM package"
			src="https://img.icons8.com/color/96/npm.png"
			alt="A wall of logos representing different styling technologies"
		/>
	</a>
	<a href="https://najwer23.github.io/najwer23storybook/" target="_blank">
		<img
			title="Demo"
			src="https://img.icons8.com/clouds/100/domain.png"
			alt="A wall of logos representing different styling technologies"
		/>
	</a>
	<a href="https://github.com/najwer23/najwer23storybook" target="_blank">
		<img
			title="Github"
			width={96}
			src="https://img.icons8.com/clouds/100/github.png"
			alt="A wall of logos representing different styling technologies"
		/>
	</a>
</div>

# Prerequisites
```js
"react": "^18.2.0"
"react-dom": "^18.2.0"
"typescript": "^5.3.3"
"storybook": "^7.6.7"
```

# Install
```js
yarn add najwer23storybook --dev
```
```js
npm install najwer23storybook --save-dev
```

# Example
```typescript
import { Button } from "najwer23storybook/lib/Button";

export const Example = () => {
	return <Button
		ariaLabel="button-click"
		onClick={() => {}}
		text="Button"
		type="button"
	/>
}
```

# Author

Mariusz Najwer