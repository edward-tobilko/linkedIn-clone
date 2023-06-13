import styled from "styled-components";
import { themeVars } from "../../../themeVars";

export const ChatUsersStyle = styled.div`
  list-style: none;
  width: 30%;
  position: relative;

  &:after {
    content: "";
    width: 1px;
    height: 30%;
    background-color: ${themeVars.colors.lightGreyColor};
    margin: 0 10px;

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  a {
    padding-left: 10px;
    font-size: 17px;
    color: ${themeVars.colors.whiteColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ChatUserStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 25%;
    height: 1px;
    background-color: ${themeVars.colors.lightGreyColor};
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:last-child:after {
    display: none;
  }
`;
