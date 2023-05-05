import { SearchInputStyle } from "./searchInputStyle";

export const SearchInput = () => {
  return (
    <>
      <i className="bx bx-search"></i>
      <SearchInputStyle type="text" placeholder="Search..." />
    </>
  );
};
