import { FC } from "react";

import HeaderContainer from "./HeaderContainer";

import DropDownState from "../../context/DropDownContext";

export const Header: FC = () => {
  return (
    <DropDownState>
      <HeaderContainer />
    </DropDownState>
  );
};
