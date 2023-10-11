import { FC, ChangeEvent } from "react";

import { SearchInputStyle } from "./searchInputStyle";

import { useTypeDispatch } from "../../../hooks/useTypeSelector";

import actionCreators from "../../../redux/ducks/actionCreators";

type SearchInputType = {
  searchTerm: string;
};

const SearchInput: FC<SearchInputType> = ({ searchTerm }) => {
  const dispatch = useTypeDispatch();

  return (
    <>
      <i className="bx bx-search"></i>
      <SearchInputStyle
        type="text"
        placeholder="Search user by name..."
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          dispatch(actionCreators.setSearchTermAC(event.target.value))
        }
        value={searchTerm}
      />
    </>
  );
};

export default SearchInput;
