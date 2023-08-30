import { Dispatch, SetStateAction } from "react";
import { RootDispatch } from "../../../redux/store";

interface StatusProps {
  status: string;
  updateUserStatusTC: RootDispatch;
  currentProfilePage: any;
}

interface StatusFieldProps extends StatusProps {
  statusValue: string | undefined;
  setStatusValue: Dispatch<SetStateAction<string>>;
  updateInputStatus: () => void;
}

export { StatusProps, StatusFieldProps };
