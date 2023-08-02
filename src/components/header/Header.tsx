import { FC, MouseEvent } from "react";
import { NavLink } from "react-router-dom";

import {
  HeaderLeftStyle,
  HeaderCenterStyle,
  HeaderRightStyle,
  HeaderStyle,
  LogOutStyle,
} from "./headerStyles";
import { AvatarImgStyle } from "../../rootStyles";

import SearchInput from "../forms/search-input/SearchInput";

import avatarIcon from "../../img/images/avatar.png";

import { useMyContext } from "../../context/Context";

export const Header: FC = () => {
  const props = useMyContext();

  const logout = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    props?.setIsAuth(false);

    localStorage.setItem("isAuth", "false");
  };

  return (
    <>
      <HeaderStyle>
        <HeaderLeftStyle>
          <i className="bx bxs-id-card"></i>
          <SearchInput />
        </HeaderLeftStyle>

        <HeaderCenterStyle>
          <ul>
            <NavLink to="/profile">
              <i className="bx bxs-home"></i>
              <p>Home</p>
            </NavLink>
            <NavLink to="/social">
              <i className="bx bx-group"></i>
              <p>Social</p>
            </NavLink>
            <NavLink to="/messages">
              <i className="bx bx-chat"></i>
              <p>Messages</p>
            </NavLink>
            <NavLink to="/setting">
              <i className="bx bx-cog"></i>
              <p>Setting</p>
            </NavLink>
          </ul>
        </HeaderCenterStyle>

        <HeaderRightStyle>
          <>
            <AvatarImgStyle
              src={avatarIcon}
              alt=""
              width="40px"
              height="40px"
            />
            <p>Eduard Tobilko</p>
          </>

          <LogOutStyle onClick={logout}>Log out</LogOutStyle>
        </HeaderRightStyle>
      </HeaderStyle>
    </>
  );
};
