import { FC } from "react";

import { FollowStyle } from "./followBtnStyle";

export const FollowBtn: FC<any> = ({ socialUser, followDispatch }) => {
  return (
    <FollowStyle>
      {socialUser.followed ? (
        <button onClick={() => followDispatch(socialUser.id)}>
          <img src="./svg/followUser_icon.svg" alt="Follow-user" />
          Follow
        </button>
      ) : (
        <button>
          <img src="./svg/unFollowUser_icon.svg" alt="Un-follow-user" />
          Un follow
        </button>
      )}
    </FollowStyle>
  );
};
