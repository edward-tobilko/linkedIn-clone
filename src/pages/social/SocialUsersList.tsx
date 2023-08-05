import { FC } from "react";

import SocialUsersItem from "./SocialUsersItem";

const SocialUsersList: FC<any> = ({
  socialUsers,
  setFollowDispatch,
  setUnFollowDispatch,
  setFollowingBlockedBtnDispatch,
  followingBlockedBtn,
}) => {
  return (
    <>
      {socialUsers.map((socialUser: any) => (
        <SocialUsersItem
          key={socialUser?.id}
          socialUser={socialUser}
          setFollowDispatch={setFollowDispatch}
          setUnFollowDispatch={setUnFollowDispatch}
          setFollowingBlockedBtnDispatch={setFollowingBlockedBtnDispatch}
          followingBlockedBtn={followingBlockedBtn}
        />
      ))}
    </>
  );
};

export default SocialUsersList;
