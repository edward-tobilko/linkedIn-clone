import { FC, ReactNode } from "react";

import errorIcon from "../../../img/svg/error_icon.svg";

import { ErrorStyle } from "./errorStyle";

type ErrorProps = {
  children: ReactNode;
};

export const Error: FC<ErrorProps> = ({ children }) => {
  return (
    <ErrorStyle>
      <img src={errorIcon} alt="" />

      <h1> {children} </h1>
    </ErrorStyle>
  );
};
