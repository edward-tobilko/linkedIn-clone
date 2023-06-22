import { FC } from "react";

import { ContainerStyle, ContentStyle, HeaderStyle } from "./rootStyles";

import { ContextProvider } from "./context/Context";

import { Header } from "./components/header/Header";
import AppRoutes from "./AppRoutes";
import { Sidebar } from "./components/sidebar/Sidebar";

const App: FC<any> = ({ state, dispatch }) => {
  return (
    <ContextProvider>
      <HeaderStyle>
        <ContainerStyle>
          <Header />
        </ContainerStyle>
      </HeaderStyle>

      <ContainerStyle>
        <ContentStyle>
          <Sidebar />
          <AppRoutes state={state} dispatch={dispatch} />
        </ContentStyle>
      </ContainerStyle>
    </ContextProvider>
  );
};

export default App;
