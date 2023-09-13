import { FC } from "react";

import { SaveEditModeBtnTypes } from "./saveEditModeBtnTypes";

import { SaveEditModeBtnStyle } from "./saveEditModeBtnStyle";

export const SaveEditModeBtn: FC<SaveEditModeBtnTypes> = ({
  children,
  loading,
}) => {
  return (
    <SaveEditModeBtnStyle>
      <button disabled={loading}> {children} </button>
    </SaveEditModeBtnStyle>
  );
};
