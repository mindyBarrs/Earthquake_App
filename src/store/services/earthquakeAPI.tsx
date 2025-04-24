import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Papa from "papaparse";

import { earthquakeAPITypes } from "lib/types/earthquake.types";

const EARTHQUAKE_URL =
	"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv";

export const earthquakeApi = createApi({
	reducerPath: "earthquakeAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "/" }), // base URL not used here
	endpoints: (builder) => ({
		getEarthquakeData: builder.query<earthquakeAPITypes, void>({
			async queryFn(): Promise<
				{ data: earthquakeAPITypes } | { error: FetchBaseQueryError }
			> {
				try {
					const response = await fetch(EARTHQUAKE_URL);
					const csvText = await response.text();

					const parsed = Papa.parse<Record<string, unknown>>(csvText, {
						header: true,
						dynamicTyping: true,
						skipEmptyLines: true,
					});

					if (parsed.errors.length > 0) {
						return {
							error: {
								status: 500,
								data: JSON.stringify(parsed.errors),
							} as FetchBaseQueryError,
						};
					}

					const transformedData = parsed.data.map((entry) => {
						const normalizedEntry = { ...entry };

						const normalizeDate = (value: unknown) => {
							const str = String(value);
							const parsedDate = new Date(str);
							return !isNaN(parsedDate.getTime())
								? parsedDate.toISOString()
								: str;
						};

						if (entry.time) normalizedEntry.time = normalizeDate(entry.time);
						if (entry.updated)
							normalizedEntry.updated = normalizeDate(entry.updated);

						return normalizedEntry;
					});

					return {
						data: {
							data: transformedData,
							headers: parsed.meta.fields || [],
						},
					};
				} catch (err) {
					return {
						error: {
							status: "FETCH_ERROR",
							data: JSON.stringify((err as Error).message) || "Unknown error",
						} as unknown as FetchBaseQueryError,
					};
				}
			},
		}),
	}),
});

export const { useGetEarthquakeDataQuery } = earthquakeApi;
export default earthquakeApi;
