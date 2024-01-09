import React, { useEffect, FC, useState, ComponentType } from "react";
import { NavLink } from "react-router-dom";

import { CardProfilePropsType } from "../../pages/profile/profileTypes";

import { SidebarBackgroundStyle, SidebarStyle } from "./sidebarStyle";
import { SlideProps, Snackbar, Slide, Button } from "@mui/material";

import { MdVisibility } from "react-icons/md";

import { CardProfile } from "../../pages/profile/CardProfile";
import { SocialContentLoader } from "../UI/loaders/social-loaders/SocialContentLoader";
import { followedUsersHelper } from "../../utils/helper-functions/helperComponentFunctions";
import { useShowSidebar } from "../../hooks/useDarkMode";

type TransitionPropsType = Omit<SlideProps, "direction">;

// UI time elements
const UITimeElements = () => {
  const [seconds, setSeconds] = React.useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div data-tooltip={new Date().toDateString()} className="button">
        <div className="button-wrapper">
          <div className="text">Date</div>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="16"
              width="16"
              className="bi bi-cart2"
            >
              <path
                d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div data-tooltip={seconds} className="button">
        <div className="button-wrapper">
          <div className="text">Time</div>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="bi bi-cart2"
              height="16"
              width="16"
            >
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

function TransitionLeft(props: TransitionPropsType) {
  return <Slide {...props} direction="right" />;
}

const Sidebar: FC<CardProfilePropsType> = ({
  currentProfilePage,
  downloadSmallPhotoTC,
  loading,
  chatUsers,
}) => {
  const [transition, setTransition] = useState<
    ComponentType<TransitionPropsType> | undefined
  >(undefined);

  const { showSidebar, setShowSidebar } = useShowSidebar();

  const handleClick =
    (Transition: ComponentType<TransitionPropsType>) => () => {
      setTransition(() => Transition);
      setShowSidebar(true);
    };

  const handleClose = () => {
    setShowSidebar(false);
  };

  //? При відкритому sidebar - блокуємо скрол
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", () => {});

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [showSidebar]);

  if (!currentProfilePage) return <SocialContentLoader />;

  return (
    <>
      {showSidebar && <SidebarBackgroundStyle />}

      <SidebarStyle>
        <Button
          onClick={handleClick(TransitionLeft)}
          className="show__sidebarBtn"
        >
          <i className="bx bxs-right-arrow-square"></i>
        </Button>

        <div className="sidebar">
          <CardProfile
            currentProfilePage={currentProfilePage}
            downloadSmallPhotoTC={downloadSmallPhotoTC}
            loading={loading}
          />

          <div className="sidebar-followers">
            <p>
              <i className="bx bx-group"></i>
              <NavLink to={`/followed-users`}>
                <span>{followedUsersHelper(chatUsers)?.length} followers</span>
              </NavLink>
            </p>
            <p>
              <MdVisibility /> <span>354 views of your profile</span>
            </p>
          </div>

          <div className="sidebar-elements">
            <div className="sidebar-elements__time">
              <UITimeElements />
            </div>

            <div className="sidebar-elements__action">
              <i className="bx bxs-bookmark"></i> <span>My elements</span>
            </div>
          </div>
        </div>

        <Snackbar
          open={showSidebar}
          onClose={handleClose}
          TransitionComponent={transition || undefined}
          key={transition ? transition.name : ""}
          message={
            <div className="sidebar visible">
              <CardProfile
                currentProfilePage={currentProfilePage}
                downloadSmallPhotoTC={downloadSmallPhotoTC}
                loading={loading}
              />

              <div className="sidebar-followers">
                <p>
                  <i className="bx bx-group"></i>
                  <NavLink to={`/followed-users`}>
                    <span>
                      {followedUsersHelper(chatUsers)?.length} followers
                    </span>
                  </NavLink>
                </p>
                <p>
                  <MdVisibility /> <span>354 views of your profile</span>
                </p>
              </div>

              <div className="sidebar-elements">
                <div className="sidebar-elements__time">
                  <UITimeElements />
                </div>

                <div className="sidebar-elements__action">
                  <i className="bx bxs-bookmark"></i> <span>My elements</span>
                </div>
              </div>
            </div>
          }
        />
      </SidebarStyle>
    </>
  );
};

export default Sidebar;
