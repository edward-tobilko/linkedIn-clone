import { object, InferType, string, boolean } from "yup";

export type EditModeSchemaType = InferType<typeof editModeSchema>;

export const editModeSchema = object()
  .shape({
    fullName: string()
      .required("Name is required")
      .max(30, "Max length is 30 symbols"),

    aboutMe: string()
      .required("Tell us about yourself a bit")
      .max(130, "Max length is 130 symbols")
      .min(5, "Text must be at least 5 characters long"),

    lookingForAJobDescription: string()
      .required("Your professional skills")
      .max(150, "Max length is 150 symbols")
      .min(2, "Text must be at least 2 characters long"),

    lookingForAJob: boolean(),

    contacts: object().shape({
      facebook: string().matches(
        /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
        "Facebook: Enter correct url!",
      ),
      website: string().matches(
        /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
        "Website: Enter correct url!",
      ),
      vk: string().matches(
        /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
        "Vk: Enter correct url!",
      ),
      twitter: string().matches(
        /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
        "Twitter: Enter correct url!",
      ),
      instagram: string().matches(
        /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
        "Instagram: Enter correct url!",
      ),
      youtube: string().matches(
        /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
        "YouTube: Enter correct url!",
      ),
      github: string().matches(
        /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
        "GitHub: Enter correct url!",
      ),
      mainLink: string().matches(
        /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/,
        "MainLink: Enter correct url!",
      ),
    }),
  })
  .required();
