import styled from "styled-components";

import { themeVars } from "../../../themeVars";

export const SearchInputStyle = styled.input`
  background: ${themeVars.colors.greyColor};
  border: 0;
  box-shadow: none;
  min-width: 180px;
  color: ${themeVars.colors.whiteColor};
  height: 26px;
  border-radius: 6px;
  font-size: 13px;
  padding-left: 28px;
  font-weight: 300;
`;
