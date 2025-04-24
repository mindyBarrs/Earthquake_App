import { earthquakeAPITypes } from "lib/types/earthquake.types";

export interface ScatterPlotTypes {
	chartData: any[];
}

export interface DataTableTypes {
	data: any[];
	headers: string[];
}

export interface DashboardTypes {
	data?: earthquakeAPITypes;
}
