import { NavLink } from "react-router-dom";

import {
  HeaderLeftStyle,
  HeaderCenterStyle,
  HeaderRightStyle,
  HeaderStyle,
  SearchInputStyle,
  LogOutStyle,
} from "./headerStyles";
import { AvatarImgStyle } from "../../rootStyles";

export const Header = () => {
  return (
    <HeaderStyle>
      <HeaderLeftStyle>
        <i className="bx bxs-id-card"></i>
        <i className="bx bx-search"></i>
        <SearchInputStyle type="text" placeholder="Search..." />
      </HeaderLeftStyle>

      <HeaderCenterStyle>
        <ul>
          <NavLink to="/">
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
            src="./images/avatar.png"
            alt="Avatar"
            width="40px"
            height="40px"
          />
          <p> Eduard Tobilko </p>
        </>
        <LogOutStyle>Log out</LogOutStyle>
      </HeaderRightStyle>
    </HeaderStyle>
  );
};
