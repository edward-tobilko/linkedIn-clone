type PaginationProps = {
  totalUsersCount: number;
  usersCount: number;
  currentPage: number;
  onChangedPage: (page: number) => void;
};

export { PaginationProps };
