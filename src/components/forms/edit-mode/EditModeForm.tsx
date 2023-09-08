import { FC } from "react";

import { EditModeFormStyle } from "./editModeFormStyle";

import EditModeFormField from "./EditModeFormField";
import { SaveEditModeBtn } from "../../UI/btns/edit-mode/SaveEditModeBtn";
import { EditModeRemoveBtn } from "../../UI/btns/remove-btn/removeBtnStyle";

const EditModeForm: FC<any> = ({
  currentProfilePage,
  onSubmit,
  authForm,
  setProfileEditMode,
}) => {
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
            name="lookingForAJobDescription"
            type="textarea"
          />

          <EditModeFormField
            className="edit__mode-form-field"
            label="Looking for a job"
            name="lookingForAJob"
            type="text"
          />

          <h2 className="edit__mode-form-title">Contacts</h2>

          <EditModeFormField
            className="edit__mode-form-field"
            label="GitHub"
            name="github"
            type="text"
          />
          <EditModeFormField
            className="edit__mode-form-field"
            label="VK"
            name="vk"
            type="text"
          />
          <EditModeFormField
            className="edit__mode-form-field"
            label="Facebook"
            name="facebook"
            type="text"
          />
          <EditModeFormField
            className="edit__mode-form-field"
            label="Instagram"
            name="instagram"
            type="text"
          />
          <EditModeFormField
            className="edit__mode-form-field"
            label="Twitter"
            name="twitter"
            type="text"
          />
          <EditModeFormField
            className="edit__mode-form-field"
            label="Website"
            name="website"
            type="text"
          />
          <EditModeFormField
            className="edit__mode-form-field"
            label="YouTube"
            name="youtube"
            type="text"
          />
          <EditModeFormField
            className="edit__mode-form-field"
            label="MainLink"
            name="mainLink"
            type="text"
          />

          <SaveEditModeBtn>Save</SaveEditModeBtn>
        </form>
      </div>
    </EditModeFormStyle>
  );
};

export default EditModeForm;
