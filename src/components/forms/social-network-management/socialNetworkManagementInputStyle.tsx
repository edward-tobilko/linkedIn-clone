import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

export const SocialNetworkManagementInputStyle = styled.input`
  max-width: 200px;
  width: 100%;
  padding: 7px 22px;
  border: 1.5px solid ${themeVars.colors.greyColor};
  border-radius: 5px;
  background: inherit;
  color: ${themeVars.colors.whiteColor};
  font-size: 13.5px;
  letter-spacing: 1px;

  &:hover {
    border: 1.5px solid ${themeVars.colors.whiteColor};
    opacity: 0.6;
  }

  &:focus {
    border: 1.5px solid ${themeVars.colors.blueColor};
    opacity: 0.6;
  }
`;
