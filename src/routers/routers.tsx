import { Navigate } from "react-router-dom";

import LogIn from "../pages/logIn/LogIn";

export const routers = [{ path: "*", element: <Navigate to="/" replace /> }];

export const _routers = [
  { path: "/login", element: <LogIn /> },

  { path: "*", element: <Navigate to="/login" replace /> },
];
