import { FC } from "react";

import { AppStyle, ContainerStyle } from "./rootStyles";

import { Header } from "./components/header/Header";

import AppRoutes from "./AppRoutes";

const App: FC = () => {
  return (
    <>
      <AppStyle>
        <div style={{ background: "var(--headerBackgroundColor" }}>
          <ContainerStyle>
            <Header />
          </ContainerStyle>
        </div>

        <ContainerStyle>
          <AppRoutes />
        </ContainerStyle>
      </AppStyle>
    </>
  );
};

export default App;
