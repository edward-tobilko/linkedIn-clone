import { FC } from "react";

import SocialUsersItem from "./SocialUsersItem";

const SocialUsersList: FC<any> = ({ socialUsers, followingBlockedBtn }) => {
  return (
    <>
      {socialUsers.map((socialUser: any) => (
        <SocialUsersItem
          key={socialUser?.id}
          socialUser={socialUser}
          followingBlockedBtn={followingBlockedBtn}
        />
      ))}
    </>
  );
};

export default SocialUsersList;
