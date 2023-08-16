import { FC } from "react";
import { useFormContext } from "react-hook-form";

type AuthFormFieldProps = {
  name: string;
  label: string;
  type: string;
  className: string;
};

const AuthFormField: FC<AuthFormFieldProps> = ({
  name,
  label,
  type,
  className,
}) => {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}> {label} </label>
      <input
        type={type}
        placeholder={`Enter ${name}`}
        className="container-field-input"
        {...register(name)}
      />

      <p className="error">{errors[name]?.message}</p>
    </div>
  );
};

export default AuthFormField;
