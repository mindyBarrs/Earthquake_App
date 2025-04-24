import { useEffect } from "react";
import { useDispatch } from "react-redux";

import FilterPanel from "@components/FilterPanel/FilterPanel";
import ScatterPlot from "@components/ScatterPlot/ScatterPlot";
import DataTable from "@components/DataTable/DataTable";

import { setAxixsFieldOptions } from "store/reducer/chartReducer";
import { useGetEarthquakeDataQuery } from "store/services/earthquakeAPI";

export const Dashboard = () => {
	const dispatch = useDispatch();

	const { data, isLoading, error } = useGetEarthquakeDataQuery();

	useEffect(() => {
		if (data) {
			dispatch(setAxixsFieldOptions(data?.headers));
		}
	}, [data]);

	return (
		<>
			<FilterPanel />

			<ScatterPlot chartData={data?.data ?? []} />

			{!isLoading && !error && <DataTable data={data?.data ?? []} />}

			{error && <div>{error.data}</div>}
		</>
	);
};
