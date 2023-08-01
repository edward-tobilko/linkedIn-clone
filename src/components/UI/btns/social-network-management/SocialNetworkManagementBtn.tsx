import { FC } from "react";

import { SocialNetworkManagementBtnStyle } from "./socialNetworkManagementBtnStyle";

export const SocialNetworkManagementBtn: FC<any> = ({children}) => {
  return (
    <SocialNetworkManagementBtnStyle> {children} </SocialNetworkManagementBtnStyle>
  );
};
