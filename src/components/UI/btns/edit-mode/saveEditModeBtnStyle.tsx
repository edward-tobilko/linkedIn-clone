import styled from "styled-components";

import { themeVars } from "../../../../utils/vars/themeVars";

export const SaveEditModeBtnStyle = styled.div`
  text-align: center;
  padding: 10px 0;

  button {
    background: ${themeVars.colors.blueColor};
    color: ${themeVars.colors.whiteColor};
    border: none;
    padding: 10px 30px;
    border-radius: 40px;
    font-size: 15px;
    letter-spacing: 0.5px;

    &:hover {
      filter: brightness(70%);
    }
  }
`;
