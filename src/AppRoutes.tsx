import { FC, useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import Messages from "./pages/messages/Messages";
import Setting from "./pages/setting/Setting";
import Auth from "./pages/auth/AuthContainer";
import Social from "./pages/social/Social";

import { NotFound } from "./components/notifications/not-found/NotFound";
import { SocialContentLoader } from "./components/UI/loaders/social-content-loader/SocialContentLoader";

import { setInitializedSuccessRootAppTC } from "./redux/reducers/root-app-reducer/rootAppReducer";
import { RootState } from "./redux/store";

import { useTypeDispatch } from "./hooks/useTypeSelector";
import { initializedSelector } from "./utils/selectors/rootSelectors";

// Lazy loading of components
const Profile = lazy(() => import("./pages/profile/Profile"));

const mapStateToProps = (state: RootState) => {
  return {
    initialized: initializedSelector(state),
  };
};

const AppRoutesContainer = compose(
  connect(mapStateToProps, {
    setInitializedSuccessRootAppTC,
  }),
);

const AppRoutes: FC = (initialized) => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(setInitializedSuccessRootAppTC());
  }, [dispatch]);

  if (!initialized) {
    return <SocialContentLoader />;
  }

  return (
    <Suspense fallback={<SocialContentLoader />}>
      <Routes>
        {/* <Route path="/profile/*" element={<Profile />} /> - такий шлях вказуємо, якщо в <Profile /> буде ще якийсь вложений шлях, наприклад: <Routes> <Route path='account' element={<Account />} /> </Routes> */}

        {/* "?" - в кінці заданого параметра означає, що даний параметр є необов'язковим (може бути і не бути)*/}
        <Route path="profile">
          <Route path=":userId" element={<Profile />} />
          <Route index element={<Profile />} />
        </Route>
        <Route path="social" element={<Social />} />
        <Route path="messages">
          <Route path=":id?" element={<Messages />} />
        </Route>
        <Route path="setting" element={<Setting />} />
        <Route path="login" element={<Auth />} />
        <Route path="not-found" element={<NotFound />} />

        {/* Redirect */}
        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutesContainer(AppRoutes);
