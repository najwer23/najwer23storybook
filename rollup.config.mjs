import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";

// https://prateeksurana.me/blog/react-component-library-using-storybook-7/
// import { Button } from "najwer23storybook/lib/button";

import * as fs from "fs";

function getFiles(dir, files_) {
	files_ = files_ || [];
	var files = fs.readdirSync(dir);
	for (var i in files) {
		var name = dir + "/" + files[i];
		if (fs.statSync(name).isDirectory()) {
			getFiles(name, files_);
		} else {
			if (name.includes("index.ts")) files_.push(name);
		}
	}
	return files_;
}

const DirOfFileTS = getFiles("src/stories/").map(
	(v) => v.split("//").at(-1).split("/")[0]
);
const exportDefault = [];

DirOfFileTS.forEach((v, i) => {
	exportDefault.push({
		input: `src/stories/${v}/index.ts`,
		output: [
			{
				file: `lib/${v.slice(0, 1).toUpperCase() + v.slice(1)}.js`,
				format: "cjs",
				sourcemap: true,
			},
		],
		plugins: [
			i === 0 ? del({ targets: "lib/*" }) : "",
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript(),
			postcss({
				extensions: [".css"],
				minimize: true,
			}),
			terser(),
		],
	});
	exportDefault.push({
		input: `lib/${v.slice(0, 1).toUpperCase() + v.slice(1)}.d.ts`,
		output: [
			{
				file: `lib/${v.slice(0, 1).toUpperCase() + v.slice(1)}.d.ts`,
				format: "es",
			},
		],
		plugins: [dts()],
		external: [/\.css$/],
	});
});

export default exportDefault;
