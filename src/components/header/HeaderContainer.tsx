import { FC, MouseEvent, useContext, useRef, useState } from "react";
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

import {
  setIsAuthAC,
  setLogoutTC,
} from "../../redux/reducers/auth-reducer/authReducer";
import { RootState } from "../../redux/store";

import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { useOnClickOutsite } from "../../hooks/useOnClickOutsite";

import { HeaderContainerProps } from "./headerTypes";

import {
  currentProfilePageSelector,
  loadingSelector,
} from "../../utils/selectors/profileSelectors";
import { DropdownContent } from "./DropdownContent";
import { DropdownContext } from "../../context/DropDownContext";

const isClickedInitialState: any = {
  profile: false,
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuth: state.authorization.isAuth,
    login: state.authorization.login,
    currentProfilePage: currentProfilePageSelector(state),
    email: state.authorization.email,
    loading: loadingSelector(state),
  };
};

const HeaderContainer: FC<HeaderContainerProps> = ({
  isAuth,
  login,
  currentProfilePage,
  email,
}) => {
  const node: any = useRef();
  const dispatch = useTypeDispatch();
  const { isOpenDropdown, toggleDropdownMode }: any =
    useContext(DropdownContext);

  const [isClicked, setIsClicked] = useState(isClickedInitialState);
  const [loading, setLoading] = useState(false);

  const logout = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(setLogoutTC());

    setIsClicked(false);
  };

  const handleClick = (clicked: any) => {
    setIsClicked({ ...isClickedInitialState, [clicked]: true });
  };

  useOnClickOutsite(node, () => {
    // Only if menu is open
    if (isOpenDropdown) {
      setLoading(true);
      toggleDropdownMode();
      setLoading(false);
    }
  });

  return (
    <>
      <HeaderStyle ref={node}>
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
          </ul>
        </HeaderCenterStyle>

        {isAuth ? (
          <HeaderRightStyle>
            {currentProfilePage?.userId === 29793 && (
              <div className="header__right">
                <AvatarImgStyle
                  src={currentProfilePage?.photos?.small}
                  alt=""
                  width="40px"
                  height="40px"
                  position={false}
                  bottom="0"
                  left="0"
                />

                <p
                  className="header__right-dropdown"
                  onClick={() => handleClick("profile")}
                >
                  Profile
                  {isClicked.profile ? (
                    <i className="bx bx-down-arrow"></i>
                  ) : (
                    <i className="bx bx-up-arrow"></i>
                  )}
                </p>

                {isClicked.profile && (
                  <DropdownContent
                    setIsClicked={setIsClicked}
                    logout={logout}
                    currentProfilePage={currentProfilePage}
                    email={email}
                    loading={loading}
                  />
                )}
              </div>
            )}

            <p> {login} </p>

            <LogOutStyle onClick={logout}>Log out</LogOutStyle>
          </HeaderRightStyle>
        ) : (
          <NavLinkStyle>
            <NavLink to="/login">
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
