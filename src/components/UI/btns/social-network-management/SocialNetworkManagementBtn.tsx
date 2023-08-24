import { FC } from "react";

import { SocialNetworkManagementBtnStyle } from "./socialNetworkManagementBtnStyle";

import { SocialNetworkManagementBtnProps } from "./socialNetworkManagementBtnTypes";

export const SocialNetworkManagementBtn: FC<
  SocialNetworkManagementBtnProps
> = ({ children }) => {
  return (
    <SocialNetworkManagementBtnStyle>
      {children}
    </SocialNetworkManagementBtnStyle>
  );
};
