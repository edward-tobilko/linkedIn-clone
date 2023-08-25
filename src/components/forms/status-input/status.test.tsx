import { render, fireEvent } from "@testing-library/react";

import Status from "./Status";

describe("Status Component", () => {
  it("renders initial status correctly", () => {
    const props = {
      status: "Test status",
      updateUserStatusTC: jest.fn(),
      currentProfilePage: { userId: 29793 },
    };

    const { getByText } = render(<Status {...props} />);

    expect(getByText("Test status")).toBeInTheDocument();
  });

  it("allows editing status when double-clicked", () => {
    const props = {
      status: "Test status",
      updateUserStatusTC: jest.fn(),
      currentProfilePage: { userId: 29793 },
    };

    const { getByText, getByPlaceholderText } = render(<Status {...props} />);

    fireEvent.doubleClick(getByText("Test status"));

    const input = getByPlaceholderText("Add new status...");
    expect(input).toBeInTheDocument();
  });

  it("updates status when input is changed and blurred", () => {
    const updateUserStatusTC = jest.fn();
    const props = {
      status: "Test status",
      updateUserStatusTC,
      currentProfilePage: { userId: 29793 },
    };

    const { getByText, getByPlaceholderText } = render(<Status {...props} />);

    fireEvent.doubleClick(getByText("Test status"));

    const input = getByPlaceholderText("Add new status...");
    fireEvent.change(input, { target: { value: "New test status" } });
    fireEvent.blur(input);

    expect(updateUserStatusTC).toHaveBeenCalledWith("New test status");
  });

  // Add more tests for different scenarios and interactions
});
