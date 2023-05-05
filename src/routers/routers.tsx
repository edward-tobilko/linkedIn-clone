import { Navigate } from "react-router-dom";

import LogIn from "../pages/logIn/LogIn";
import Profile from "../pages/profile/Profile";
import Social from "../pages/social/Social";

export const routers = [
  { path: "/", element: <Profile /> },
  { path: "/social", element: <Social /> },

  { path: "*", element: <Navigate to="/" replace /> },
];

export const _routers = [
  { path: "/login", element: <LogIn /> },

  { path: "*", element: <Navigate to="/login" replace /> },
];
