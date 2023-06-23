import { FC } from "react";

import { ContainerStyle, ContentStyle, HeaderStyle } from "./rootStyles";

import { ContextProvider } from "./context/Context";

import { Header } from "./components/header/Header";
import AppRoutes from "./AppRoutes";
import { Sidebar } from "./components/sidebar/Sidebar";

const App: FC<any> = () => {
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
          <AppRoutes />
        </ContentStyle>
      </ContainerStyle>
    </ContextProvider>
  );
};

export default App;
