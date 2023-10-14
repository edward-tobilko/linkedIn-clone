import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { SearchInputStyle } from "./searchInputStyle";

type SearchInputType = {
  onSearchTermChanged: (searchTerm: string) => void;
};

type FormType = {
  searchTerm: string;
};

const SearchInput: FC<SearchInputType> = ({ onSearchTermChanged }) => {
  const { handleSubmit, register } = useForm<FormType>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    onSearchTermChanged(data.searchTerm);

    console.log(data.searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <i className="bx bx-search"></i>
        <SearchInputStyle
          type="text"
          placeholder="Search user by name..."
          {...register("searchTerm")}
        />

        <button type="submit">Find</button>
      </form>
    </>
  );
};

export default SearchInput;
