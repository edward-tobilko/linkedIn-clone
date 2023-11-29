import { FC, useState, ChangeEvent } from "react";
import { connect } from "react-redux";

import { SocialNetworkInputStyle } from "./SocialNetworkInputStyle";

import { RootState } from "../../../redux/store";

import { SocialNetworkInputProps } from "./SocialNetworkInputTypes";

const mapStateToProps = (state: RootState): SocialNetworkInputProps => {
  return {
    email: state.authorization.email,
  };
};

const SocialNetworkInputContainer = connect<
  SocialNetworkInputProps,
  {},
  {},
  RootState
>(mapStateToProps, {});

const SocialNetworkInput: FC<SocialNetworkInputProps> = ({ email }) => {
  const [value, setValue] = useState(email! || "1992eduard777clone@gmail.com");

  return (
    <SocialNetworkInputStyle
      type="email"
      placeholder="Email address"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
};

export default SocialNetworkInputContainer(SocialNetworkInput);
