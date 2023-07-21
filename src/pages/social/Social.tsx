import { FC } from "react";

import { SocialStyle } from "./socialStyle";

import CardSocialUser from "./CardSocialUser";

const Social: FC = () => {
  return (
    <SocialStyle>
      <CardSocialUser />
    </SocialStyle>
  );
};

export default Social;
