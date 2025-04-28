import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setXAxis, setYAxis } from "store/reducer/chartReducer";

import type { RootState } from "store";

export const FilterPanel = () => {
	const dispatch = useDispatch();
	const chart = useSelector((state: RootState) => state.chart);

	const handleOnChangeXAxis = useCallback((value: string) => {
		dispatch(setXAxis(value));
	}, []);

	const handleOnChangeYAxis = useCallback((value: string) => {
		dispatch(setYAxis(value));
	}, []);

	return (
		<div className="w-[95%] flex justify-center">
			<div className="flex space-x-4 mb-4">
				<label>
					X Axis:
					<select
						className="ml-2 border rounded px-2 py-1"
						onChange={(e) => handleOnChangeXAxis(e.target.value)}
						defaultValue="Select a X Axis:"
					>
						<option value="Select a X Axis:">Select a X axis:</option>
						{chart?.axisFieldOptions.map((field: string) => (
							<option key={field} value={field}>
								{field}
							</option>
						))}
					</select>
				</label>
				<label>
					Y Axis:
					<select
						className="ml-2 border rounded px-2 py-1"
						onChange={(e) => handleOnChangeYAxis(e.target.value)}
						defaultValue="Select a Y axis:"
					>
						<option value="Select a Y axis:">Select a Y axis:</option>
						{chart?.axisFieldOptions.map((field: string) => (
							<option key={field} value={field}>
								{field}
							</option>
						))}
					</select>
				</label>
			</div>
		</div>
	);
};

export default FilterPanel;
