import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { ContainerStyle, ContentStyle, HeaderStyle } from "./rootStyles";
import GlobalStyle from "./rootStyles";

import { ContextProvider } from "./context/Context";

import { Header } from "./components/header/Header";
import AppRoutes from "./AppRoutes";

import store from "./redux/store";

const App: FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <GlobalStyle />

        <ContextProvider>
          <HeaderStyle>
            <ContainerStyle>
              <Header />
            </ContainerStyle>
          </HeaderStyle>

          <ContainerStyle>
            <ContentStyle>
              <AppRoutes />
            </ContentStyle>
          </ContainerStyle>
        </ContextProvider>
      </Provider>
    </Router>
  );
};

export default App;
