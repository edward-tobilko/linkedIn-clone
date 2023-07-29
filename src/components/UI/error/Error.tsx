import { FC } from "react";

import errorIcon from "../../../img/svg/error_icon.svg";

import { ErrorStyle } from "./errorStyle";

export const Error: FC = () => {
  return (
    <ErrorStyle>
      <img src={errorIcon} alt="" />

      <h1>The list is empty...</h1>
    </ErrorStyle>
  );
};
