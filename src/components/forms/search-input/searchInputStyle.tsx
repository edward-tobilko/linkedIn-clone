import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

// SearchInput component
export const SearchFormStyle = styled.form`
  position: relative;

  .searchBtn {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: initial;
    border: none;
    height: 100%;
    border-radius: 6px 0 0 6px;

    .bx-search {
      font-size: 17px;
      color: ${themeVars.colors.whiteColor};
    }

    &:hover {
      background: ${themeVars.colors.greyColor};
    }
  }
`;

export const SearchInputStyle = styled.input`
  background: ${themeVars.colors.greyColor};
  border: 0;
  box-shadow: none;
  min-width: 180px;
  color: ${themeVars.colors.whiteColor};
  height: 26px;
  border-radius: 6px;
  font-size: 13px;
  padding-left: 37px;
  font-weight: 300;
`;
