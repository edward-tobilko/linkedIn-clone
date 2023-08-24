import styled from "styled-components";

import { themeVars } from "../../../../utils/vars/themeVars";

export const SocialNetworkManagementBtnStyle = styled.button`
  background: inherit;
  border: 1.5px solid ${themeVars.colors.blueColor};
  color: ${themeVars.colors.blueColor};
  margin-top: 12px;
  border-radius: 15px;
  padding: 7px 22px;
  font-weight: 600;

  &:hover {
    filter: brightness(150%);
  }
`;
