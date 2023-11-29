import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

export const SocialNetworkStyle = styled.aside`
  background-color: ${themeVars.colors.headerBackgroundColor};
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  height: 100%;

  .show__sidebarBtn {
    display: none;

    .bx {
      font-size: 35px;
      color: ${themeVars.colors.whiteColor};
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }

    @media screen and (max-width: ${themeVars.breakpoints.breakpoint992}) {
      display: block;
      background: initial;
      border: none;

      position: fixed;
      left: -15px;
      bottom: 20px;
      z-index: 1000;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint992}) {
    display: none;

    &.visible {
      display: block;
    }
  }

  /* Snackbar */
  .css-cpgvjg-MuiSnackbar-root {
    bottom: 0;
    top: 150px;
    left: 0;
    align-items: flex-start;
    height: 500px;
    width: 300px;

    @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
      top: 130px;
      height: 400px;
      width: 250px;
    }

    @media screen and (max-width: ${themeVars.breakpoints.breakpoint320}) {
      height: 350px;
    }
  }

  .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root {
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    line-height: 1;
  }

  .css-1exqwzz-MuiSnackbarContent-message {
    padding: 0;
  }
`;

export const NetworkManagementStyle = styled.div`
  padding: 16px 0;
  position: relative;

  h1 {
    margin: 0 0 17px 17px;
    font-size: 18px;
  }

  .network__management {
    &-list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      padding: 12px 0;

      p {
        display: flex;
        align-items: center;
        margin-left: 20px;

        i {
          font-size: 24px;
          padding-right: 12px;
        }
      }

      span {
        margin-right: 20px;
      }

      &:hover {
        cursor: pointer;
        background: ${themeVars.colors.lightGreyColor};
      }
    }
  }

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${themeVars.colors.lightGreyColor};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.3;
  }
`;

export const NetworkManagementPersonalContactsStyle = styled.div`
  text-align: center;
  position: relative;

  .title {
    font-size: 18px;
    margin-top: 20px;
  }

  .subtitle {
    font-size: 13px;
    color: ${themeVars.colors.lightGreyColor};
    max-width: 250px;
    width: 100%;
    margin: 10px auto 20px;

    .learn__more {
      color: ${themeVars.colors.blueColor};
    }
  }

  .more__options {
    margin-top: 9px;
    font-size: 14px;
    letter-spacing: 0.5px;
    padding-bottom: 20px;

    &-link {
      color: ${themeVars.colors.lightBlueColor};
    }
  }

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${themeVars.colors.lightGreyColor};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.3;
  }
`;

export const NetworkManagementPersonalFooterStyle = styled.div`
  text-align: center;
  padding: 20px 0 30px 0;

  ul {
    li {
      font-size: 14px;
      padding-bottom: 7px;
      a {
        color: ${themeVars.colors.lightGreyColor};
        text-decoration: none;

        &:hover {
          color: ${themeVars.colors.blueColor};
          text-decoration: underline;
        }
      }
    }
  }

  .copyright {
    max-width: 250px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 22px;
    }

    span {
      margin-left: 7px;
      font-size: 14px;
    }
  }
`;
