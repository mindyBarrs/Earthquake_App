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
		<div className="">
			<h2 className="text-xl font-semibold mb-4">Earthquake Plot</h2>

			<div className="flex space-x-4 mb-4">
				<label>
					X Axis:
					<select
						className="ml-2 border rounded px-2 py-1"
						onChange={(e) => handleOnChangeXAxis(e.target.value)}
					>
						<option selected>Select a X axis:</option>
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
					>
						<option selected>Select a Y axis:</option>
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
