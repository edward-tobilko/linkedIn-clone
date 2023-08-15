import { FC, MouseEvent } from "react";
import { connect, useDispatch } from "react-redux";

import { AuthStyle } from "./authStyle";

import { AuthForm } from "../../components/forms/auth-form/AuthForm";

// import { setLoginTC } from "../../redux/reducers/authReducer";

// const mapStateToProps = (state: any) => ({
//   email: state.authorization.email,
//   password: state.authorization.password,
//   rememberMe: state.authorization.rememberMe,
//   captcha: state.authorization.captcha,
// });

// const AuthContainer = connect(null, {
//   // CT для логірування користувача
//   setLoginTC,
// });

const Auth: FC<any> = () => {
  // const dispatch: any = useDispatch();

  const logIn = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(setLoginTC(email, password, rememberMe, captcha));

    // localStorage.setItem("isAuth", "true");
  };

  return (
    <AuthStyle>
      <AuthForm logIn={logIn} />
    </AuthStyle>
  );
};

export default Auth;
