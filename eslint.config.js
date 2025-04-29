import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default [
	// Base JS config
	{
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module",
			globals: globals.browser,
		},
		plugins: {
			react,
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},

	// Ignore files
	{
		ignores: ["dist"],
	},

	// // JS/JSX files
	// {
	// 	files: ["**/*.js", "**/*.jsx"],
	// 	languageOptions: {
	// 		ecmaVersion: 2020,
	// 		sourceType: "module",
	// 	},
	// },

	// TS/TSX files
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: [
					"./tsconfig.eslint.json",
					"./tsconfig.node.json",
					"./tsconfig.app.json",
				],
				tsconfigRootDir: new URL(".", import.meta.url).pathname,
			},
			ecmaVersion: 2020,
			sourceType: "module",
			globals: globals.browser,
		},
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
		},
	},
];
