import { useState, useCallback } from "react";

export function usePagination<T>(items: T[], pageSize: number) {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(items.length / pageSize);

	const currentData = items.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize
	);

	const goToPage = useCallback(
		(page: number) => {
			setCurrentPage(Math.max(1, Math.min(page, totalPages)));
		},
		[totalPages]
	);

	const nextPage = useCallback(() => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	}, [totalPages]);

	const prevPage = useCallback(() => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	}, []);

	return {
		currentPage,
		totalPages,
		currentData,
		goToPage,
		nextPage,
		prevPage,
	};
}
