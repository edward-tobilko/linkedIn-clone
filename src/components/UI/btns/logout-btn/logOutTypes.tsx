import { ReactNode, MouseEvent } from "react";

export type LogoutBtnTypes = {
  children: ReactNode;
  logout: (event: MouseEvent<HTMLElement>) => void;
};
