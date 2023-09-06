import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

// SocialContent component
export const SocialStyle = styled.div`
  position: relative;
  display: block;
  text-align: center;
  width: 100%;
`;

export const SocialUsersListStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  background-color: ${themeVars.colors.headerBackgroundColor};
  padding: 30px 15px;
  border-radius: 7px;
  flex-wrap: wrap;
  flex-shrink: 0;
`;

// SocialUsersList component
export const SocialUserItemStyle = styled.li`
  max-width: 180px;
  width: 100%;
  height: 300px;
  border: 1px solid ${themeVars.colors.lightGreyColor};
  border-radius: 20px;
  overflow: hidden;
  margin-top: 15px;

  &:nth-child(-n + 3) {
    margin-top: 0;
  }

  .cardSocial {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    &__wrapper {
      width: 100%;
      height: 75px;
    }

    &__desc {
      text-align: center;
      width: 100%;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);

      p {
        a {
          padding-top: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          color: ${themeVars.colors.lightGreyColor};

          &:hover {
            text-decoration: underline;
          }
        }
      }

      p {
        font-size: 13px;
        font-weight: 400;
        color: ${themeVars.colors.lightGreyColor};
        padding-top: 5px;

        span {
          color: ${themeVars.colors.errorColor};
        }
      }
    }
  }
`;

// SocialNetworkManagement component
export const SocialNetworkManagementStyle = styled.aside`
  background-color: ${themeVars.colors.headerBackgroundColor};
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  height: 100%;
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
