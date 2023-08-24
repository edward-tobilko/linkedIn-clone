type SocialUserPhotosType = {
  small: any;
  large: any;
};

type SocialUserType = {
  name: string;
  id: number;
  uniqueUrlName?: any;
  photos?: SocialUserPhotosType;
  status?: string;
  followed?: boolean;
};

type InitialStateType = {
  socialUsers: SocialUserType[];
  totalUsersCount: number;
  usersCount: number;
  currentPage: number;
  loading: boolean;
  followingBlockedBtn: any;
};

type fetchSocialUsersOnChangedPageDataType = {
  items: SocialUserType[];
  totalCount: number;
  error: any;
};

export {
  SocialUserType,
  InitialStateType,
  fetchSocialUsersOnChangedPageDataType,
};
