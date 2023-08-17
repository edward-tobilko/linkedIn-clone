import { FC, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Profile from "./pages/profile/Profile";
import Social from "./pages/social/Social";
import Messages from "./pages/messages/Messages";
import Setting from "./pages/setting/Setting";
import Auth from "./pages/auth/Auth";

import { NotFound } from "./components/notifications/not-found/NotFound";

import { setIsAuthTC } from "./redux/reducers/authReducer";
import { useTypeDispatch } from "./hooks/useTypeSelector";

const AppRoutesContainer = connect(null, {
  // Санка (thunk creator) для авторизації
  setIsAuthTC,
});

const AppRoutes: FC = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      dispatch(setIsAuthTC());
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/* <Route path="/profile/*" element={<Profile />} /> - такий шлях вказуємо, якщо в <Profile /> буде ще якийсь вложений шлях, наприклад: <Routes> <Route path='account' element={<Account />} /> </Routes> */}

        {/* "?" - в кінці заданого параметра означає, що даний параметр є необов'язковим (може бути і не бути)*/}
        <Route path="profile">
          <Route path=":userId" element={<Profile />} />
          <Route index={true} element={<Profile />} />
        </Route>
        <Route path="social" element={<Social />} />
        <Route path="messages">
          <Route path=":id?" element={<Messages />} />
        </Route>
        <Route path="setting" element={<Setting />} />
        <Route path="auth/login" element={<Auth />} />
        <Route path="not-found" element={<NotFound />} />

        {/* Redirect */}
        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutesContainer(AppRoutes);
