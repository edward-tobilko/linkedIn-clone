import { FC, useEffect, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { SearchFormStyle, SearchInputStyle } from "./searchInputStyle";

import {
  SearchInputType,
  FilteredFriendsValuesType,
  FormType,
} from "./searchInputTypes";

import { useTypeSelector } from "../../../hooks/useTypeSelector";
import {
  filteredUsersSelector,
  searchTermSelector,
} from "../../../utils/selectors/socialSelectors";

const SearchInput: FC<SearchInputType> = ({ onSearchTermChanged }) => {
  const term = useTypeSelector(searchTermSelector);
  const friend = useTypeSelector(filteredUsersSelector);

  const defaultValues = useMemo(() => {
    return {
      searchTerm: term,
      filteredFriends: String(friend) as FilteredFriendsValuesType,
    };
  }, [term, friend]);

  const { handleSubmit, register, reset } = useForm({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    onSearchTermChanged(
      data.searchTerm,
      data.filteredFriends === "true"
        ? true
        : data.filteredFriends === "false"
        ? false
        : null,
    );
  };

  useEffect(() => {
    reset(defaultValues);
  }, [term, friend, reset]);

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
          <option value="null">All</option>
          <option value="true">Followed Users</option>
          <option value="false">UnFollowed Users</option>
        </select>
      </SearchFormStyle>
    </>
  );
};

export default SearchInput;
