import { FC } from "react";

import { AvatarImgStyle } from "../../rootStyles";
import { CardProfileStyle } from "./profileStyle";

export const CardProfile: FC = () => {
  return (
    <CardProfileStyle>
      <img
        src="./images/the-lamp.png"
        alt="Wrapper"
        className="cardProfile__wrapper"
      />
      <div className="cardProfile__desc">
        <AvatarImgStyle
          src="./images/avatar.png"
          alt="Avatar"
          width="70px"
          height="70px"
        />
        <h1>Eduard Tobilko</h1>
        <p>Front-end developer | HTML / CSS / JavaScript / React</p>
      </div>
    </CardProfileStyle>
  );
};
