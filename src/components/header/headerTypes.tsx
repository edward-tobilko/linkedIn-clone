import { MouseEvent, ReactNode } from "react";

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
  icon: ReactNode;
};

type DropdownContentProps = {
  // setIsClicked: (isClicked: boolean) => void;
  setIsClicked: any;
  logout: (event: MouseEvent<HTMLElement>) => void;
  currentProfilePage: CurrentProfilePageTypes;
  email: string | null;
  loading: boolean;
};

export { HeaderContainerProps, LinksTypes, DropdownContentProps };
