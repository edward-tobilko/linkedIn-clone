import { SlideProps } from "@mui/material";

import { SocialUserType } from "../../../redux/reducers/social-reducer/socialReducerTypes";

type SocialNetworkManagementInfoType = {
  id: number;
  title: string;
  subtitle?: string;
};

type SocialNetworkManagementProps = {
  totalUsersCount: number;
  usersCount: number;
  socialUsers: SocialUserType[];
};

type TransitionPropsType = Omit<SlideProps, "direction">;

export {
  SocialNetworkManagementInfoType,
  SocialNetworkManagementProps,
  TransitionPropsType,
};
