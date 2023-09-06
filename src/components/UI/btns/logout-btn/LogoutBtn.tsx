import { FC } from "react";

import { LogoutBtnStyle } from "./logOutBtnStyle";

import { LogoutBtnTypes } from "./logOutTypes";

const LogoutBtn: FC<LogoutBtnTypes> = ({ children, logout }) => {
  return (
    <LogoutBtnStyle type="submit" onClick={logout}>
      {children}
    </LogoutBtnStyle>
  );
};

export default LogoutBtn;
