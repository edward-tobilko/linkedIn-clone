import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import GlobalStyle from "./rootStyles";

import customStore from "./custom-redux/customStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const rerenderTree = (state: any) => {
  root.render(
    <Router>
      <GlobalStyle />
      <App state={state} dispatch={customStore.dispatch.bind(customStore)} />
    </Router>,
  );
};

rerenderTree(customStore.getState());
customStore.subscribe(rerenderTree);
