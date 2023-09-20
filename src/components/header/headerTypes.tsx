import { MouseEvent } from "react";

import { CurrentProfilePageTypes } from "../../pages/profile/profileTypes";

type HeaderContainerProps = {
  isAuth: boolean;
  currentProfilePage: CurrentProfilePageTypes;
  email: string | null;
  loading: boolean;
};

type LinksTypes = {
  id: string;
  path: string;
  name: string;
  description: string;
  icon: any;
};

type DropdownContentProps = {
  setIsClicked: any;
  logout: (event: MouseEvent<HTMLElement>) => void;
  currentProfilePage: CurrentProfilePageTypes;
  email: string | null;
  loading: boolean;
};

export { HeaderContainerProps, LinksTypes, DropdownContentProps };
