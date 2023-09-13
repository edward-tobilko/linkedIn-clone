import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { CaptchaProps } from "./authFormTypes";

import { CaptchaStyle } from "./authFormStyle";

const Captcha: FC<CaptchaProps> = ({ captchaUrl }) => {
  const {
    register,
    formState: { errors: captchaError },
  }: any = useFormContext();

  return (
    <CaptchaStyle>
      {captchaUrl && (
        <>
          {captchaError.captchaUrl?.type === "required" && (
            <p className="error"> {captchaError.captchaUrl.message} </p>
          )}

          <input
            className="captcha__field"
            type="input"
            {...register("captchaUrl", { required: "Captcha is required!" })}
          />

          {captchaError && <img src={captchaUrl} alt="" />}
        </>
      )}
    </CaptchaStyle>
  );
};

export default Captcha;
