import { FC } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";

import { AuthFormFieldProps } from "./authFormTypes";

const AuthFormField: FC<AuthFormFieldProps> = ({
  name,
  label,
  type,
  className,
}) => {
  const {
    register,
    formState: { errors },
  }: UseFormReturn = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}> {label} </label>
      <input
        type={type}
        placeholder={`Enter ${name}`}
        className="container-field-input"
        {...register(name)}
      />

      <p className="error">{errors[name]?.message?.toString()}</p>
    </div>
  );
};

export default AuthFormField;
