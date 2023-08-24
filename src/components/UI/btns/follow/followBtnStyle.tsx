import styled, { css } from "styled-components";

import { themeVars } from "../../../../utils/vars/themeVars";

export const FollowBtnStyle = styled.button<{
  primary: any;
  borderRadius: any;
  visibleText: any;
  maxWidth: any;
  fontSizeIcon: any;
  margin: any;
  position: any;
  top: any;
  left: any;
  transformPosition: any;
}>`
  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      color: ${themeVars.colors.whiteColor};
    `}

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  font-size: ${(props) => (props.fontSizeIcon ? "16px" : "12px")};
  max-width: ${(props) => (props.maxWidth ? "130px" : "50px")};
  height: 40px;
  border-radius: ${(props) => (props.borderRadius ? "12px" : "50%")};
  width: 100%;
  border: 1px solid ${themeVars.colors.orangeColor};
  margin: ${(props) => (props.margin ? "0 0 12px 0" : "0 85px 12px 0")};

  span {
    display: ${(props) => (props.visibleText ? "block" : "none")};
  }

  :disabled {
    opacity: 0.4;
  }

  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${themeVars.colors.greyColor};
  }

  img {
    position: ${(props) => (props.position ? "relative" : "absolute")};
    top: ${(props) => (props.top ? "none" : "50%")};
    left: ${(props) => (props.left ? "none" : "50%")};
    transform: ${(props) =>
      props.transformPosition ? "none" : "translate(-50%, -50%)"};
    width: 20px;
    height: 20px;
  }
`;
