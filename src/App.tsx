import { FC } from "react";

import { ContainerStyle, ContentStyle } from "./rootStyles";
import GlobalStyle from "./rootStyles";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button } from "@mui/material";

import { ContextProvider } from "./context/Context";

import { Header } from "./components/header/Header";
import AppRoutes from "./AppRoutes";
import { useDarkMode, useShowSidebar } from "./hooks/useDarkMode";

const App: FC = () => {
  const { darkModeTheme, toggleDarkMode } = useDarkMode();
  const { showSidebar } = useShowSidebar();

  return (
    <>
      <GlobalStyle />

      <ContextProvider>
        <Header />

        <ContainerStyle className={showSidebar ? "darken__background" : ""}>
          <Button
            onClick={toggleDarkMode}
            endIcon={<LightModeIcon />}
            sx={{
              padding: "10px 0",
              minWidth: 0,
              color: "yellow",
              "& .MuiButton-endIcon": {
                marginLeft: 0,
                marginRight: 0,
              },
              "& .MuiButton-endIcon>*:nth-of-type(1)": {
                fontSize: "25px",
              },
            }}
          />

          <ContentStyle className={darkModeTheme ? "dark" : "light"}>
            <AppRoutes />
          </ContentStyle>
        </ContainerStyle>
      </ContextProvider>
    </>
  );
};

export default App;
