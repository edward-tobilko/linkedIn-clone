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

    captcha: yup.boolean().required(),
  })
  .required();

export const editModeSchema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Name is required")
      .max(30, "Max length is 30 symbols"),

    lookingForAJobDescription: yup
      .string()
      .max(130, "Max length is 130 symbols"),

    lookingForAJob: yup
      .string()
      .max(10, "Max length is 10 symbols")
      .required("Field is required"),
  })
  .required();
