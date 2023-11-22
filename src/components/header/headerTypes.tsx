import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";

import { CurrentProfilePageType } from "../../pages/profile/profileTypes";

type HeaderContainerProps = {
  isAuth: boolean;
  currentProfilePage: CurrentProfilePageType;
  email: string | null;
  loading: boolean;
  searchTerm: string;
  usersCount: number;
  currentPage: number;
};

type LinksTypes = {
  id: string;
  path: string;
  name: string;
  description: string;
  icon: ReactNode;
};

type DropdownContentProps = {
  setIsClicked: Dispatch<SetStateAction<{ profile: boolean }>>;
  logout: (event: MouseEvent<HTMLElement>) => void;
  currentProfilePage: CurrentProfilePageType;
  email: string | null;
  loading: boolean;
};

type HeaderNavigationType = {
  id: string;
  link: string;
  name: string;
};

export {
  HeaderContainerProps,
  LinksTypes,
  DropdownContentProps,
  HeaderNavigationType,
};
