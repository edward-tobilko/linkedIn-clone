import { useMemo } from "react";

export const useProfilePosts = (postUsers: any, searchUsers: any) => {
  const searchedPosts = useMemo(() => {
    return postUsers.filter((userPost: any) => {
      return userPost.name.includes(searchUsers);
    });
  }, [searchUsers, postUsers]);

  return searchedPosts;
};
