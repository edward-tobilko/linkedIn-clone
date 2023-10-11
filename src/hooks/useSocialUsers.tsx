import { useMemo } from "react";

import { SocialUserType } from "../redux/reducers/social-reducer/socialReducerTypes";

export const useSocialUsers = (
  socialUsers?: SocialUserType[],
  searchTerm?: string,
) => {
  const searchedPosts = useMemo(() => {
    if (Array.isArray(socialUsers) && socialUsers != null) {
      return socialUsers.filter((user) => {
        return user.name.includes(searchTerm!);
      });
    } else {
      throw new Error("Post users can not be null");
    }
  }, [socialUsers, searchTerm]);

  return searchedPosts;
};
