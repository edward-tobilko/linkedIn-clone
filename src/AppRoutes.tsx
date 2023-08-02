import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import { routers } from "./routers/routers";
// import { _routers } from "./routers/routers";
import Profile from "./pages/profile/Profile";
import Social from "./pages/social/Social";
import LogIn from "./pages/logIn/LogIn";
import Messages from "./pages/messages/Messages";
import Setting from "./pages/setting/Setting";

const AppRoutes: FC<any> = () => {
  return (
    <>
      {/* {isAuth ? (
        <Routes>
          {routers.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      ) : (
        <Routes>
          {_routers.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      )} */}

      <Routes>
        {/* <Route path="/profile/*" element={<Profile />} /> */}

        {/* "?" - вкінці заданого параметра означає, що даний параметр є необов'язковим (може бути і не бути)*/}
        <Route path="/profile/:userId?" element={<Profile />} />
        <Route path="/social" element={<Social />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:name/:id" element={<Messages />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/login" element={<LogIn />} />

        {/* Redirect */}
        <Route path="*" element={<Navigate to="/profile" replace={true} />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
