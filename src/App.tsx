import { FC } from "react";
// import axios from "axios";
// import { connect } from "react-redux";

import { ContainerStyle, ContentStyle, HeaderStyle } from "./rootStyles";

import { ContextProvider } from "./context/Context";

import { Header } from "./components/header/Header";
import AppRoutes from "./AppRoutes";
// import Auth from "./pages/auth/Auth";

// import { setIsAuthAC } from "./redux/reducers/authReducer";

// // Container component
// const mapStateToProps = (state: any) => {
//   return {
//     isAuth: state.authorization.isAuth,
//   };
// };

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
// export default connect(mapStateToProps, { setIsAuthAC })(AppContainer);

// // Pure component
// export const App = () => {
//   return (
//     <>
//       <AppContainer />
//     </>
//   );
// };
