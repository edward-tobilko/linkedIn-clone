import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

export const GitHubStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .container {
    max-width: 320px;
    width: 100%;

    &__menu {
      &-list {
        cursor: pointer;
      }

      .selected__user {
        color: ${themeVars.colors.errorColor};
      }
    }

    &__details {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 500px;
      width: 100%;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint992}) {
    .container__details {
      max-width: 400px;

      img {
        width: inherit;
      }
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    .container {
      max-width: 220px;
    }

    .container__details {
      max-width: 300px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    max-width: 400px;

    .container {
      margin-top: 25px;
      text-align: center;

      &__menu {
        svg {
          width: 220px;
        }
      }
    }
  }
`;

export const GitHubSearchUsersStyle = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    flex-direction: column;
    margin-bottom: 10px;

    input {
      margin-bottom: 10px;
    }
  }
`;
