import { FC } from "react";

import { AvatarImgStyle } from "../../rootStyles";
import { CardProfileStyle } from "./profileStyle";

import avatarIcon from "../../img/images/avatar.png";
import lampIcon from "../../img/images/lamp.png";

export const CardProfile: FC = () => {
  return (
    <CardProfileStyle>
      <img src={lampIcon} alt="" className="cardProfile__wrapper" />
      <div className="cardProfile__desc">
        <AvatarImgStyle src={avatarIcon} alt="" width="70px" height="70px" />
        <h1>Eduard Tobilko</h1>
        <p>Front-end developer | HTML / CSS / JavaScript / React</p>
      </div>
    </CardProfileStyle>
  );
};
