import { FC } from "react";

import { NotFoundStyle } from "./notFoundStyle";

export const NotFound: FC = () => {
  return (
    <NotFoundStyle>
      <div className="details">
        <p className="title">Bad Request</p>
        <p className="body">First of all, you must be logged in</p>
      </div>
      <a href="https://www.google.com/" className="link" target="blank">
        More info
      </a>
    </NotFoundStyle>
  );
};
