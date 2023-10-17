type PaginationProps = {
  totalUsersCount: number;
  usersCount: number;
  currentPage: number;
  onChangedPage: (page: number, term: string, friend: null | boolean) => void;
  term: string;
  friend: null | boolean;
};

export { PaginationProps };
