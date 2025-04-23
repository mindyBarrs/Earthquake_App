import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	xAxis: "",
	yAxis: "",
	axisFieldOptions: [],
};

export const chartReducer = createSlice({
	name: "chart",
	initialState: initialState,
	reducers: {
		setXAxis: (state, action) => {
			state.xAxis = action.payload;
		},
		setYAxis: (state, action) => {
			state.yAxis = action.payload;
		},
		setAxixsFieldOptions: (state, action) => {
			state.axisFieldOptions = action.payload;
		},
		clearAxis: (state) => {
			state = initialState;
		},
	},
});

export const { clearAxis, setXAxis, setYAxis, setAxixsFieldOptions } =
	chartReducer.actions;
export default chartReducer.reducer;
