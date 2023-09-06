import styled from "styled-components";

import { themeVars } from "../../../../utils/vars/themeVars";

export const DropDownLoaderStyle = styled.div`
  width: 100px;
  height: 300px;
  margin: 50px auto 0;

  .loading-title {
    display: block;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    padding-bottom: 15px;
    color: ${themeVars.colors.whiteColor};
  }

  .loading-circle {
    display: block;
    border-left: 5px solid;
    border-top-left-radius: 100%;
    border-top: 5px solid;
    margin: 5px;
    animation-name: Loader_611;
    animation-duration: 2000ms;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }

  .sp1 {
    border-left-color: ${themeVars.colors.orangeColor};
    border-top-color: ${themeVars.colors.orangeColor};
    width: 30px;
    height: 30px;
  }

  .sp2 {
    border-left-color: ${themeVars.colors.blueColor};
    border-top-color: ${themeVars.colors.blueColor};
    width: 20px;
    height: 20px;
  }

  .sp3 {
    width: 10px;
    height: 10px;
    border-left-color: ${themeVars.colors.greenColor};
    border-top-color: ${themeVars.colors.greenColor};
  }

  @keyframes Loader_611 {
    0% {
      transform: rotate(0deg);
      transform-origin: right bottom;
    }

    25% {
      transform: rotate(90deg);
      transform-origin: right bottom;
    }

    50% {
      transform: rotate(180deg);
      transform-origin: right bottom;
    }

    75% {
      transform: rotate(270deg);
      transform-origin: right bottom;
    }

    100% {
      transform: rotate(360deg);
      transform-origin: right bottom;
    }
  }
`;
