import styled from "styled-components";
import { themeVars } from "../../../utils/vars/themeVars";

export const CreateMessagePostStyle = styled.div`
  padding: 10px 0 10px 20px;
  margin: 0 0 30px 0;
  background: ${themeVars.colors.headerBackgroundColorLighter};
  border-radius: 5px;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .create__message__post-textarea {
      width: 100%;

      textarea {
        display: block;
        width: 100%;
        flex-grow: 1;
        overflow: hidden;
        height: 30px;
        border: none;
        resize: none;
        background: transparent;
        font-size: 16px;
        font-weight: 500;
        color: ${themeVars.colors.whiteColor};
        padding: 5px 10px;
        outline: none;
        &:focus {
          border-bottom: 1px solid ${themeVars.colors.orangeColor};
        }
      }
    }

    .create__message__post-actions {
      width: 150px;
      flex-shrink: 0;
      display: flex;
      justify-content: flex-end;

      label {
        display: block;
        margin-right: 15px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        cursor: pointer;
        background: ${themeVars.colors.whiteColor};
        position: relative;

        img {
          width: 21px;
          height: 21px;
          border-radius: 30%;

          position: absolute;
          top: 10px;
          left: 12px;
          z-index: 1;
        }

        input {
          opacity: 0;
          font-size: 0;
          width: 40px;
          height: 40px;
          cursor: pointer;

          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
        font-size: 14px;

        &:hover {
          filter: brightness(75%);
        }

        &:disabled {
          filter: brightness(75%);
          cursor: auto;
        }
      }
    }
  }
`;
