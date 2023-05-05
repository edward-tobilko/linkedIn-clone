import { Navigate } from "react-router-dom";

import Profile from "../pages/profile/Profile";

export const routers = [
  { path: "/", element: <Profile /> },

  { path: "*", element: <Navigate to="/" replace /> },
];

export const _routers = [
  { path: "*", element: <Navigate to="/login" replace /> },
];
