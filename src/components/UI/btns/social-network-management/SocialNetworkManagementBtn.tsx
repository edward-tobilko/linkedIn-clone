import { FC, ReactNode } from "react";

import { SocialNetworkManagementBtnStyle } from "./socialNetworkManagementBtnStyle";

type SocialNetworkManagementBtnProps = {
  children: ReactNode;
};

export const SocialNetworkManagementBtn: FC<
  SocialNetworkManagementBtnProps
> = ({ children }) => {
  return (
    <SocialNetworkManagementBtnStyle>
      {children}
    </SocialNetworkManagementBtnStyle>
  );
};
