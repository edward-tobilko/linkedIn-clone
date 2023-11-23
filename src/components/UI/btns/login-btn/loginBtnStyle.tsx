import styled from "styled-components";

import { themeVars } from "../../../../utils/vars/themeVars";

// LoginBtn component
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
    opacity: 0.4;
  }

  &:hover {
    filter: brightness(70%);
  }

  /* Media */
  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    max-width: 100px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    padding: 5px 10px;
    max-width: 80px;
    font-size: 14px;
  }
`;

export const LoginBtnLoadingStyle = styled.div`
  i {
    animation: rotate 2s linear infinite;
    font-size: 20px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
