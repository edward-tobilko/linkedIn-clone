import { FC } from "react";

import { DropDownLoaderStyle } from "./dropdownLoaderStyle";

const DropDownLoader: FC = () => {
  return (
    <DropDownLoaderStyle>
      <label className="loading-title">Loading ...</label>
      <span className="loading-circle sp1">
        <span className="loading-circle sp2">
          <span className="loading-circle sp3"></span>
        </span>
      </span>
    </DropDownLoaderStyle>
  );
};

export default DropDownLoader;
