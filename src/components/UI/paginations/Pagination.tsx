import { FC, useState } from "react";

import { PaginationStyle } from "./paginationStyle";

import { PaginationProps } from "./paginationTypes";
import { calculatePaginationTotalCountPagesHelper } from "../../../utils/helper-functions/helperComponentFunctions";

export const Pagination: FC<PaginationProps> = ({
  totalUsersCount,
  usersCount,
  currentPage,
  onChangedPage,
}) => {
  const [lengthNumber, setLengthNumber] = useState<number>(1);

  const pages: Array<number> = [];
  const paginationLength: number = 5;

  const result = calculatePaginationTotalCountPagesHelper(
    totalUsersCount,
    usersCount,
    paginationLength,
  );

  for (let index = 1; index <= result.totalPagesCount; index++) {
    pages.push(index);
  }

  const leftArrowPageNumber = (lengthNumber - 1) * paginationLength + 1;
  const rightArrowPageNumber = lengthNumber * paginationLength;

  return (
    <PaginationStyle>
      {lengthNumber > 1 && (
        <i
          className="bx bx-chevron-left"
          onClick={() => setLengthNumber(lengthNumber - 1)}
        ></i>
      )}

      {pages
        .filter(
          (page: number) =>
            page >= leftArrowPageNumber && page <= rightArrowPageNumber,
        )
        .map((page: number, index: number) => (
          <p key={index}>
            <span
              className={currentPage === page ? "active__page" : undefined}
              onClick={() => onChangedPage(page)}
            >
              {page}
            </span>
          </p>
        ))}

      {result.paginationLengthCount > lengthNumber && (
        <i
          className="bx bx-chevron-right"
          onClick={() => setLengthNumber(lengthNumber + 1)}
        ></i>
      )}
    </PaginationStyle>
  );
};
