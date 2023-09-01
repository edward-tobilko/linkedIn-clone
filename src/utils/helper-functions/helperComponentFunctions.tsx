const calculatePaginationTotalCountPagesHelper = (
  totalItems: number,
  itemsPerPage: number,
  paginationLength: number,
) => {
  const totalPagesCount = Math.ceil(totalItems / itemsPerPage);
  const paginationLengthCount = Math.ceil(totalPagesCount / paginationLength);

  return { totalPagesCount, paginationLengthCount };
};

export { calculatePaginationTotalCountPagesHelper };
