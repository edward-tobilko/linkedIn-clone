import { FC } from "react";

import { GitHubLoaderStyle } from "./gitHubLoaderStyle";

export const GitHubUserDetailsLoader: FC = () => {
  return (
    <GitHubLoaderStyle>
      <span className="text">LOADING</span>
      <span className="load"></span>
    </GitHubLoaderStyle>
  );
};
