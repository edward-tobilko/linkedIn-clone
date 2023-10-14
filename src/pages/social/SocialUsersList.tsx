import { FC } from "react";

import SocialUsersItem from "./SocialUsersItem";

import { SocialUsersListProps } from "./socialTypes";

import { SocialUsersListEmptyStyle } from "./socialStyle";

const SocialUsersList: FC<SocialUsersListProps> = ({
  socialUsers,
  followingBlockedBtn,
  setFollowUserTC,
  setUnFollowUserTC,
}) => {
  return (
    <>
      {socialUsers?.length !== 0 ? (
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
      ) : (
        <SocialUsersListEmptyStyle>Users not found!</SocialUsersListEmptyStyle>
      )}
    </>
  );
};

export default SocialUsersList;
