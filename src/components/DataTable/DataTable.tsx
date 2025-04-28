import { format } from "date-fns";
import { useSelector } from "react-redux";

import { DataTableTypes } from "lib/types/component.types";
import { PAGE_SIZE } from "lib/constants";

import { RootState } from "store";

export const DataTable: React.FC<DataTableTypes> = ({
	data,
	headers,
	currentPage,
	totalPages,
	nextPage,
	prevPage,
}) => {
	const { hoveredPoint } = useSelector((State: RootState) => State.chart);

	return (
		<>
			<div className="w-[95%] relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-brown-650 dark:text-gray-400">
						<tr>
							{headers.map((header, index) => {
								return (
									<th key={index + 1} scope="col" className="p-4">
										{header}
									</th>
								);
							})}
						</tr>
					</thead>

					<tbody>
						{data.map((row) => (
							<tr
								key={row.id}
								id={String(row.id)}
								className={`border-b dark:border-gray-700 border-gray-200 
							hover:bg-green-200 hover:text-black ${
								hoveredPoint && row.id === hoveredPoint
									? "bg-green-200 text-black"
									: "bg-brown-650"
							}`}
							>
								{headers.map((header) => (
									<td
										key={header}
										className="border px-2 py-1 whitespace-nowrap"
									>
										{header === "time" &&
										row[header] !== undefined &&
										typeof row[header] === "string" &&
										!isNaN(new Date(row[header]!).getTime())
											? format(new Date(row[header]!), "yyyy-MM-dd HH:mm:ss")
											: typeof row[header] === "number"
											? row[header].toFixed(2)
											: row[header] !== undefined
											? String(row[header])
											: "—"}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex justify-between items-center mt-4">
				<button
					onClick={prevPage}
					className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
					disabled={currentPage === 1}
				>
					Previous
				</button>

				<span>
					Page {currentPage} of {totalPages}
				</span>

				<button
					onClick={nextPage}
					className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default DataTable;
