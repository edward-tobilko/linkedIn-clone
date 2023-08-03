import { FC, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import Profile from "./pages/profile/Profile";
import Social from "./pages/social/Social";
import Messages from "./pages/messages/Messages";
import Setting from "./pages/setting/Setting";
import Auth from "./pages/auth/Auth";
import { setIsAuthAC } from "./redux/reducers/authReducer";

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.authorization.isAuth,
    login: state.authorization.login,
  };
};

const AppRoutesContainer = connect(mapStateToProps, { setIsAuthAC });

const AppRoutes: FC<any> = ({ isAuth, setIsAuthAC }) => {
  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
          withCredentials: true,
          // headers: { "API-KEY": "4daa91e2-dd5b-4c3b-9a0c-45ab003503f1" },
        })
        .then((res) => {
          if (res.data.resultCode === 0) {
            let { id, email, login } = res.data.data;

            setIsAuthAC(id, email, login);
            console.log(setIsAuthAC(id, email, login));
          }
        });
    }
  }, []);

  return (
    <>
      {isAuth ? (
        <Routes>
          {/* <Route path="/profile/*" element={<Profile />} /> */}

          {/* "?" - вкінці заданого параметра означає, що даний параметр є необов'язковим (може бути і не бути)*/}
          <Route path="/profile/:userId?" element={<Profile />} />
          <Route path="/social" element={<Social />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:name/:id" element={<Messages />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/auth" element={<Auth />} />

          {/* Redirect */}
          <Route path="*" element={<Navigate to="/profile" replace={true} />} />
        </Routes>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default AppRoutesContainer(AppRoutes);
