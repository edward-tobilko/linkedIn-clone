import { FC } from "react";

import { StatusProps } from "./statusTypes";

import StatusContainer from "./StatusContainer";

const Status: FC<StatusProps> = ({ status, currentProfilePage }) => {
  return (
    <StatusContainer status={status} currentProfilePage={currentProfilePage} />
  );
};

export default Status;
