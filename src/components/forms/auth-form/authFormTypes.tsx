import { SubmitHandler } from "react-hook-form";

import { AuthFormType } from "../../../pages/auth/authTypes";

//? Отримуємо всі ключі типа AuthFormFieldProps
type AuthFormFieldKeys = keyof AuthFormFieldProps;

type AuthFormFieldProps = {
  name: string;
  label: string;
  type: string;
  className: string;
};

type AuthFormProps = {
  authForm: any;
  onSubmit: SubmitHandler<AuthFormType>;
  captchaUrl: string;
  authLoginBtnLoading: boolean;
};

type CaptchaProps = {
  captchaUrl: string;
};

export { AuthFormFieldProps, AuthFormProps, CaptchaProps };
