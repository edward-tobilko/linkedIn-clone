import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

// AuthForm component
export const AuthFormStyle = styled.form`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

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
        letter-spacing: 1.2px;
      }

      &-input {
        width: 70%;
        background: inherit;
        border: 1px solid ${themeVars.colors.whiteColor};
        padding: 12px 25px;
        color: ${themeVars.colors.lightGreyColor};
        margin-top: 7px;
        border-radius: 8px;
      }

      .error {
        padding-top: 7px;
        color: ${themeVars.colors.errorColor};
      }

      .checkbox__error {
        position: absolute;
        bottom: -40px;
        right: 20px;

        background: ${themeVars.colors.whiteColor};
        color: ${themeVars.colors.errorColor};
        border-radius: 0 12px 12px 12px;
        font-size: 15px;
        font-weight: 600;
        height: 40px;
        width: 200px;
        padding-top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-child(5) {
        flex-direction: row-reverse;
        justify-content: center;
        position: relative;

        .checkbox {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          margin-right: 5px;
        }
      }
    }

    .psw {
      width: 100%;
      letter-spacing: 1px;
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      a {
        color: ${themeVars.colors.lightGreyColor};
        text-decoration: none;
        font-size: 13px;
        padding-left: 10px;

        &:hover {
          text-decoration: underline;
          text-decoration-color: ${themeVars.colors.whiteColor};
        }
      }
    }

    .show__psw {
      position: relative;

      &-label {
        position: absolute;
        right: 0;
        top: 60%;
        z-index: 1;
        transform: translateY(-40%);

        &-check {
          cursor: pointer;
        }

        .hover__text {
          display: none;
        }

        &:hover .hover__text {
          position: absolute;
          bottom: -60px;
          right: -100px;
          z-index: 2;

          display: block;
          background: ${themeVars.colors.whiteColor};
          color: ${themeVars.colors.blackColor};
          padding: 5px 12px;
          border-radius: 0 12px 12px 12px;
          font-size: 14px;
          font-weight: 600;

          &-short {
            display: none;
          }
        }
      }
    }
  }

  /* Media */
  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    max-width: 400px;
    width: 100%;

    .container-title {
      font-size: 20px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    max-width: 300px;
    padding: 20px 10px;

    .container-title {
      font-size: 20px;
    }
    .container-field-input {
      padding: 7px 10px;
      font-size: 13px;
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

    .container-field .checkbox__error {
      font-size: 13px;
      right: 10px;
      bottom: -30px;
      width: 180px;
      height: 30px;
    }
    .container .show__psw-label:hover .hover__text {
      right: 0;
      font-size: 12px;
      border-radius: 12px 0 12px 12px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    .header-logo-subtitle {
      margin: 10px 0 0 7px;
    }
    .container-field label {
      font-size: 13px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint320}) {
    max-width: 250px;
    padding: 20px 10px;

    .container-title {
      margin: 10px 0;
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
    .container-field .checkbox__error {
      font-size: 11.5px;
      right: 5px;
      bottom: -25px;
      width: 160px;
      height: 25px;
    }
    .container .show__psw-label:hover .hover__text {
      bottom: -55px;

      &-short {
        display: block;
      }

      &-long {
        display: none;
      }
    }
  }
`;

// Captcha component
export const CaptchaStyle = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 250px;

  .captcha__label {
    text-align: center;
    padding-bottom: 7px;
    color: ${themeVars.colors.errorColor};
  }

  .captcha__field {
    margin-bottom: 10px;
  }
`;
