import styled from "styled-components";
import { themeVars } from "../../../themeVars";

export const DialogUsersStyle = styled.div`
  width: 70%;
  padding: 0 15px 0 0;
  list-style: none;
  height: 600px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${themeVars.colors.lightGreyColor};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${themeVars.colors.greyColor};
  }
`;

export const DialogUserStyle = styled.li`
  margin-bottom: 20px;
  display: flex;

  .dialog__user {
    background: ${themeVars.colors.headerBackgroundColor};
    padding-left: 20px;
    width: 100%;

    &-header {
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      position: relative;

      a {
        text-decoration: none;
        color: ${themeVars.colors.whiteColor};
        &:hover {
          text-decoration: underline;
        }
      }

      span {
        font-size: 11px;
        font-style: italic;
      }

      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${themeVars.colors.lightGreyColor};
        position: absolute;
        bottom: 0;
      }
    }

    &-content {
      padding-top: 20px;

      p {
        filter: blur(2px);
      }
    }
  }
`;
