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
`;

export const GitHubSearchUsersStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
