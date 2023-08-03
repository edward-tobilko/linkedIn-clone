import { FC } from "react";

import {
  SocialNetworkManagementStyle,
  NetworkManagementStyle,
  NetworkManagementPersonalContactsStyle,
  NetworkManagementPersonalFooterStyle,
} from "../socialStyle";

import SocialNetworkManagementInput from "../../../components/forms/social-network-management/SocialNetworkManagementInput";
import { SocialNetworkManagementBtn } from "../../../components/UI/btns/social-network-management/SocialNetworkManagementBtn";

const socialNetworkManagementInfo = [
  { id: 1, title: "General information" },
  { id: 2, title: "Availability", subtitle: "Help centre" },
  { id: 3, title: "Privacy terms and conditions" },
  { id: 4, title: "Setting up your adverts" },
  { id: 5, title: "Advertising solutions" },
  { id: 6, title: "Business services " },
  { id: 7, title: "More" },
];

const SocialNetworkManagement: FC = () => {
  return (
    <SocialNetworkManagementStyle>
      <NetworkManagementStyle>
        <h1>Network management</h1>

        <div className="network__management">
          <li className="network__management-list">
            <p>
              <i className="bx bxs-contact"></i>
              <span className="network__management-title">Contacts</span>
            </p>

            <span className="network__management-count">106</span>
          </li>
          <li className="network__management-list">
            <p>
              <i className="bx bx-dialpad"></i>
              <span className="network__management-title">Pages</span>
            </p>

            <span className="network__management-count">8</span>
          </li>
          <li className="network__management-list">
            <p>
              <i className="bx bx-calendar"></i>
              <span className="network__management-title">Events</span>
            </p>

            <span className="network__management-count">0</span>
          </li>
          <li className="network__management-list">
            <p>
              <i className="bx bx-hash"></i>
              <span className="network__management-title">Hash-tags</span>
            </p>
          </li>
        </div>
      </NetworkManagementStyle>

      <NetworkManagementPersonalContactsStyle>
        <h1 className="title">Add personal contacts</h1>
        <p className="subtitle">
          We will periodically import and store your contacts to help you and
          other people make connections. You choose who to contact and whom to
          invite.
          <a href="#" className="learn__more">
            Learn more
          </a>
        </p>

        <SocialNetworkManagementInput />
        <SocialNetworkManagementBtn>Continue</SocialNetworkManagementBtn>

        <p className="more__options">
          <a href="#" className="more__options-link">
            More options
          </a>
        </p>
      </NetworkManagementPersonalContactsStyle>

      <NetworkManagementPersonalFooterStyle>
        <ul>
          {socialNetworkManagementInfo.map((item: any) => (
            <li key={item.id}>
              <a href="#"> {item.title} </a>
            </li>
          ))}
        </ul>

        <div className="copyright">
          <i className="bx bxs-id-card"></i>
          <span>My own App Corporation &#169; 2023</span>
        </div>
      </NetworkManagementPersonalFooterStyle>
    </SocialNetworkManagementStyle>
  );
};

export default SocialNetworkManagement;
