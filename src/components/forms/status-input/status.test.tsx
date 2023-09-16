import { render, fireEvent, screen } from "@testing-library/react";

import Status from "./StatusContainer";

// Mock the required dependencies
jest.mock("../../../hooks/useTypeSelector", () => ({
  useTypeDispatch: jest.fn(() => jest.fn()),
}));

const props = {
  status: "Sample Status",
  updateUserStatusTC: jest.fn(),
  currentProfilePage: { userId: 29793 },
};

describe("Status Component", () => {
  it("renders initial status correctly", () => {
    render(<Status {...props} />);

    expect(screen.getByAltText("Test status")).toBeInTheDocument();
  });

  it("allows editing status when double-clicked", () => {
    render(<Status {...props} />);

    fireEvent.doubleClick(screen.getByText("Test status"));

    const input = screen.getByPlaceholderText("Add new status...");
    expect(input).toBeInTheDocument();
  });

  it("updates status when input is changed and blurred", () => {
    const updateUserStatusTC = jest.fn();

    render(<Status {...props} />);

    fireEvent.doubleClick(screen.getByText("Test status"));

    const input = screen.getByPlaceholderText("Add new status...");
    fireEvent.change(input, { target: { value: "New test status" } });
    fireEvent.blur(input);

    expect(updateUserStatusTC).toHaveBeenCalledWith("New test status");
  });
});
