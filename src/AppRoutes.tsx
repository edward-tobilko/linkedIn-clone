import { ComponentType, FC, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { ServerErrorStyle } from "./rootStyles";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import Chat from "./pages/chat/Chat";
import ToDoLists from "./pages/todo-lists/ToDoLists";
import Auth from "./pages/auth/AuthContainer";
import Social from "./pages/social/Social";
import Profile from "./pages/profile/Profile";
import UserProfile from "./pages/profile/UserProfile";
import GitHub from "./pages/git-hub/GitHub";
import FollowedUsersPage from "./pages/followed-users/FollowedUsersPage";

import { NotFound } from "./components/notifications/not-found/NotFound";
import { RootLoader } from "./components/UI/loaders/root-loader/RootLoader";

import { setInitializedSuccessRootAppTC } from "./redux/reducers/root-app-reducer/rootAppReducer";
import { RootState } from "./redux/store";

import { useTypeDispatch } from "./hooks/useTypeSelector";
import {
  initializedSelector,
  serverErrorSelector,
} from "./utils/selectors/rootSelectors";

type AppRoutesProps = {
  initialized: boolean;
  serverError: Object | null;
};

type MapDispatchToPropsType = {
  setInitializedSuccessRootAppTC: () => void;
};

type OwnPropsType = {};

const mapStateToProps = (state: RootState) => {
  return {
    initialized: initializedSelector(state),
    serverError: serverErrorSelector(state),
  };
};

const AppRoutesContainer = compose<ComponentType>(
  connect<AppRoutesProps, MapDispatchToPropsType, OwnPropsType, RootState>(
    mapStateToProps,
    {
      setInitializedSuccessRootAppTC,
    },
  ),
);

//? Theme provider for "Material UI" media endpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 768,
      lg: 1200,
      xl: 1440,
    },
  },
});

const AppRoutes: FC<AppRoutesProps> = ({ initialized, serverError }) => {
  const [isServerErrorVisible, setIsServerErrorVisible] = useState(false);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(setInitializedSuccessRootAppTC());
  }, [dispatch]);

  useEffect(() => {
    if (serverError) {
      setIsServerErrorVisible(true);

      let timer = setTimeout(() => {
        setIsServerErrorVisible(false);
      }, 7000);

      return () => clearTimeout(timer); //? Automatically close the error message after 7 seconds
    }
  }, [serverError]);

  if (!initialized) {
    return <RootLoader />;
  }

  return (
    <>
      {isServerErrorVisible && serverError && (
        <ServerErrorStyle>
          <div className="server__error">
            <div className="server__error-names">
              {Object.entries(serverError).map(
                ([serverErrorKey, serverErrorValue]) => {
                  return (
                    <div key={serverErrorKey}>
                      <p>
                        {serverErrorKey}: <span> {serverErrorValue} </span>
                      </p>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </ServerErrorStyle>
      )}

      <Routes>
        {/* <Route path="/profile/*" element={<Profile />} /> - такий шлях вказуємо, якщо в <Profile /> буде ще якийсь вложений шлях, наприклад: <Routes> <Route path='account' element={<Account />} /> </Routes> */}

        {/* "?" - в кінці заданого параметра означає, що даний параметр є необов'язковим (може бути і не бути)*/}
        <Route path="/">
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route index path="/" element={<Navigate to={"/profile"} />} />
        </Route>
        <Route path="user-profile/:userId" element={<UserProfile />} />
        <Route path="users" element={<Social />} />
        <Route path="followed-users" element={<FollowedUsersPage />} />
        <Route path="chat" element={<Chat />} />
        <Route
          path="todo-lists"
          element={
            <ThemeProvider theme={theme}>
              <ToDoLists />
            </ThemeProvider>
          }
        />
        <Route path="git-hub" element={<GitHub />} />
        <Route path="login" element={<Auth />} />
        <Route path="not-found" element={<NotFound />} />

        {/* Redirect - При введенні неправильного url path */}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </>
  );
};

export default AppRoutesContainer(AppRoutes);
