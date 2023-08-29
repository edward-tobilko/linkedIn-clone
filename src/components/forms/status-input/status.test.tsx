import { render, fireEvent, screen } from "@testing-library/react";

import Status from "./Status";

describe("Status Component", () => {
  it("renders initial status correctly", () => {
    const props = {
      status: "Test status",
      updateUserStatusTC: jest.fn(),
      currentProfilePage: { userId: 29793 },
    };

    render(<Status {...props} />);

    expect(screen.getByText("Test status")).toBeInTheDocument();
  });

  it("allows editing status when double-clicked", () => {
    const props = {
      status: "Test status",
      updateUserStatusTC: jest.fn(),
      currentProfilePage: { userId: 29793 },
    };

    render(<Status {...props} />);

    fireEvent.doubleClick(screen.getByText("Test status"));

    const input = screen.getByPlaceholderText("Add new status...");
    expect(input).toBeInTheDocument();
  });

  it("updates status when input is changed and blurred", () => {
    const updateUserStatusTC = jest.fn();
    const props = {
      status: "Test status",
      updateUserStatusTC,
      currentProfilePage: { userId: 29793 },
    };

    render(<Status {...props} />);

    fireEvent.doubleClick(screen.getByText("Test status"));

    const input = screen.getByPlaceholderText("Add new status...");
    fireEvent.change(input, { target: { value: "New test status" } });
    fireEvent.blur(input);

    expect(updateUserStatusTC).toHaveBeenCalledWith("New test status");
  });
});
