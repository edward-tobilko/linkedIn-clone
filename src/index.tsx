import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import GlobalStyle from "./rootStyles";

import store from "./custom-redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const rerenderTree = (state: any) => {
  root.render(
    <Router>
      <GlobalStyle />
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </Router>,
  );
};

rerenderTree(store.getState());
store.subscribe(rerenderTree);
