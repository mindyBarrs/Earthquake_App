import { useCallback } from "react";
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";

import { ScatterPlotTypes } from "lib/types/component.types";

import { RootState } from "store";
import { setHoveredPoint } from "store/reducer/chartReducer";

export const ScatterPlot: React.FC<ScatterPlotTypes> = ({ chartData }) => {
	const dispatch = useDispatch();

	const chart = useSelector((state: RootState) => state.chart);

	const handleMouseOver = (point: any) => {
		const safePoint = { ...point };

		dispatch(setHoveredPoint(safePoint?.id));
	};

	return (
		<>
			{chart.xAxis && chart.yAxis && (
				<ResponsiveContainer width="100%" height={400}>
					<ScatterChart
						margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
						title={`Scatter plot of ${chart.xAxis} vs ${chart.yAxis}`}
					>
						<XAxis dataKey={chart.xAxis} name={chart.xAxis} type="number" />
						<YAxis dataKey={chart.yAxis} name={chart.yAxis} type="number" />
						<Tooltip cursor={{ strokeDasharray: "3 3" }} />
						<Scatter
							name="Earthquakes"
							data={chartData}
							fill="#3182ce"
							onMouseOver={(state) => handleMouseOver(state)}
							shape={(props: any) => {
								const isHovered =
									chart.hoveredPoint === String(props.payload.id);
								const titleText = `${props.payload[chart.xAxis]}, ${
									props.payload[chart.yAxis]
								}`;

								return (
									<>
										<title>{titleText}</title>
										<circle
											cx={props.cx}
											cy={props.cy}
											r={isHovered ? 6 : 3}
											fill={isHovered ? "red" : "#3182ce"}
										/>
									</>
								);
							}}
						/>
					</ScatterChart>
				</ResponsiveContainer>
			)}
		</>
	);
};

export default ScatterPlot;
