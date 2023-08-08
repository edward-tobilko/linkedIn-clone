import { FC } from "react";

import { ContainerStyle, ContentStyle, HeaderStyle } from "./rootStyles";

import { ContextProvider } from "./context/Context";

import { Header } from "./components/header/Header";
import AppRoutes from "./AppRoutes";

const App: FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
