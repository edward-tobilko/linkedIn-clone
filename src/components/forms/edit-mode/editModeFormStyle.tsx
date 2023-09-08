import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

export const EditModeFormStyle = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  background: ${themeVars.colors.backgroundRGBA};

  .edit__mode {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: ${themeVars.colors.headerBackgroundColor};
    padding: 20px;
    border-radius: 15px;

    &-title {
      text-align: center;
      font-size: 22px;
      padding-bottom: 10px;
      border-bottom: 0.5px solid ${themeVars.colors.lightGreyColor};
    }

    &-form {
      padding: 20px 15px 0 5px;
      overflow-y: scroll;
      width: 650px;
      height: 600px;

      &-field {
        display: grid;
        grid-template-rows: repeat(3, 30px);
        row-gap: 5px;

        &:nth-child(4) {
          display: flex;
          max-width: 150px;
          justify-content: space-between;
          align-items: center;
        }

        &:nth-child(4) input:hover {
          cursor: pointer;
          border: 0;
          margin: 0;
        }

        &:nth-child(4) input {
          width: 15px;
          height: 15px;
        }

        &:nth-child(4) input:focus {
          border: 0;
        }

        &-label {
          font-size: 13.5px;
          color: ${themeVars.colors.lightGreyColor};
        }

        input {
          background: transparent;
          border: none;
          border: 1px solid ${themeVars.colors.whiteColor};
          border-radius: 5px;
          padding: 5px 10px;
          font-size: 14px;
          color: ${themeVars.colors.whiteColor};
          height: 30px;
          opacity: 0.8;

          &:hover {
            border: 2px solid;
            margin: -1px; //? hover without moving the element
          }

          &:focus {
            border: 1px solid ${themeVars.colors.blueColor};
          }
        }

        .error {
          color: ${themeVars.colors.errorColor};
          padding-top: 10px;
          text-align: center;
        }
      }

      &-title {
        font-size: 21px;
        padding: 15px 0;
      }
    }
  }
`;
