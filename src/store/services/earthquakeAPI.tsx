import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Papa from "papaparse";

const EARTHQUAKEURL =
	"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv";

export const earthquakeApi = createApi({
	reducerPath: "earthquakeAPI",
	baseQuery: fetchBaseQuery({ baseUrl: EARTHQUAKEURL }),
	endpoints: (builder) => ({
		getEarthquakeData: builder.query<any[], void>({
			async queryFn(): Promise<
				{ data: any[] } | { error: FetchBaseQueryError }
			> {
				try {
					const res = await fetch(EARTHQUAKEURL);
					const text = await res.text();

					const parsed = Papa.parse(text, {
						header: true,
						dynamicTyping: true,
						skipEmptyLines: true,
					});

					if (parsed.errors.length) {
						return {
							error: {
								status: 500,
								data: parsed.errors,
							},
						};
					}

					return { data: parsed.data as any[] };
				} catch (err: any) {
					return {
						error: {
							status: "FETCH_ERROR",
							error: err.message || "Unknown error",
						},
					};
				}
			},
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEarthquakeDataQuery } = earthquakeApi;

export default earthquakeApi;
