import { FC } from "react";

import { FollowStyle } from "./followBtnStyle";

export const FollowBtn: FC = () => {
  return (
    <FollowStyle>
      <button>
        <img src="./svg/followUser_icon.svg" alt="Follow-user" />
        Follow
      </button>
    </FollowStyle>
  );
};
