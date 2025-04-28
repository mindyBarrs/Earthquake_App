export interface earthquakeData {
	data: earthquakeRow[];
	headers: string[];
	filterOptions: string[];
}

export interface earthquakeRow {
	[key: string]: string | number | undefined;
}
