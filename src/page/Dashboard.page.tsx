import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import FilterPanel from "@components/FilterPanel/FilterPanel";
import ScatterPlot from "@components/ScatterPlot/ScatterPlot";
import DataTable from "@components/DataTable/DataTable";

import { usePagination } from "hooks/usePagination";

import { setAxixsFieldOptions } from "store/reducer/chartReducer";

import { useGetEarthquakeDataQuery } from "store/services/earthquakeAPI";

import { earthquakeRow } from "lib/types/earthquake.types";
import { PAGE_SIZE } from "lib/constants";

export const Dashboard = () => {
	const dispatch = useDispatch();

	const { data, isLoading, error } = useGetEarthquakeDataQuery();

	const [allData, setAllData] = useState<earthquakeRow[]>([]);

	useEffect(() => {
		if (data) {
			dispatch(setAxixsFieldOptions(data?.filterOptions));
			setAllData(data?.data);
		}
	}, [data, dispatch]);

	const { currentPage, totalPages, currentData, nextPage, prevPage } =
		usePagination(allData, PAGE_SIZE);

	return (
		<>
			<h1 className="text-brown-650 text-xl font-semibold mb-4">
				Earthquake Data
			</h1>

			<FilterPanel />

			<ScatterPlot chartData={currentData ?? []} />

			{!isLoading && !error && (
				<DataTable
					data={currentData ?? []}
					headers={data?.headers ?? []}
					currentPage={currentPage}
					totalPages={totalPages}
					nextPage={nextPage}
					prevPage={prevPage}
				/>
			)}

			{error && <div>{error?.data}</div>}
		</>
	);
};
