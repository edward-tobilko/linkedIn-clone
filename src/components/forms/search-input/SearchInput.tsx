import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { SearchFormStyle, SearchInputStyle } from "./searchInputStyle";

type SearchInputType = {
  onSearchTermChanged: (
    searchTerm: string,
    filteredFriends: null | boolean,
  ) => void;
};

type FormType = {
  searchTerm: string;
  filteredFriends: null | boolean;
};

const SearchInput: FC<SearchInputType> = ({ onSearchTermChanged }) => {
  const { handleSubmit, register, setValue } = useForm<FormType>({
    defaultValues: {
      searchTerm: "",
      filteredFriends: null,
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    onSearchTermChanged(data.searchTerm, data.filteredFriends);
    // setValue("searchTerm", "");
  };

  return (
    <>
      <SearchFormStyle onSubmit={handleSubmit(onSubmit)}>
        <button type="submit" className="searchBtn">
          <i className="bx bx-search"></i>
        </button>

        <SearchInputStyle
          type="text"
          placeholder="Search user by name..."
          {...register("searchTerm")}
        />

        <select {...register("filteredFriends")}>
          <option defaultValue="null">All</option>
          <option value="true">Followed Users</option>
          <option value="false">UnFollowed Users</option>
        </select>
      </SearchFormStyle>
    </>
  );
};

export default SearchInput;
