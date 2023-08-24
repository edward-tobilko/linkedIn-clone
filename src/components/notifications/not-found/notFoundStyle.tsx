import styled from "styled-components";

import { themeVars } from "../../../utils/vars/themeVars";

export const NotFoundStyle = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 20px;
  background: ${themeVars.colors.whiteColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border: 2px solid ${themeVars.colors.errorColor};
  transition: 0.5s ease-out;
  overflow: visible;

  .details {
    gap: 15px;
    display: grid;
    place-content: center;
    color: ${themeVars.colors.errorColor};
    height: 100%;

    .title {
      font-size: 25px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }

    .body {
      color: ${themeVars.colors.blackColor};
      font-weight: 600;
    }
  }

  .link {
    transform: translate(-50%, 125%);
    width: 50%;
    border-radius: 20px;
    border: none;
    background-color: ${themeVars.colors.blueColor};
    color: ${themeVars.colors.whiteColor};
    font-size: 17px;
    padding: 10px 25px;
    text-decoration: none;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  &:hover {
    border-color: ${themeVars.colors.blueColor};
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  &:hover .link {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;
