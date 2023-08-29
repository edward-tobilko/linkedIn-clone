import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import AppRoutes from "./AppRoutes";

describe("AppRoutes Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </MemoryRouter>,
    );
  });
});
