import { useEffect } from "react";
import { useDispatch } from "react-redux";

import FilterPanel from "@components/FilterPanel/FilterPanel";
import ScatterPlot from "@components/ScatterPlot/ScatterPlot";
import DataTable from "@components/DataTable/DataTable";

import { setAxixsFieldOptions } from "store/reducer/chartReducer";
import { useGetEarthquakeDataQuery } from "store/services/earthquakeAPI";

import "./App.css";

function App() {
	const dispatch = useDispatch();
	const { data, isLoading, error } = useGetEarthquakeDataQuery();

	useEffect(() => {
		if (data) {
			dispatch(setAxixsFieldOptions(data?.headers));
		}
	}, [isLoading]);

	return (
		<>
			<FilterPanel />

			{data?.data && <ScatterPlot chartData={data.data || []} />}

			<DataTable data={data?.data || []} />
		</>
	);
}

export default App;
