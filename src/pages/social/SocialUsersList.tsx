import { FC } from "react";

import SocialUsersItem from "./SocialUsersItem";

import { SocialUserType } from "../../redux/reducers/socialReducer";

type SocialUsersListProps = {
  socialUsers: SocialUserType[];
  followingBlockedBtn: any;
  setFollowUserTC: any;
  setUnFollowUserTC: any;
};

const SocialUsersList: FC<SocialUsersListProps> = ({
  socialUsers,
  followingBlockedBtn,
  setFollowUserTC,
  setUnFollowUserTC,
}) => {
  return (
    <>
      {socialUsers.map((socialUser) => (
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
