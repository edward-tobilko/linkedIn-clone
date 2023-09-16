import { FC } from "react";

import { StatusProps } from "./statusTypes";

import StatusContainer from "./StatusContainer";

const Status: FC<StatusProps> = ({
  status,
  updateUserStatusTC,
  currentProfilePage,
}) => {
  return (
    <StatusContainer
      status={status}
      updateUserStatusTC={updateUserStatusTC}
      currentProfilePage={currentProfilePage}
    />
  );
};

export default Status;
