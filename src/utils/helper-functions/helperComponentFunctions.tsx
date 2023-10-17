type CalculatePaginationTotalCountPagesHelperResultType = {
  totalPagesCount: number;
  paginationLengthCount: number;
};

const calculatePaginationTotalCountPagesHelper = (
  totalItems: number,
  itemsPerPage: number,
  paginationLength: number,
): CalculatePaginationTotalCountPagesHelperResultType => {
  const totalPagesCount = Math.ceil(totalItems / itemsPerPage);
  const paginationLengthCount = Math.ceil(totalPagesCount / paginationLength);

  return { totalPagesCount, paginationLengthCount };
};

export { calculatePaginationTotalCountPagesHelper };
