import { useMemo } from "react";

import { ItemProps } from "../redux/reducers/profile-reducer/profileReducerTypes";

export const useProfilePosts = (
  postUsers?: ItemProps[],
  searchUsers?: string,
) => {
  const searchedPosts = useMemo(() => {
    if (Array.isArray(postUsers)) {
      return postUsers.filter((userPost) => {
        return userPost.name.includes(searchUsers!);
      });
    }
  }, [postUsers, searchUsers]);

  return searchedPosts;
};
