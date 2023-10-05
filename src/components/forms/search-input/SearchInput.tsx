import { FC, ChangeEvent } from "react";

import { SearchInputStyle } from "./searchInputStyle";

import { useMyContext } from "../../../context/Context";

const SearchInput: FC = () => {
  const props = useMyContext();

  return (
    <>
      <i className="bx bx-search"></i>
      <SearchInputStyle
        type="text"
        placeholder="Search by name..."
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          props?.setSearchUsers(event.target.value)
        }
        value={props?.searchUsers}
      />
    </>
  );
};

export default SearchInput;
