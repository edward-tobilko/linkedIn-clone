import { RootDispatch } from "../../../redux/store";

type StatusProps = {
  status: string;
  updateUserStatusTC: RootDispatch;
  currentProfilePage: any;
};

export { StatusProps };
