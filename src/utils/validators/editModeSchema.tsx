import * as yup from "yup";

export const editModeSchema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Name is required")
      .max(30, "Max length is 30 symbols"),

    aboutMe: yup.string().max(130, "Max length is 130 symbols"),

    lookingForAJobDescription: yup
      .string()
      .max(300, "Max length is 300 symbols"),

    lookingForAJob: yup.string().max(10, "Max length is 10 symbols"),
  })
  .required();
