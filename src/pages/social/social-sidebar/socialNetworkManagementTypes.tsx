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

export { SocialNetworkManagementInfoType, SocialNetworkManagementProps };
