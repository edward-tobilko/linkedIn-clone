import { FC, useState, ChangeEvent } from "react";

import { SocialNetworkManagementInputStyle } from "./socialNetworkManagementInputStyle";

export const SocialNetworkManagementInput: FC = () => {
  const [value, setValue] = useState("1992eduard777@gmail.com");

  return (
    <SocialNetworkManagementInputStyle
      type="email"
      placeholder="Email address"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
};
