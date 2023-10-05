import { FC, MouseEvent, useContext, useRef, useState, useEffect } from "react";
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

import { HeaderContainerProps } from "./headerTypes";

import { setLogoutTC } from "../../redux/reducers/auth-reducer/authReducer";
import { RootState } from "../../redux/store";

import { useTypeDispatch } from "../../hooks/useTypeSelector";

import {
  currentProfilePageSelector,
  loadingSelector,
} from "../../utils/selectors/profileSelectors";
import { DropdownContent } from "./DropdownContent";
import { DropdownContext } from "../../context/DropDownContext";
import SearchInput from "../forms/search-input/SearchInput";

const mapStateToProps = (state: RootState): HeaderContainerProps | any => {
  return {
    isAuth: state.authorization.isAuth,
    currentProfilePage: currentProfilePageSelector(state),
    email: state.authorization.email,
    loading: loadingSelector(state),
  };
};

const HeaderContainer: FC<HeaderContainerProps> = ({
  isAuth,
  currentProfilePage,
  email,
}) => {
  const node = useRef<HTMLDivElement>(null);
  const dispatch = useTypeDispatch();
  const props = useContext(DropdownContext);

  const initialClickedState: { profile: boolean } = {
    profile: false,
  };

  const [isClicked, setIsClicked] = useState(initialClickedState);

  const [loading, setLoading] = useState(false);

  const logout = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    dispatch(setLogoutTC());

    setIsClicked({ profile: false });
  };

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialClickedState, [clicked]: true });
  };

  useEffect(() => {
    const _onClick = (event: MouseEvent | TouchEvent): void => {
      event.preventDefault();

      if (!node?.current || node?.current.contains(event.target as Node)) {
        return;
      }

      if (props?.isOpenDropdown != null && props.isOpenDropdown) {
        setLoading(true);
        props.toggleDropdownMode();
        setLoading(false);
      }
    };

    document.addEventListener("touchstart", _onClick);

    return () => {
      document.removeEventListener("touchstart", _onClick);
    };
  }, [node, props]);

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

            <p> {currentProfilePage?.fullName} </p>

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

export default connect<HeaderContainerProps, {}, {}, RootState>(
  mapStateToProps,
  {},
)(HeaderContainer);
