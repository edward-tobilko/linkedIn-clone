import { FC } from "react";

import { ContainerStyle, ContentStyle, HeaderStyle } from "./rootStyles";

import { Header } from "./components/header/Header";

import AppRoutes from "./AppRoutes";
import { Sidebar } from "./components/sidebar/Sidebar";

const App: FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
