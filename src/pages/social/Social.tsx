import { FC } from "react";

import SocialNetworkManagement from "./social-sidebar/SocialNetworkManagement";
import SocialContent from "./SocialContent";

const Social: FC = () => {
  return (
    <>
      <SocialNetworkManagement />
      <SocialContent />
    </>
  );
};

export default Social;
