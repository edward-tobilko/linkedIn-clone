import { FC } from "react";

import SocialUsersItem from "./SocialUsersItem";

import { SocialUsersListProps } from "./socialTypes";

const SocialUsersList: FC<SocialUsersListProps> = ({
  socialUsers,
  followingBlockedBtn,
  setFollowUserTC,
  setUnFollowUserTC,
}) => {
  return (
    <>
      {socialUsers?.map((socialUser) => (
        <SocialUsersItem
          key={socialUser?.id}
          socialUser={socialUser}
          followingBlockedBtn={followingBlockedBtn}
          setFollowUserTC={setFollowUserTC}
          setUnFollowUserTC={setUnFollowUserTC}
        />
      ))}
    </>
  );
};

export default SocialUsersList;
