import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

//? Provider додає store в context API, а context API дозволяє дочірним елементам отримувати дані з store.
