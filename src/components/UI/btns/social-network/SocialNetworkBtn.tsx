import { FC } from "react";

import { SocialNetworkBtnStyle } from "./socialNetworkBtnStyle";

import { SocialNetworkBtnProps } from "./socialNetworkBtnTypes";

export const SocialNetworkBtn: FC<SocialNetworkBtnProps> = ({ children }) => {
  return <SocialNetworkBtnStyle>{children}</SocialNetworkBtnStyle>;
};
