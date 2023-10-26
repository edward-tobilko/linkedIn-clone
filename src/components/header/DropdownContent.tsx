import { FC } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { CgProfile } from "react-icons/cg";
import { FiCreditCard } from "react-icons/fi";

import { DropdownContentStyle } from "./headerStyles";
import { DropdownContentRemoveBtn } from "../UI/btns/remove-btn/removeBtnStyle";
import { AvatarImgStyle } from "../../rootStyles";

import { DropdownContentProps, LinksTypes } from "./headerTypes";

import LogoutBtn from "../UI/btns/logout-btn/LogoutBtn";
import DropDownLoader from "../UI/loaders/dropdown-loader/DropDownLoader";

const links: LinksTypes[] = [
  {
    id: uuidv4(),
    path: "user-profile",
    name: "Profile",
    description: "Account",
    icon: <CgProfile />,
  },
  {
    id: uuidv4(),
    path: "setting",
    name: "Setting",
    description: "Setting account",
    icon: <i className="bx bx-cog"></i>,
  },
  {
    id: uuidv4(),
    path: "my-tasks",
    name: "My Tasks",
    description: "To-do and Daily Tasks",
    icon: <FiCreditCard />,
  },
];

export const DropdownContent: FC<DropdownContentProps> = ({
  setIsClicked,
  logout,
  currentProfilePage,
  email,
  loading,
}) => {
  return (
    <DropdownContentStyle>
      <div className="profile">
        <div className="profile__container">
          {loading ? (
            <DropDownLoader />
          ) : (
            <>
              <div className="profile__container-header">
                <p className="profile__container-title">User Profile</p>

                <DropdownContentRemoveBtn>
                  <svg
                    width={20}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setIsClicked({ profile: false })}
                  >
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
                      fill="#ffffff"
                    />
                  </svg>
                </DropdownContentRemoveBtn>
              </div>
              <div className="profile__container-aboutMe">
                {currentProfilePage?.userId === 29793 && (
                  <AvatarImgStyle
                    src={currentProfilePage?.photos?.small}
                    alt=""
                    width="60px"
                    height="60px"
                    position={false}
                    bottom="0"
                    left="0"
                  />
                )}

                <div className="profile__container-contacts">
                  <h3 className="profile__container-name">
                    {currentProfilePage?.fullName}
                  </h3>
                  <p className="profile__container-job">
                    ID: {currentProfilePage?.userId}
                  </p>
                  <p className="profile__container-mail"> {email} </p>
                </div>
              </div>
              <div className="profile__container-content">
                <ul className="profile__container-menu">
                  {links.map((link) => (
                    <li className="profile__container-list" key={link.id}>
                      <div className="profile__container-list__icon">
                        {link.icon}
                      </div>
                      <div className="profile__container-list__about">
                        <p
                          className="profile__container-list__title"
                          onClick={() => setIsClicked({ profile: false })}
                        >
                          <NavLink to={link.path}> {link.name} </NavLink>
                        </p>
                        <p className="profile__container-list__description">
                          {link.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <LogoutBtn logout={logout}>Logout</LogoutBtn>
              </div>
            </>
          )}
        </div>
      </div>
    </DropdownContentStyle>
  );
};
