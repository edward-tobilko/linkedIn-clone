import styled from "styled-components";

import { themeVars } from "../../../../themeVars";

export const LoginBtnStyle = styled.button`
  background: radial-gradient(
      192.53% 1041.23% at 0 12%,
      rgba(255, 255, 255, 0.5) 0,
      rgba(255, 255, 255, 0) 34.03%
    ),
    ${themeVars.colors.lightBlueColor};
  box-shadow: 0 0 18px ${themeVars.colors.lightBlueColor};
  max-width: 130px;
  width: 100%;
  border: none;
  border-radius: 20px;
  color: ${themeVars.colors.whiteColor};
  padding: 10px 20px;
  margin-right: 20px;

  &:disabled {
    opacity: 0.3;
  }

  /* Media */
  @media screen and (max-width: 576px) {
    max-width: 100px;
  }
`;
