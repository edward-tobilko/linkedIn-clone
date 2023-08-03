import { FC, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Profile from "./pages/profile/Profile";
import Social from "./pages/social/Social";
import Messages from "./pages/messages/Messages";
import Setting from "./pages/setting/Setting";
import Auth from "./pages/auth/Auth";

import { setIsAuthAC } from "./redux/reducers/authReducer";

import { authAPI } from "./api/API";

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.authorization.isAuth,
  };
};

const AppRoutesContainer = connect(mapStateToProps, { setIsAuthAC });

const AppRoutes: FC<any> = ({ isAuth, setIsAuthAC }) => {
  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      authAPI.authorizationMe().then((data) => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;

          setIsAuthAC(id, email, login);
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
