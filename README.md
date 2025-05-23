# React + TypeScript + Vite

## Overview

Single Page Application (SPA) that loads a public dataset containing geospatial statistical data, displays it in both an interactive plot and a data table, and demonstrates state linking between components.

## Suggested Setup and Data Source

Feel free to skip the suggestions below, use your favorite project initialization method and geospatial dataset.

### Project Setup

1. Clone Repo

```js
	git clone https://github.com/mindyBarrs/Earthquake_App.git
```

2. Running Application:

```js
   npm i

   npm run dev
```

### Data Source

We recommend the USGS Earthquake Data from here:
<https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv>

This dataset includes information about all recorded earthquakes in the last 30 days (latitude, longitude, magnitude, place, time, etc.). Feel free to filter or extend the dataset as needed for your visualization.

### Third-Party Libraries

- ReCharts: Used to create the Scatter Plot component
- Paparse: Used to parse the CSV earthquake data
- Date-Fns: Used to assist in formating dates
- Tailwind CSS: Used to setup theaming for the application and the base of some custom components.
- Redux & Redux Toolkit Query: Used for state managment and gettting the CSV from the provided URL

### Color Pallette

[Color Pallete](https://coolors.co/palette/f0ead2-dde5b6-adc178-a98467-6c584c) used to style the application.
