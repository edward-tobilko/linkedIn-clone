import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { CaptchaProps } from "./authFormTypes";

import { CaptchaStyle } from "./authFormStyle";

const Captcha: FC<CaptchaProps> = ({ captchaUrl }) => {
  const {
    register,
    formState: { errors: captchaError },
  } = useFormContext();

  return (
    <>
      {captchaUrl && (
        <CaptchaStyle>
          <input
            className="captcha__field"
            type="input"
            {...register("captcha")}
          />

          {captchaError && <img src={captchaUrl} alt="" />}
        </CaptchaStyle>
      )}
    </>
  );
};

export default Captcha;
