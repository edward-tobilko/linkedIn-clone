import { Navigate } from "react-router-dom";

import Profile from "../pages/profile/ProfileContent";
import Social from "../pages/social/Social";
import Messages from "../pages/messages/Messages";
import Setting from "../pages/setting/Setting";
import Auth from "../pages/auth/Auth";

export const routers = [
  // { path: "/profile/*", element: <Profile /> },

  // "?" - вкінці заданого параметра означає, що даний параметр є необов'язковим (може бути і не бути)
  { path: "/profile/:userId?", element: <Profile /> },
  { path: "/social", element: <Social /> },
  { path: "/messages", element: <Messages /> },
  { path: "/messages/:name/:id", element: <Messages /> },
  { path: "/setting", element: <Setting /> },
  { path: "/auth", element: <Auth /> },

  { path: "*", element: <Navigate to="/profile" replace={true} /> },
];

export const _routers = [
  { path: "/auth", element: <Auth /> },

  { path: "*", element: <Navigate to="/auth" replace={true} /> },
];
