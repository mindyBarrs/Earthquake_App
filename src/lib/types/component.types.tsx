import { earthquakeAPITypes } from "lib/types/earthquake.types";

export interface ScatterPlotTypes {
	chartData: any[];
}

export interface DataTableTypes {
	data: any[];
}

export interface DashboardTypes {
	data?: earthquakeAPITypes | undefined;
}
