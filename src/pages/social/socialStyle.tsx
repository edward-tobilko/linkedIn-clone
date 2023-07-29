import styled from "styled-components";

import { themeVars } from "../../themeVars";

// CardSocialUser component
export const CardSocialUsersStyle = styled.div`
  display: block;
  text-align: center;
`;

export const CardSocialUsersListStyle = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  max-width: 700px;
  width: 100%;
  height: auto;
  background-color: ${themeVars.colors.headerBackgroundColor};
  padding: 20px 0 30px 0;
  border-radius: 7px;
  flex-wrap: wrap;
  flex-shrink: 0;
`;

// CardSocialUsersList component
export const CardSocialUserItemStyle = styled.li`
  max-width: 180px;
  width: 100%;
  height: 300px;
  border: 1px solid ${themeVars.colors.lightGreyColor};
  border-radius: 20px;
  overflow: hidden;
  margin-top: 10px;

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

      h1 {
        padding-top: 5px;
        font-size: 16px;
        font-weight: 600;
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

// RemoveCardSocialUserStyle component
export const RemoveCardSocialUserStyle = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  z-index: 1;
  background-color: transparent;
  border: none;
  opacity: 0.7;

  img {
    width: 25px;
    height: 25px;
  }

  &:hover {
    opacity: 1;
  }
`;
