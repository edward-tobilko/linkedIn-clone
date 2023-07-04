import { FC, ChangeEvent } from "react";
import { connect } from "react-redux";

import { SearchInputStyle } from "./searchInputStyle";

import { RootState } from "../../../redux/store";
import { useMyContext } from "../../../context/Context";

// Container component
const mapState = (state: RootState) => {
  return {
    postUsers: state.profilePage.postUsers,
  };
};

const SearchInputContainer = connect(mapState, null);

const SearchInput: FC<any> = ({ postUsers }) => {
  const props = useMyContext();

  return (
    <>
      <i className="bx bx-search"></i>
      <SearchInputStyle
        type="text"
        placeholder="Search..."
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          props?.setSearchUsers(event.target.value)
        }
        value={props?.searchUsers}
      />
    </>
  );
};

export default SearchInputContainer(SearchInput);
