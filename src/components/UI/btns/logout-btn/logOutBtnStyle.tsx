import styled from "styled-components";

import { themeVars } from "../../../../utils/vars/themeVars";

export const LogoutBtnStyle = styled.button`
  width: 100%;
  padding: 14px 0;
  background: transparent;
  color: ${themeVars.colors.whiteColor};
  font-size: 17px;
  border-radius: 15px;

  &:hover {
    filter: brightness(50%);
  }

  &:focus {
    outline: none;
  }
`;
