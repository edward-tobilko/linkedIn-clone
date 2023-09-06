import { FC } from "react";

import HeaderContainer from "./HeaderContainer";

import DropDownContextProvider from "../../context/DropDownContext";

export const Header: FC = () => {
  return (
    <DropDownContextProvider>
      <HeaderContainer />
    </DropDownContextProvider>
  );
};
