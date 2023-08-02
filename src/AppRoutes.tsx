import { FC, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useMyContext } from "./context/Context";

import Profile from "./pages/profile/Profile";
import Social from "./pages/social/Social";
import Messages from "./pages/messages/Messages";
import Setting from "./pages/setting/Setting";
import Auth from "./pages/auth/Auth";

const AppRoutes: FC = () => {
  const props = useMyContext();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      props?.setIsAuth(true);
    }
  }, []);

  return (
    <>
      {props?.isAuth ? (
        <Routes>
          {/* <Route path="/profile/*" element={<Profile />} /> */}

          {/* "?" - вкінці заданого параметра означає, що даний параметр є необов'язковим (може бути і не бути)*/}
          <Route path="/profile/:userId?" element={<Profile />} />
          <Route path="/social" element={<Social />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:name/:id" element={<Messages />} />
          <Route path="/setting" element={<Setting />} />
          {/* <Route path="/auth" element={<Auth />} /> */}

          {/* Redirect */}
          <Route path="*" element={<Navigate to="/profile" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/auth" element={<Auth />} />

          {/* Redirect */}
          <Route path="*" element={<Navigate to="/auth" replace={true} />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
