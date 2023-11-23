import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

export const HeaderStyle = styled.header`
  min-height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${themeVars.colors.headerBackgroundColor};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  /* Burger */
  .burger {
    display: none;
  }

  .burger__menu {
    display: none;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint992}) {
    justify-content: flex-start;

    .burger__menu-content__navbar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      max-width: 200px;
      width: 100%;
      margin: 0 auto;
      animation: showBurgerMenu 1.3s ease-in-out;

      &-list {
        font-size: 22px;
        margin: 10px 0;
        text-transform: uppercase;

        &-link {
          color: ${themeVars.colors.whiteColor};
          text-decoration: none;
          &:hover {
            color: ${themeVars.colors.lightBlueColor};
          }
        }
      }
    }

    /* Burger */
    .burger {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      z-index: 1;

      display: block;
      height: 20px;
      width: 30px;
      cursor: pointer;

      &:before,
      &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background: ${themeVars.colors.whiteColor};
        transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s all;
      }

      &:before {
        top: 0;
      }

      &::after {
        bottom: 0;
      }

      span {
        position: absolute;
        top: 9px;
        right: 0;
        width: 100%;
        background: ${themeVars.colors.whiteColor};
        height: 2px;
        transform: scale(1);
        transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s all;
      }
    }

    /* Burger close */
    .burger__close {
      position: absolute;
      top: 35px;
      right: 35px;
      z-index: 1;

      display: block;
      height: 20px;
      width: 30px;
      cursor: pointer;

      &:before,
      &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background: ${themeVars.colors.whiteColor};
        transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s all;
      }

      &:before {
        background: ${themeVars.colors.whiteColor};
        transform: rotate(45deg);
        transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s all;
        top: 8px;
      }

      &:after {
        background: ${themeVars.colors.whiteColor};
        transform: rotate(-45deg);
        bottom: 10px;
        transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s all;
      }

      & span {
        transform: scale(0);
      }
    }

    /* Burger menu */
    .burger__menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;

      display: block;
      width: 100%;
      height: 100%;
      pointer-events: all;
      background: ${themeVars.colors.headerBackgroundColor};

      animation: fade 0.5s linear;
    }

    /* Animations */
    @keyframes fade {
      0% {
        height: 0px;
      }

      100% {
        height: 100%;
      }
    }

    @keyframes showBurgerMenu {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
`;

export const HeaderLeftStyle = styled.div`
  display: flex;
  align-items: center;

  .bxs-id-card {
    font-size: 35px;
    padding-right: 10px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint992}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const HeaderCenterStyle = styled.div`
  ul {
    display: inline-flex;

    a {
      position: relative;
      text-align: center;
      padding: 0 15px;
      text-decoration: none;
      color: ${themeVars.colors.whiteColor};

      &:hover {
        cursor: pointer;
        filter: brightness(80%);
      }

      &.active {
        &:after {
          content: "";
          width: 100%;
          height: 1px;
          background-color: ${themeVars.colors.whiteColor};
          position: absolute;
          bottom: -10px;
          left: 0;
        }
      }

      i {
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint992}) {
    display: none;
  }
`;

export const HeaderRightStyle = styled.div`
  display: inline-flex;
  align-items: center;

  .header__right {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &-dropdown {
      color: ${themeVars.colors.lightGreyColor};
      padding: 5px 0 0 0;
      font-size: 15px;
      display: flex;
      align-items: first baseline;
      cursor: pointer;

      i {
        padding-left: 5px;
        font-size: 14px;
      }

      &:hover {
        color: ${themeVars.colors.whiteColor};
      }

      @media screen and (max-width: ${themeVars.breakpoints.breakpoint992}) {
        display: none;
      }
    }
  }

  p {
    color: ${themeVars.colors.lightGreyColor};
    padding: 0 15px;

    @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
      padding: 0 5px;
      font-size: 14px;
    }
  }
`;

export const LogOutStyle = styled.button`
  color: ${themeVars.colors.whiteColor};
  background: inherit;
  border: none;
  cursor: pointer;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${themeVars.colors.orangeColor};
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint992}) {
    display: none;
  }
`;

export const LogOutBurgerMenuStyle = styled.button`
  color: ${themeVars.colors.whiteColor};
  background: inherit;
  border: 1px solid ${themeVars.colors.lightBlueColor};
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 15px;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${themeVars.colors.orangeColor};
  }
`;

export const NavLinkStyle = styled.div`
  text-align: center;
  padding: 0 15px;

  a {
    text-decoration: none;
    color: ${themeVars.colors.whiteColor};
  }

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }

  i {
    font-size: 22px;
  }
`;

// DropdownContent component
export const DropdownContentStyle = styled.div`
  .profile {
    position: absolute;
    top: 70px;
    right: 0;
    z-index: 3;

    background: ${themeVars.colors.headerBackgroundColor};
    width: 300px;
    border-radius: 0 0 15px 15px;

    &__container {
      padding: 15px;

      &-header {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        padding: 15px 0;
        position: relative;
      }

      &-title {
        font-size: 17px;
        font-weight: bolder;
        color: ${themeVars.colors.lightGreyColor};
      }

      &-aboutMe {
        display: flex;
        align-items: center;
        border-bottom: 0.5px solid ${themeVars.colors.lightGreyColor};
        padding-bottom: 20px;
      }

      &-contacts {
        margin-left: 15px;
        width: 190px;
      }

      &-name {
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      &-job {
        color: ${themeVars.colors.lightGreyColor};
        margin: 7px 0;
        font-size: 14px;
        padding: 0;
      }

      &-mail {
        color: ${themeVars.colors.lightGreyColor};
        font-size: 14px;
        padding: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      &-list {
        display: flex;
        align-items: center;
        padding: 20px 0;
      }

      &-list__icon {
        padding: 5px;
        font-size: 23px;
        display: flex;
        align-items: center;

        svg:hover {
          transform: scale(1.3);
          transition: transform 0.3s ease-in-out;
        }
      }

      &-list__title {
        font-weight: 600;
        cursor: pointer;
        color: ${themeVars.colors.whiteColor};

        a {
          color: ${themeVars.colors.whiteColor};
          text-decoration: none;
        }

        &:hover {
          text-decoration: underline;
        }
      }

      &-list__description {
        color: ${themeVars.colors.lightGreyColor};
        font-size: 14px;
        padding-top: 5px;
      }
    }
  }
`;
