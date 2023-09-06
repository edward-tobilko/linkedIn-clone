import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

export const SettingStyle = styled.div`
  width: 100%;
  max-height: 600px;
  height: 100%;

  .about__header {
    text-align: center;
    position: relative;
    height: 30px;

    &-title {
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.6px;
    }

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: ${themeVars.colors.lightGreyColor};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;
