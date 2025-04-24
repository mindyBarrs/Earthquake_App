import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

import { ScatterPlotTypes } from "lib/types/component.types";

import { RootState } from "store";

export const ScatterPlot: React.FC<ScatterPlotTypes> = ({ chartData }) => {
	const chart = useSelector((state: RootState) => state.chart);

	return (
		<>
			{chart.xAxis && chart.yAxis && (
				<ResponsiveContainer width="100%" height={400}>
					<ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
						<XAxis dataKey={chart.xAxis} name={chart.xAxis} type="number" />
						<YAxis dataKey={chart.yAxis} name={chart.yAxis} type="number" />
						<Tooltip cursor={{ strokeDasharray: "3 3" }} />
						<Scatter name="Earthquakes" data={chartData} fill="#3182ce" />
					</ScatterChart>
				</ResponsiveContainer>
			)}
		</>
	);
};

export default ScatterPlot;
