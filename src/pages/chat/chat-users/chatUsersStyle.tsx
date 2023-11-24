import styled from "styled-components";
import { themeVars } from "../../../utils/vars/themeVars";

export const ChatUsersStyle = styled.div`
  list-style: none;
  width: 30%;
  position: relative;
  height: 600px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${themeVars.colors.lightGreyColor};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${themeVars.colors.greyColor};
  }

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

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    height: 400px;

    a {
      font-size: 13px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    display: none;
  }
`;

export const ChatUserStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  &:after {
    content: "";
    display: block;
    width: 10%;
    height: 1px;
    background-color: ${themeVars.colors.lightGreyColor};
    position: absolute;
    bottom: -15px;
    left: 7px;
  }

  &:last-child:after {
    display: none;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    margin-bottom: 25px;
  }
`;
