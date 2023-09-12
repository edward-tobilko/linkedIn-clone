import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { EditModeFormFieldProps } from "./editModeFormTypes";

const EditModeFormField: FC<EditModeFormFieldProps> = ({
  className,
  label,
  name,
  type,
}) => {
  const {
    register,
    formState: { errors: editModeError },
  }: any = useFormContext();

  const editModeErrorString = editModeError.contacts
    ? Object.keys(editModeError.contacts)
        .reduce((acc: any, key: any) => {
          const errorMessage = editModeError.contacts[key]?.message;

          if (errorMessage) {
            acc.push(`${key}: ${errorMessage}`);
          }

          return acc;
        }, [])
        .join("\n")
    : "";

  console.log(editModeErrorString);

  return (
    <div className={className}>
      <label htmlFor={name} className="edit__mode-form-field-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={`Enter ${label}`}
        {...register(name)}
      />

      {editModeError[name] && (
        <p className="error">{editModeError[name]?.message}</p>
      )}

      {editModeErrorString && <p className="error">{editModeErrorString}</p>}
    </div>
  );
};

export default EditModeFormField;
