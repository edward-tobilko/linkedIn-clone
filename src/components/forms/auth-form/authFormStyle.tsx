import styled from "styled-components";

import { themeVars } from "../../../themeVars";

export const AuthFormStyle = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  width: 500px;
  padding: 40px 25px;
  border: 1px solid ${themeVars.colors.lightGreyColor};
  box-shadow: 0px 0px 30px 2px ${themeVars.colors.lightBlueColor};
  border-radius: 15px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      font-size: 40px;
    }
  }

  .container {
    max-width: 600px;
    width: 100%;

    &-title {
      font-size: 26px;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
      margin: 20px 0;
    }

    &-field {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px auto;

      label {
        letter-spacing: 1.5px;
      }

      &-input {
        width: 80%;
        background: inherit;
        border: 1px solid ${themeVars.colors.whiteColor};
        padding: 12px 25px;
        color: ${themeVars.colors.lightGreyColor};
        margin-top: 7px;
        border-radius: 8px;
      }

      .psw {
        letter-spacing: 1px;
        font-size: 16px;
        display: inline-flex;
        align-items: center;

        a {
          color: ${themeVars.colors.lightGreyColor};
          text-decoration: none;
          font-size: 13px;
          padding-left: 10px;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      &:last-child {
        flex-direction: row-reverse;
        justify-content: center;
        position: relative;

        .checkbox__error {
          position: absolute;
          bottom: -30px;
          right: 0;

          background: ${themeVars.colors.whiteColor};
          color: ${themeVars.colors.errorColor};
          padding: 5px 10px;
          border-radius: 0 12px 12px 12px;
          font-size: 14px;
          font-weight: 600;
        }
      }

      &-checkbox {
        display: inline-flex;
        flex-direction: row-reverse;
        align-items: center;

        input {
          margin-right: 10px;
        }
      }

      .password__error {
        color: ${themeVars.colors.errorColor};
      }

      .email__error {
        color: ${themeVars.colors.errorColor};
      }
    }
  }

  /* Media */
  @media screen and (max-width: 768px) {
    max-width: 400px;
    width: 100%;

    .container-title {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 576px) {
    max-width: 300px;
    padding: 20px 10px;

    .container-title {
      font-size: 20px;
    }
    .container-field-input {
      padding: 7px 10px;
    }
    .container-field label {
      display: flex;
      align-items: center;
      letter-spacing: 1px;
    }
    .container-field label span {
      font-size: 12px;
      padding-left: 5px;
    }
  }

  @media screen and (max-width: 420px) {
    .header-logo-subtitle {
      margin: 10px 0 0 7px;
    }
  }

  @media screen and (max-width: 320px) {
    max-width: 250px;
    padding: 20px 10px;

    .container-title {
      margin: 10px 0 !important;
    }
    .container-field {
      margin: 15px auto;
    }
    .container-field .psw {
      font-size: 14px;
    }
    .container-field .psw a {
      font-size: 12px;
    }
    .container-field-login {
      padding: 7px 10px;
      max-width: 80px;
    }
  }
`;
