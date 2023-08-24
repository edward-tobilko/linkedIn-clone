import styled from "styled-components";

import { themeVars } from "../../../../utils/vars/themeVars";

export const CreatePostBtnStyle = styled.button<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border: 0;
  position: relative;
  overflow: hidden;
  border-radius: 10rem;
  transition: all 0.02s;
  font-weight: bolder;
  color: ${themeVars.colors.blackColor};
  z-index: 0;
  box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
  font-size: 15px;
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  &:hover {
    background: rgb(193, 228, 248);
    color: rgb(33, 0, 85);
  }
  &:active {
    transform: scale(0.97);
  }

  .hoverEffect {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .hoverEffect div {
    background: ${themeVars.colors.orangeColor};
    background: linear-gradient(
      90deg,
      ${themeVars.colors.orangeColor} 0%,
      rgba(191, 70, 255, 1) 49%,
      rgba(0, 212, 255, 1) 100%
    );
    border-radius: 40rem;
    width: 10rem;
    height: 10rem;
    transition: 0.4s;
    filter: blur(20px);
    animation: effect infinite 3s linear;
    opacity: 0.5;
  }

  &:hover .hoverEffect div {
    width: 8rem;
    height: 8rem;
  }

  @keyframes effect {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
