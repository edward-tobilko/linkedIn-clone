import { FC } from "react";

import { EditModeFormStyle } from "./editModeFormStyle";

import { EditModeFormProps } from "./editModeFormTypes";
import { useFormContext } from "react-hook-form";

import EditModeFormField from "./EditModeFormField";
import { SaveEditModeBtn } from "../../UI/btns/edit-mode/SaveEditModeBtn";
import { EditModeRemoveBtn } from "../../UI/btns/remove-btn/removeBtnStyle";

const EditModeForm: FC<EditModeFormProps> = ({
  currentProfilePage,
  onSubmit,
  authForm,
  setProfileEditMode,
  loading,
}) => {
  const {
    formState: { errors: editModeContactsError },
  }: any = useFormContext();

  return (
    <EditModeFormStyle>
      <div className="edit__mode">
        <EditModeRemoveBtn>
          <svg
            width={25}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setProfileEditMode(false)}
          >
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
              fill="#ffffff"
            />
          </svg>
        </EditModeRemoveBtn>
        <h1 className="edit__mode-title">Change the section about yourself</h1>

        <form
          className="edit__mode-form"
          onSubmit={authForm.handleSubmit(onSubmit)}
        >
          <EditModeFormField
            className="edit__mode-form-field"
            label="Full name"
            name="fullName"
            type="text"
          />

          <EditModeFormField
            className="edit__mode-form-field"
            label="About me"
            name="aboutMe"
            type="text"
          />

          <EditModeFormField
            className="edit__mode-form-field"
            label="Skills"
            name="lookingForAJobDescription"
            type="text"
          />

          <EditModeFormField
            className="edit__mode-form-field"
            label="Looking for a job"
            name="lookingForAJob"
            type="checkbox"
          />

          <h2 className="edit__mode-form-title">Contacts</h2>

          {currentProfilePage?.contacts &&
            Object.keys(currentProfilePage?.contacts)?.map((key) => (
              <div key={key}>
                <EditModeFormField
                  className="edit__mode-form-field"
                  label={key}
                  name={`contacts.${key}`}
                  type="text"
                />

                {editModeContactsError?.contacts &&
                  editModeContactsError?.contacts[key] && (
                    <p className="error">
                      {editModeContactsError?.contacts[key]?.message}
                    </p>
                  )}
              </div>
            ))}

          <SaveEditModeBtn loading={loading}>Save</SaveEditModeBtn>
        </form>
      </div>
    </EditModeFormStyle>
  );
};

export default EditModeForm;
