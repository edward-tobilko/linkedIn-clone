import * as yup from "yup";

export const editModeSchema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Name is required")
      .max(30, "Max length is 30 symbols"),

    aboutMe: yup
      .string()
      .required("Tell us about yourself a bit")
      .max(130, "Max length is 130 symbols")
      .min(5, "Text must be at least 5 characters long"),

    lookingForAJobDescription: yup
      .string()
      .required("Your professional skills")
      .max(150, "Max length is 150 symbols")
      .min(2, "Text must be at least 2 characters long"),

    lookingForAJob: yup.boolean(),

    contacts: yup.object().shape({
      // facebook: yup
      //   .string()
      //   .matches(
      //     /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
      //     "Facebook: Enter correct url!",
      //   ),
      // website: yup
      //   .string()
      //   .matches(
      //     /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
      //     "Website: Enter correct url!",
      //   ),
      // vk: yup
      //   .string()
      //   .matches(
      //    /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
      //     "Vk: Enter correct url!",
      //   ),
      // twitter: yup
      //   .string()
      //   .matches(
      //    /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
      //     "Twitter: Enter correct url!",
      //   ),
      // instagram: yup
      //   .string()
      //   .matches(
      //     /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
      //     "Instagram: Enter correct url!",
      //   ),
      youtube: yup
        .string()
        .matches(
          /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
          "YouTube: Enter correct url!",
        ),
      github: yup
        .string()
        .matches(
          /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
          "GitHub: Enter correct url!",
        ),
      // mainLink: yup
      //   .string()
      //   .matches(
      //     /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
      //     "MainLink: Enter correct url!",
      //   ),
    }),
  })
  .required();
