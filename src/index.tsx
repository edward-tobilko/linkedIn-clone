import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import GlobalStyle from "./rootStyles";

import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

// Для прикладу рендера компоненти SocialContent
setInterval(() => {
  store.dispatch({ type: "FAKE" });
}, 1000);

root.render(
  <Router>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </Router>,
);
