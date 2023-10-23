type FilteredFriendsValuesType = "true" | "false" | "null";

type SearchInputType = {
  onSearchTermChanged: (
    searchTerm: string,
    filteredFriends: boolean | null,
  ) => void;
};

type FormType = {
  searchTerm: string;
  filteredFriends: FilteredFriendsValuesType;
};

export { FilteredFriendsValuesType, SearchInputType, FormType };
