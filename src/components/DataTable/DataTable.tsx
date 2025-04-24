import { format } from "date-fns";

import { DataTableTypes } from "lib/types/component.types";

export const DataTable: React.FC<DataTableTypes> = ({ data, headers }) => {
	return (
		<div className="w-[95%] relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
					{data.slice(0, 100).map((row) => (
						<tr
							key={row.id}
							id={row.id}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							{headers.map((header) => (
								<td key={header} className="border px-2 py-1 whitespace-nowrap">
									{(() => {
										const value = row[header];
										if (
											header === "time" ||
											(header === "updated" && typeof row[header] === "string")
										)
											return format(
												new Date(row[header]),
												"yyyy-MM-dd HH:mm:ss"
											);
										else if (typeof value === "number") {
											return value.toFixed(2);
										} else if (value !== undefined && value !== null) {
											return String(value);
										} else {
											return "—";
										}
									})()}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<nav
				className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
				aria-label="Table navigation"
			>
				<span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
					Showing{" "}
					<span className="font-semibold text-gray-900 dark:text-white">
						1-10
					</span>{" "}
					of{" "}
					<span className="font-semibold text-gray-900 dark:text-white">
						1000
					</span>
				</span>

				<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
					<li>pagination</li>
				</ul>
			</nav>
		</div>
	);
};

export default DataTable;
