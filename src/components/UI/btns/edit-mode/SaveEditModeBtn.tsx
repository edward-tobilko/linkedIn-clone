import { FC } from "react";

import { SaveEditModeBtnTypes } from "./saveEditModeBtnTypes";

import { SaveEditModeBtnStyle } from "./saveEditModeBtnStyle";

export const SaveEditModeBtn: FC<SaveEditModeBtnTypes> = ({ children }) => {
  return (
    <SaveEditModeBtnStyle>
      <button> {children} </button>
    </SaveEditModeBtnStyle>
  );
};
