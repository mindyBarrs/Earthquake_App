import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

import { DataTableTypes } from "lib/types/component.types";

import { RootState } from "store";
import { setHoveredPoint } from "store/reducer/chartReducer";

export const DataTable: React.FC<DataTableTypes> = ({
	data,
	headers,
	currentPage,
	totalPages,
	nextPage,
	prevPage,
}) => {
	const dispatch = useDispatch();
	const { hoveredPoint } = useSelector((State: RootState) => State.chart);

	const handleMouseOver = (id: string) => {
		dispatch(setHoveredPoint(id));
	};
	return (
		<>
			<div
				tabIndex={0}
				className="w-[95%] relative overflow-x-auto shadow-md sm:rounded-lg"
			>
				<table className="w-full text-sm text-left rtl:text-right text-white dark:text-white">
					<thead className="text-xs text-white uppercase bg-gray-50 dark:bg-brown-650 dark:text-white">
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
								onMouseOver={() => handleMouseOver(String(row.id))}
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

			<div className="w-[95%] flex justify-between items-center mt-4">
				<button
					type="button"
					onClick={prevPage}
					className="text-black bg-green-200 hover:bg-green-500 focus:ring-4
					 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
					disabled={currentPage === 1}
				>
					Previous
				</button>

				<span>
					Page {currentPage} of {totalPages}
				</span>

				<button
					onClick={nextPage}
					className="text-black bg-green-200 hover:bg-green-500 focus:ring-4
					 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default DataTable;
