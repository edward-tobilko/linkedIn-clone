import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

export const MyTasksStyle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  .container {
    &__menu {
      &-list {
        cursor: pointer;
      }

      .selected__user {
        color: ${themeVars.colors.errorColor};
      }
    }
  }
`;
