import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

export const HeaderStyle = styled.header`
  position: relative;
  min-height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const HeaderLeftStyle = styled.div`
  display: flex;
  align-items: center;

  .bxs-id-card {
    font-size: 35px;
    padding-right: 10px;
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
    }
  }

  p {
    color: ${themeVars.colors.lightGreyColor};
    padding: 0 15px;
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
