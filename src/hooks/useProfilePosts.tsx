import { useMemo } from "react";

import { ItemProps } from "../redux/reducers/profile-reducer/profileReducerTypes";

export const useProfilePosts = (
  postUsers?: ItemProps[],
  searchUsers?: string,
) => {
  const searchedPosts = useMemo(() => {
    if (Array.isArray(postUsers) && postUsers != null) {
      return postUsers.filter((userPost) => {
        return userPost.name.includes(searchUsers!);
      });
    } else {
      throw new Error("Post users can not be null");
    }
  }, [postUsers, searchUsers]);

  return searchedPosts;
};
