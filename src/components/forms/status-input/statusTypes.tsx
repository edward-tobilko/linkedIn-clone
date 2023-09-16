import { Dispatch, SetStateAction } from "react";
import { RootDispatch } from "../../../redux/store";

interface StatusProps {
  status: string;
  updateUserStatusTC?: RootDispatch;
  currentProfilePage?: any;
}

interface StatusContainerProps extends StatusProps {
  serverError: string | null;
}

interface StatusFieldProps extends StatusContainerProps {
  statusValue: string | undefined;
  setStatusValue: Dispatch<SetStateAction<string>>;
  updateInputStatus: () => void;
}

export { StatusContainerProps, StatusFieldProps, StatusProps };
