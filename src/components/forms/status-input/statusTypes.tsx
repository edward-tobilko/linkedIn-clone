import { Dispatch, SetStateAction } from "react";

import { CurrentProfilePageTypes } from "../../../pages/profile/profileTypes";

interface IStatusProps {
  status: string;
  currentProfilePage?: CurrentProfilePageTypes;
  serverError: Object | null;
}

interface IStatusFieldProps {
  statusValue: string;
  setStatusValue: Dispatch<SetStateAction<string>>;
  updateInputStatus: () => void;
}

interface IMapDispatchToProps {
  updateUserStatusTC: (statusValue: string) => void;
  setServerErrorTC: (error: Object) => void;
}

interface IOwnProps {}

export { IStatusFieldProps, IStatusProps, IMapDispatchToProps, IOwnProps };
