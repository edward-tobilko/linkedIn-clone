import { FC, MouseEvent } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  HeaderLeftStyle,
  HeaderCenterStyle,
  HeaderRightStyle,
  HeaderStyle,
  LogOutStyle,
  NavLinkStyle,
} from "./headerStyles";
import { AvatarImgStyle } from "../../rootStyles";

import SearchInput from "../forms/search-input/SearchInput";

import avatarIcon from "../../img/images/avatar.png";

import { setIsAuthAC } from "../../redux/reducers/authReducer";

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.authorization.isAuth,
    login: state.authorization.login,
  };
};

const HeaderContainer: FC<any> = ({ isAuth, login, setIsAuthAC }) => {
  const logout = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // setIsAuthAC(false);

    // localStorage.setItem("isAuth", "false");
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

        {isAuth ? (
          <HeaderRightStyle>
            <AvatarImgStyle
              src={avatarIcon}
              alt=""
              width="40px"
              height="40px"
            />
            <p> {login} </p>

            <LogOutStyle onClick={logout}>Log out</LogOutStyle>
          </HeaderRightStyle>
        ) : (
          <NavLinkStyle>
            <NavLink to="/auth">
              <i className="bx bx-log-in"></i>
              <p>Log in</p>
            </NavLink>
          </NavLinkStyle>
        )}
      </HeaderStyle>
    </>
  );
};

export default connect(mapStateToProps, { setIsAuthAC })(HeaderContainer);
