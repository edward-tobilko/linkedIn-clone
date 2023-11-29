import { FC, useState, ComponentType, useEffect } from "react";

import {
  SocialNetworkManagementInfoType,
  SocialNetworkManagementProps,
  TransitionPropsType,
} from "./socialNetworkTypes";

import { SocialNetworkStyle } from "./socialNetworkStyles";
import { SidebarBackgroundStyle } from "../../../components/sidebar/sidebarStyle";
import { Snackbar, Slide, Button } from "@mui/material";

import SocialNetworkInput from "../../../components/forms/social-network/SocialNetworkInput";
import { SocialNetworkBtn } from "../../../components/UI/btns/social-network/SocialNetworkBtn";

import { calculatePaginationTotalCountPagesHelper } from "../../../utils/helper-functions/helperComponentFunctions";
import { useShowSidebar } from "../../../hooks/useDarkMode";

const socialNetworkManagementInfo: SocialNetworkManagementInfoType[] = [
  { id: 1, title: "General information" },
  { id: 2, title: "Availability", subtitle: "Help centre" },
  { id: 3, title: "Privacy terms and conditions" },
  { id: 4, title: "Setting up your adverts" },
  { id: 5, title: "Advertising solutions" },
  { id: 6, title: "Business services " },
  { id: 7, title: "More" },
];

const SocialNetworkManagement: FC<SocialNetworkManagementProps> = ({
  totalUsersCount,
  usersCount,
  socialUsers,
}) => {
  const [transition, setTransition] = useState<
    ComponentType<TransitionPropsType> | undefined
  >(undefined);

  const { showSidebar, setShowSidebar } = useShowSidebar();

  const filteredUsers = socialUsers.filter((item) => item.followed);

  const result = calculatePaginationTotalCountPagesHelper(
    totalUsersCount,
    usersCount,
    5,
  );

  function TransitionLeft(props: TransitionPropsType) {
    return <Slide {...props} direction="right" />;
  }

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

  return (
    <>
      {showSidebar && <SidebarBackgroundStyle />}

      <SocialNetworkStyle>
        <Button
          onClick={handleClick(TransitionLeft)}
          className="show__sidebarBtn"
        >
          <i className="bx bxs-right-arrow-square"></i>
        </Button>

        <div className="social__network">
          <div className="social__network-header">
            <h1>Network management</h1>

            <div className="header__management">
              <li className="header__management-list">
                <p>
                  <i className="bx bxs-contact"></i>
                  <span className="header__management-title">All users</span>
                </p>

                <span className="header__management-count">
                  {totalUsersCount}
                </span>
              </li>
              <li className="header__management-list">
                <p>
                  <i className="bx bx-dialpad"></i>
                  <span className="header__management-title">Pages</span>
                </p>

                <span className="header__management-count">
                  {result.totalPagesCount}
                </span>
              </li>
              <li className="header__management-list">
                <p>
                  <i className="bx bx-user-check"></i>
                  <span className="header__management-title">
                    Followed users
                  </span>
                </p>

                <span className="header__management-count">
                  {filteredUsers.length > 0 ? (
                    <> {filteredUsers.length} </>
                  ) : null}
                </span>
              </li>
              <li className="header__management-list">
                <p>
                  <i className="bx bx-hash"></i>
                  <span className="header__management-title">Hash-tags</span>
                </p>
              </li>
            </div>
          </div>

          <div className="social__network-contacts">
            <h1 className="contacts__title">Add personal contacts</h1>
            <p className="contacts__subtitle">
              We will periodically import and store your contacts to help you
              and other people make connections. You choose who to contact and
              whom to invite.
              <a href="#" className="contacts__learnMore">
                Learn more
              </a>
            </p>

            <SocialNetworkInput />

            <SocialNetworkBtn>Continue</SocialNetworkBtn>

            <p className="contacts__options">
              <a href="#" className="contacts__options-link">
                More options
              </a>
            </p>
          </div>

          <div className="social__network-footer">
            <ul>
              {socialNetworkManagementInfo.map((item) => (
                <li key={item.id}>
                  <a href="#" target="blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="footer__copyright">
              <i className="bx bxs-id-card"></i>
              <span>My own App Corporation &#169; 2023</span>
            </div>
          </div>
        </div>

        <Snackbar
          open={showSidebar}
          onClose={handleClose}
          TransitionComponent={transition || undefined}
          key={transition ? transition.name : ""}
          // message={<SocialNetworkStyle />}
        />
      </SocialNetworkStyle>
    </>
  );
};

export default SocialNetworkManagement;
