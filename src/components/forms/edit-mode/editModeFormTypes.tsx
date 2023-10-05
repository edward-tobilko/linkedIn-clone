import { SubmitHandler } from "react-hook-form";
import { CurrentProfilePageType } from "../../../pages/profile/profileTypes";

type EditModeFormFieldProps = {
  className: string;
  label: string;
  name: string;
  type: string;
};

type EditModeFormProps = {
  currentProfilePage: CurrentProfilePageType;
  setProfileEditMode: (editMode: boolean) => void;
  onSubmit: SubmitHandler<FormData>;
  authForm: any;
  loading: boolean;
};

export { EditModeFormFieldProps, EditModeFormProps };
