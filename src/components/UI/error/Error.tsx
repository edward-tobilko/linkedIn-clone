import { FC } from "react";

import errorIcon from "../../../img/svg/error_icon.svg";

import { ErrorStyle } from "./errorStyle";

export const Error: FC<any> = ({ children }) => {
  return (
    <ErrorStyle>
      <img src={errorIcon} alt="" />

      <h1> {children} </h1>
    </ErrorStyle>
  );
};
