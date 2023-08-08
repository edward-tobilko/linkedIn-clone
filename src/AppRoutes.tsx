import { FC, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import Profile from "./pages/profile/Profile";
import Social from "./pages/social/Social";
import Messages from "./pages/messages/Messages";
import Setting from "./pages/setting/Setting";
import Auth from "./pages/auth/Auth";

import { setIsAuthTC } from "./redux/reducers/authReducer";

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.authorization.isAuth,
  };
};

const AppRoutesContainer = connect(mapStateToProps, {
  // Санка (thunk creator) для авторизації
  setIsAuthTC,
});

const AppRoutes: FC<any> = ({ isAuth }) => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      dispatch(setIsAuthTC());
    }
  }, [dispatch]);

  return (
    <>
      {isAuth ? (
        <Routes>
          {/* <Route path="/profile/*" element={<Profile />} /> */}

          {/* "?" - в кінці заданого параметра означає, що даний параметр є необов'язковим (може бути і не бути)*/}
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
