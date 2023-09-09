import { FC } from "react";

import { CardProfileLoaderStyle } from "./profileContentLoaderStyle";

export const CardProfileLoader: FC = () => {
  return (
    <CardProfileLoaderStyle>
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </CardProfileLoaderStyle>
  );
};
