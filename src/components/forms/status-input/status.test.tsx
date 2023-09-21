import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import StatusContainer from "./StatusContainer";

// Create a mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("StatusContainer Component", () => {
  const initialState = {
    serverError: "",
    status: "Sample Status",
    currentProfilePage: {
      userId: 29793,
    },
  };
  const store = mockStore(initialState);

  it("renders status correctly", () => {
    render(
      <Provider store={store}>
        <StatusContainer />
      </Provider>,
    );

    // Expect your status to be in the document
    expect(screen.getByText("Sample Status")).toBeInTheDocument();
  });

  it("allows editing status when double-clicked", () => {
    render(
      <Provider store={store}>
        <StatusContainer />
      </Provider>,
    );

    fireEvent.doubleClick(screen.getByText("Sample Status"));

    // Expect an input field to be in the document
    expect(
      screen.getByPlaceholderText("Add new status..."),
    ).toBeInTheDocument();
  });

  it("updates status when input is changed and blurred", () => {
    // Mock your updateUserStatusTC action
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <StatusContainer />
      </Provider>,
    );

    fireEvent.doubleClick(screen.getByText("Sample Status"));

    const input = screen.getByPlaceholderText("Add new status...");
    fireEvent.change(input, { target: { value: "New test status" } });
    fireEvent.blur(input);

    // Expect updateUserStatusTC to have been called with the new status
    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "UPDATE_USER_STATUS_TC", // Update with your actual action type
        payload: "New test status",
      }),
    );
  });
});
