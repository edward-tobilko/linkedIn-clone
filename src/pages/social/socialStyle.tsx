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

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint1200}) {
    padding: 20px 0;
    max-width: 650px;
  }
`;

// SocialUsersList component
export const SocialUsersListEmptyStyle = styled.h1`
  text-align: center;
  color: ${themeVars.colors.errorColor};
  font-size: 16px;
  letter-spacing: 1.2px;
  font-weight: 600;
`;

// SocialUsersItem component
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
