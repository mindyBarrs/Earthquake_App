# React + TypeScript + Vite

## Overview

Build a Single Page Application (SPA) that loads a public dataset containing geospatial statistical data, displays it in both an interactive plot and a data table, and demonstrates state linking between components.

Use React and Typescript and any other libraries or tools help you deliver the required functionality.

## Suggested Setup and Data Source

Feel free to skip the suggestions below, use your favorite project initialization method and geospatial dataset.

### Project Setup

1. Setting up the App:

   - Use Vite with React and TypeScript to scaffold your new project, e.g., with `npm create vite@latest`
   - Initialize a Git repository in your project folder.

2. Styling:
   - Any styling can be used, but Tailwind is recommended!

### Data Source

We recommend the USGS Earthquake Data from here:
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv

This dataset includes information about all recorded earthquakes in the last 30 days (latitude, longitude, magnitude, place, time, etc.). Feel free to filter or extend the dataset as needed for your visualization.

## Requirements

### Application Layout

Your application should have a two-pane responsive layout targeting a laptop/desktop computer:

1. Plotting Pane:

   - Render an interactive plot (e.g., a scatter plot) where each point represents one row in the table.
   - Allow the variable plotted on each axis to vary based on a user choice, e.g., in a dropdown or similar, limit options to the number-typed fields in the dataset

2. Tabular Pane:
   - Render the header of the dataset in the top row stickied to the top of the table.
   - Render the loaded data in a table that can scroll to all columns and rows of the dataset.
   - Apply any formatting that makes sense for each column (e.g., date formatting, etc.).

### Data Loading and Processing

1. On app load, fetch and parse the data with appropriate placeholders, parse the data into an appropriate structure for plotting/table rendering.

### Interactivity

Allow the user to highlight a row of the table with a mouse click or hover. When a row is highlighted in the table, highlight the corresponding point in the plotting pane (e.g., change its color, size, or add a tooltip at its location).

Bonus:

- Add the inverse interaction in the plotting pane; when a user clicks or hovers on a data point, the corresponding row in the table is brought into view, highlighted and/or the table is filtered to that record.

### State Management

Implement different methods of sharing state across components.

1. Prop-Drilling
2. Context API
3. Other libraries (e.g., Zustand):

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
	extends: [
		// Remove ...tseslint.configs.recommended and replace with this
		...tseslint.configs.recommendedTypeChecked,
		// Alternatively, use this for stricter rules
		...tseslint.configs.strictTypeChecked,
		// Optionally, add this for stylistic rules
		...tseslint.configs.stylisticTypeChecked,
	],
	languageOptions: {
		// other options...
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
	plugins: {
		// Add the react-x and react-dom plugins
		"react-x": reactX,
		"react-dom": reactDom,
	},
	rules: {
		// other rules...
		// Enable its recommended typescript rules
		...reactX.configs["recommended-typescript"].rules,
		...reactDom.configs.recommended.rules,
	},
});
```
