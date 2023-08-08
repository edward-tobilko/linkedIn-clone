import { FC } from "react";

import SocialUsersItem from "./SocialUsersItem";

const SocialUsersList: FC<any> = ({
  socialUsers,
  followingBlockedBtn,
  setFollowUserTC,
  setUnFollowUserTC,
}) => {
  return (
    <>
      {socialUsers.map((socialUser: any) => (
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
