import { useMemo } from "react";

import { ItemProps } from "../redux/reducers/profileReducer";

type UserPost = ItemProps & { searchUsers: string };

export const useProfilePosts = (postUsers: ItemProps, searchUsers: string) => {
  const searchedPosts = useMemo(() => {
    if (Array.isArray(postUsers)) {
      return postUsers.filter((userPost: UserPost) => {
        return userPost.name.includes(searchUsers);
      });
    }
  }, [postUsers, searchUsers]);

  return searchedPosts;
};
