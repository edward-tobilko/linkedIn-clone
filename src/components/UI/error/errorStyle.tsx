import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

export const ErrorStyle = styled.div`
  max-width: 200px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 17px;
    letter-spacing: 1px;
    color: ${themeVars.colors.errorColor};
  }
`;
