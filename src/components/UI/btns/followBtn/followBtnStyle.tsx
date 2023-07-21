import styled from "styled-components";

import { themeVars } from "../../../../themeVars";

export const FollowStyle = styled.div`
  button {
    background: transparent;
    color: ${themeVars.colors.whiteColor};
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 15px;
    max-width: 130px;
    width: 100%;
    border: 1px solid ${themeVars.colors.orangeColor};
    border-radius: 12px;

    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${themeVars.colors.greyColor};
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
