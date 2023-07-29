import { FC, useState } from "react";

import { PaginationStyle } from "./paginationStyle";

export const Pagination: FC<any> = ({
  totalUsersCount,
  usersCount,
  currentPage,
  paginationLength = 5,
  onChangedPage,
}) => {
  const [lengthNumber, setLengthNumber] = useState(1);

  const pages: any = [];
  const totalPagesCount = Math.ceil(totalUsersCount / usersCount);
  const paginationLengthCount = totalPagesCount / paginationLength;

  for (let index = 1; index <= totalPagesCount; index++) {
    pages.push(index);
  }

  const leftArrowPageNumber = (lengthNumber - 1) * paginationLength + 1;
  const rightArrowPageNumber = lengthNumber * paginationLength;

  return (
    <PaginationStyle>
      {paginationLengthCount > 1 && (
        <i
          className="bx bx-chevron-left"
          onClick={() => setLengthNumber(lengthNumber - 1)}
        ></i>
      )}

      {pages
        .filter(
          (page: any) =>
            page >= leftArrowPageNumber && page <= rightArrowPageNumber,
        )
        .map((page: any, index: number) => (
          <p key={index}>
            <span
              className={currentPage === page ? "active__page" : undefined}
              onClick={() => onChangedPage(page)}
            >
              {page}
            </span>
          </p>
        ))}

      {paginationLengthCount > lengthNumber && (
        <i
          className="bx bx-chevron-right"
          onClick={() => setLengthNumber(lengthNumber + 1)}
        ></i>
      )}
    </PaginationStyle>
  );
};
