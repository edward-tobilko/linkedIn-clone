import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

export const StatusStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .status__name {
    font-size: 13px;
    font-weight: 400;
    color: ${themeVars.colors.lightGreyColor};
    cursor: pointer;
    padding-bottom: 10px;

    &:hover + .tooltip__active {
      display: block;
      width: 200px;
      padding: 10px;
      border-radius: 0 20px 0 20px;
      font-weight: 600;
      font-size: 13px;
      background: ${themeVars.colors.whiteColor};
      color: ${themeVars.colors.blackColor};
    }
  }

  .status__tooltip {
    display: none;
  }

  .status__empty {
    color: ${themeVars.colors.errorColor};
    font-size: 13px;
  }

  input {
    background: inherit;
    border: 1px solid ${themeVars.colors.lightGreyColor};
    min-width: 200px;
    color: ${themeVars.colors.whiteColor};
    height: 26px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 1px;
    padding-left: 15px;
  }
`;
