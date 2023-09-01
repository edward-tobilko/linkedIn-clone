import { FC } from "react";

import {
  SocialNetworkManagementStyle,
  NetworkManagementStyle,
  NetworkManagementPersonalContactsStyle,
  NetworkManagementPersonalFooterStyle,
} from "../socialStyle";

import SocialNetworkManagementInput from "../../../components/forms/social-network-management/SocialNetworkManagementInput";
import { SocialNetworkManagementBtn } from "../../../components/UI/btns/social-network-management/SocialNetworkManagementBtn";

import { socialNetworkManagementInfo } from "./socialNetworkManagementInfoData";

import { SocialNetworkManagementProps } from "./socialNetworkManagementTypes";
import { calculatePaginationTotalCountPagesHelper } from "../../../utils/helper-functions/helperComponentFunctions";

const SocialNetworkManagement: FC<SocialNetworkManagementProps> = ({
  totalUsersCount,
  usersCount,
  socialUsers,
}) => {
  const filteredUsers = socialUsers.filter((item: any) => item.followed);

  const result = calculatePaginationTotalCountPagesHelper(
    totalUsersCount,
    usersCount,
    5,
  );

  return (
    <SocialNetworkManagementStyle>
      <NetworkManagementStyle>
        <h1>Network management</h1>

        <div className="network__management">
          <li className="network__management-list">
            <p>
              <i className="bx bxs-contact"></i>
              <span className="network__management-title">All users</span>
            </p>

            <span className="network__management-count">{totalUsersCount}</span>
          </li>
          <li className="network__management-list">
            <p>
              <i className="bx bx-dialpad"></i>
              <span className="network__management-title">Pages</span>
            </p>

            <span className="network__management-count">
              {result.paginationLengthCount}
            </span>
          </li>
          <li className="network__management-list">
            <p>
              <i className="bx bx-user-check"></i>
              <span className="network__management-title">Followed users</span>
            </p>

            <span className="network__management-count">
              {filteredUsers.length > 0 ? <> {filteredUsers.length} </> : null}
            </span>
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
          {socialNetworkManagementInfo.map((item) => (
            <li key={item.id}>
              <a href="#" target="blank">
                {item.title}
              </a>
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
