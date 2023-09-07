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

    width: 600px;
    height: 500px;
    background: ${themeVars.colors.headerBackgroundColor};
    padding: 20px;
    border-radius: 15px;

    &-title {
      text-align: center;
      font-size: 18px;
    }

    &-form {
    }
  }
`;
