import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChartState {
	xAxis: string;
	yAxis: string;
	hoveredPoint: string;
	axisFieldOptions: string[];
}

const initialState: ChartState = {
	xAxis: "",
	yAxis: "",
	hoveredPoint: "",
	axisFieldOptions: [],
};

export const chartReducer = createSlice({
	name: "chart",
	initialState: initialState,
	reducers: {
		setXAxis: (state, action: PayloadAction<string>) => {
			state.xAxis = action.payload;
		},
		setYAxis: (state, action: PayloadAction<string>) => {
			state.yAxis = action.payload;
		},
		setAxixsFieldOptions(state, action: PayloadAction<string[]>) {
			state.axisFieldOptions = action.payload;
		},
		setHoveredPoint(state, action: PayloadAction<string>) {
			state.hoveredPoint = action.payload;
		},
	},
});

export const { setXAxis, setYAxis, setAxixsFieldOptions, setHoveredPoint } =
	chartReducer.actions;
export default chartReducer.reducer;
