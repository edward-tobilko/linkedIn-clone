import styled from "styled-components";
import { themeVars } from "../../../themeVars";

export const DialogUsersStyle = styled.div`
  width: 70%;
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
  padding: 15px;
  display: flex;

  .dialog__user {
    background: ${themeVars.colors.headerBackgroundColorLighter};
    padding: 15px;
    margin-left: 10px;
    opacity: 0.8;
    border-radius: 10px;
    min-width: 150px;
    max-width: 380px;

    &-header {
      padding-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
        // max-width: 50px;
        // width: 100%;
        // overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
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
