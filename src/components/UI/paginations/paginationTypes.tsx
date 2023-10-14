type PaginationProps = {
  totalUsersCount: number;
  usersCount: number;
  currentPage: number;
  onChangedPage: (page: number, term: string) => void;
  term: string;
};

export { PaginationProps };
