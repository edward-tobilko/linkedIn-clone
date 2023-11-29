import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

export const PaginationStyle = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  i {
    color: ${themeVars.colors.lightGreyColor};
    font-size: 22px;
    transition: transform 0.2s linear;

    &:first-child:hover {
      transform: translateX(-3px);
    }

    &:last-child:hover {
      transform: translateX(3px);
    }
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    padding: 12px;
    background: ${themeVars.colors.lightGreyColor};
    border-radius: 50%;
    margin: 0 5px;

    span {
      font-size: 14.5px;
      transition: transform 0.2s ease-in-out;
    }

    .active__page {
      transform: scale(1.5);
      color: ${themeVars.colors.orangeColor};
    }

    &:hover span {
      transform: scale(1.5);
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint320}) {
    max-width: 250px;

    p {
      width: 12px;
      height: 12px;
      padding: 10px;

      span {
        font-size: 13px;
      }
    }
  }
`;
