import * as yup from "yup";

export const authSchema = yup
  .object({
    email: yup
      .string()
      .email("Incorrect email")
      .required("Email Address is required")
      .min(7, "Min length is 7 symbols")
      .max(30, "Max length is 30 symbols"),

    password: yup.string().required("Password is required"),

    rememberMe: yup.boolean().required("Authorization is required!"),

    captcha: yup.boolean().required(),
  })
  .required();
