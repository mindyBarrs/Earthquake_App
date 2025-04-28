import { earthquakeRow } from "lib/types/earthquake.types";

export interface ScatterPlotTypes {
	chartData: earthquakeRow[];
}

export interface DataTableTypes {
	data: earthquakeRow[];
	headers: string[];
	currentPage: number;
	totalPages: number;
	nextPage: () => void;
	prevPage: () => void;
}

export interface DashboardTypes {
	data?: earthquakeRow[];
}
