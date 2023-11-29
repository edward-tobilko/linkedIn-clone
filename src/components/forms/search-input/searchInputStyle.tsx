import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

// SearchInput component
export const SearchFormStyle = styled.form`
  position: relative;
  display: flex;
  align-items: center;

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
  width: 180px;
  color: ${themeVars.colors.whiteColor};
  height: 26px;
  border-radius: 6px;
  font-size: 13px;
  padding-left: 37px;
  font-weight: 300;

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    width: 120px;
  }
`;

export const SelectStyle = styled.select`
  background: ${themeVars.colors.greyColor};
  border: 0;
  box-shadow: none;
  color: ${themeVars.colors.whiteColor};
  height: 26px;
  border-radius: 6px;
  font-size: 13px;
  padding-left: 7px;
  font-weight: 300;
  margin-left: 10px;
  cursor: pointer;

  option {
    background-color: grey;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    width: 90px;
    font-size: 11px;
    margin-left: 5px;
  }
`;
