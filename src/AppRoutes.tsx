// import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import { routers } from "./routers/routers";
// import { _routers } from "./routers/routers";
import Profile from "./pages/profile/Profile";
import Social from "./pages/social/Social";
import LogIn from "./pages/logIn/LogIn";

const AppRoutes = () => {
  // const [isAuth, setIsAuth] = useState(false);

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
        <Route path="/" element={<Profile />} />
        <Route path="/social" element={<Social />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
