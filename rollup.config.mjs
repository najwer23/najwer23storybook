import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";

// https://prateeksurana.me/blog/react-component-library-using-storybook-7/
// import { Button } from "najwer23storybook/lib/index";

import * as fs from "fs";

const getFiles = (dir, files_, query) => {
	files_ = files_ || [];
	var files = fs.readdirSync(dir);
	for (var i in files) {
		var name = dir + "/" + files[i];
		if (fs.statSync(name).isDirectory()) {
			getFiles(name, files_, query);
		} else {
			if (name.includes(query)) files_.push(name);
		}
	}
	return files_;
};

const filesIndexTs = getFiles("src/stories/", [], "index.ts").map(
	(v) => v.split("//").at(-1).split("/")[0]
);

const Input = Object.fromEntries(
	filesIndexTs.map((v) => [
		`${v.slice(0, 1).toUpperCase() + v.slice(1)}`,
		`src/stories/${v}/index.ts`,
	])
);

export default {
	input: Input,
	output: {
		dir: "lib",
		format: "esm",
		sourcemap: true,
	},
	plugins: [
		peerDepsExternal(),
		resolve(),
		typescript(),
		postcss({
			extensions: [".css"],
			minimize: true,
		}),
		terser(),
	],
};