import styled from "styled-components";
import { themeVars } from "../../../utils/vars/themeVars";

export const DialogUsersStyle = styled.div`
  width: 70%;
  list-style: none;
  height: 600px;
  overflow-y: auto;

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

  .notification {
    position: absolute;
    bottom: -20px;
    right: 70px;
    z-index: 1;

    border: 1px solid ${themeVars.colors.whiteColor};
    border-radius: 12px;
    padding: 5px 10px;
    font-size: 14px;
    color: ${themeVars.colors.whiteColor};
  }
`;

export const DialogUserStyle = styled.li`
  padding: 15px;
  display: flex;
  align-items: flex-end;

  .dialog__user {
    background: ${themeVars.colors.headerBackgroundColorLighter};
    padding: 15px;
    margin-left: 10px;
    opacity: 0.8;
    border-radius: 10px 10px 10px 0px;
    min-width: 150px;
    max-width: 380px;
    word-break: break-word;
    height: auto;

    &-header {
      padding-bottom: 10px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-link {
        text-decoration: none;
        color: ${themeVars.colors.whiteColor};
        &:hover {
          text-decoration: underline;
        }
      }

      &:after {
        content: "";
        display: block;
        width: 30%;
        height: 1px;
        background-color: ${themeVars.colors.lightGreyColor};
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &-content {
      padding-top: 20px;

      &-msg {
        /* filter: blur(2px); */
      }
    }
  }
`;
