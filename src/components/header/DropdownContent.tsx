import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FiCreditCard } from "react-icons/fi";

import { DropdownContentStyle } from "./headerStyles";
import { DropdownContentRemoveBtn } from "../UI/btns/remove-btn/removeBtnStyle";
import { AvatarImgStyle } from "../../rootStyles";

const links = [
  { path: "my-profile", name: "Profile", description: "Account" },
  { path: "setting", name: "Setting", description: "Setting account" },
  { path: "my-tasks", name: "My Tasks", description: "To-do and Daily Tasks" },
];

export const DropdownContent: FC<any> = ({
  setIsClicked,
  logout,
  currentProfilePage,
  email,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("setting");
    setIsClicked(false);
  };

  const handleNavigate2 = () => {
    navigate("my-profile");
    setIsClicked(false);
  };

  return (
    <DropdownContentStyle>
      <div className="profile">
        <div className="profile__container">
          <div className="profile__container-header">
            <p className="profile__container-title">User Profile</p>

            <DropdownContentRemoveBtn>
              <svg
                width={20}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setIsClicked(false)}
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
              <li className="profile__container-list">
                <div className="profile__container-list__icon">
                  <CgProfile />
                </div>
                <div className="profile__container-list__about">
                  <p
                    className="profile__container-list__title"
                    onClick={handleNavigate2}
                  >
                    My Profile
                  </p>
                  <p className="profile__container-list__description">
                    Account
                  </p>
                </div>
              </li>
              <li className="profile__container-list">
                <div className="profile__container-list__icon">
                  <i className="bx bx-cog"></i>
                </div>
                <div className="profile__container-list__about">
                  <p
                    className="profile__container-list__title"
                    onClick={handleNavigate}
                  >
                    Setting
                  </p>
                  <p className="profile__container-list__description">
                    Setting account
                  </p>
                </div>
              </li>
              <li className="profile__container-list">
                <div className="profile__container-list__icon">
                  <FiCreditCard />
                </div>
                <div className="profile__container-list__about">
                  <p className="profile__container-list__title">My Tasks</p>
                  <p className="profile__container-list__description">
                    To-do and Daily Tasks
                  </p>
                </div>
              </li>
            </ul>
            <button
              className="profile__container-content__btn"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </DropdownContentStyle>
  );
};
