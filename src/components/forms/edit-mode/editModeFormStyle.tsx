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
    width: 700px;

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
      }

      &-title {
        font-size: 21px;
        padding: 15px 0;
      }
    }
  }

  .error {
    color: ${themeVars.colors.errorColor};
    padding-top: 10px;
    text-align: center;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    .edit__mode {
      width: 500px;
    }

    .edit__mode-form {
      width: 450px;
    }

    .edit__mode-form-field:nth-child(4) {
      max-width: 100%;
    }

    .error {
      font-size: 12px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    .edit__mode {
      width: 380px;
    }

    .edit__mode-form {
      width: 350px;
    }

    .edit__mode-title {
      font-size: 17px;
    }

    .edit__mode-form-field {
      grid-template-rows: repeat(3, 22px);
    }

    .error {
      padding-top: 20px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    .edit__mode {
      width: 300px;
    }

    .edit__mode-form {
      width: 270px;
    }

    .edit__mode-title {
      font-size: 15px;
    }

    .error {
      font-size: 12px;
    }

    .edit__mode-form-field-label {
      max-width: 100px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint320}) {
    .edit__mode {
      width: 250px;
    }

    .edit__mode-form {
      width: 220px;
    }

    .edit__mode-title {
      font-size: 13px;
    }

    .edit__mode-form-field {
      row-gap: 0;
    }
  }
`;
