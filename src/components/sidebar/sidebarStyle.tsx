import styled from "styled-components";

import { themeVars } from "../../themeVars";

// Sidebar component
export const SidebarStyle = styled.aside`
  max-width: 240px;
  width: 100%;

  .sidebar__top {
    background-color: ${themeVars.colors.headerBackgroundColor};

    &-header {
      height: 170px;
      position: relative;

      &__wrapper {
        width: 100%;
        height: 85px;
        border-radius: 12px;
      }

      &__desc {
        text-align: center;
        position: absolute;
        top: 25%;
        left: 0;
        padding: 0 15px;

        h1 {
          padding: 10px 0 5px 0;
          font-size: 18px;
          font-weight: 600;
        }

        p {
          font-size: 13px;
          font-weight: 400;
          color: ${themeVars.colors.lightGreyColor};
        }
      }
    }

    &-followers {
      position: relative;
      height: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${themeVars.colors.lightGreyColor};
        opacity: 0.5;
        position: absolute;
        left: 0;
        top: 25%;
      }

      &:after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${themeVars.colors.lightGreyColor};
        opacity: 0.5;
        position: absolute;
        left: 0;
        bottom: 25%;
      }

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px 0;
        font-size: 14px;
        cursor: pointer;
        width: 100%;
        transition: all 0.2s ease-in-out;
        span {
          padding-left: 7px;
        }

        &:hover {
          background-color: ${themeVars.colors.lightGreyColor};
          opacity: 0.7;
        }
      }
    }

    &-elements {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      span {
        font-size: 14px;
        padding-left: 5px;
      }

      &:hover {
        background-color: ${themeVars.colors.lightGreyColor};
        opacity: 0.7;
      }
    }
  }
`;
