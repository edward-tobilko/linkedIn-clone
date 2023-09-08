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
    formState: { errors },
  }: any = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name} className="edit__mode-form-field-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={`Enter ${name}`}
        {...register(name)}
      />

      <p className="error">{errors[name]?.message}</p>
    </div>
  );
};

export default EditModeFormField;
