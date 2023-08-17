import { FC, useState, ChangeEvent } from "react";
import { connect } from "react-redux";

import { SocialNetworkManagementInputStyle } from "./socialNetworkManagementInputStyle";

import { RootState } from "../../../redux/store";

type SocialNetworkManagementInputProps = {
  email: string;
};

const mapStateToProps = (state: RootState) => {
  return {
    email: state.authorization.email,
  };
};

const SocialNetworkManagementInputContainer = connect(mapStateToProps, null);

const SocialNetworkManagementInput: FC<SocialNetworkManagementInputProps> = ({
  email,
}) => {
  const [value, setValue] = useState(email || "1992eduard777@gmail.com");

  return (
    <SocialNetworkManagementInputStyle
      type="email"
      placeholder="Email address"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
};

export default SocialNetworkManagementInputContainer(
  SocialNetworkManagementInput,
);
