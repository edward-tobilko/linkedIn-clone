import { Dispatch, SetStateAction } from "react";

interface StatusProps {
  status: string;
  currentProfilePage?: any;
}

interface StatusContainerProps extends StatusProps {
  serverError: Object | null;
}

interface StatusFieldProps extends StatusContainerProps {
  statusValue: string | undefined;
  setStatusValue: Dispatch<SetStateAction<string>>;
  updateInputStatus: () => void;
}

export { StatusContainerProps, StatusFieldProps, StatusProps };
