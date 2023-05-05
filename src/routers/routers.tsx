import { Navigate } from "react-router-dom";

export const routers = [{ path: "*", element: <Navigate to="/" replace /> }];

export const _routers = [
  { path: "*", element: <Navigate to="/login" replace /> },
];
