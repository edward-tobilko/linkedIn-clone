import * as yup from "yup";

export const authSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Invalid  email")
      .required("Email Address is required")
      .min(7, "Email must be at least 7 characters")
      .max(30, "Max length is 30 symbols"),

    password: yup
      .string()
      .required("Password is required")
      .min(2, "Password must be at least 2 characters"),

    rememberMe: yup.boolean().oneOf([true], "Authorization is required!"),

    captcha: yup.string(),
  })
  .required();
