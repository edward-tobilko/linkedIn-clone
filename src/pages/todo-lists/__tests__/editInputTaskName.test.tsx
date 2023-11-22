import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { EditInputTaskName } from "../EditInputTaskName";

describe("EditInputTaskName component", () => {
  it("renders the component in view mode", () => {
    render(<EditInputTaskName name="Sample Task" handleEdit={() => {}} />);

    //? Check if the component is initially rendered in view mode
    expect(screen.getByText("Sample Task")).toBeInTheDocument();
  });

  it("renders the component in edit mode and updates task name", async () => {
    const handleEditMock = jest.fn();

    render(
      <EditInputTaskName name="Sample Task" handleEdit={handleEditMock} />,
    );

    //? Activate edit mode by double-clicking on the task name
    fireEvent.doubleClick(screen.getByText("Sample Task"));

    //? Check if the input field is displayed
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    //? Update the task name in edit mode
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Updated Task" },
    });

    //? Blur the input field to activate view mode
    fireEvent.blur(screen.getByRole("textbox"));

    //? Check if the handleEdit function is called with the updated task name
    expect(handleEditMock).toHaveBeenCalledWith("Updated Task");
  });

  //! Here is the ERROR: "Unable to find an element by: [data-testid="error-message"]"
  it("displays an error when trying to save with an empty task name", async () => {
    const handleEditMock = jest.fn();

    render(
      <EditInputTaskName name="Sample Task" handleEdit={handleEditMock} />,
    );

    fireEvent.doubleClick(screen.getByText("Sample Task"));

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    //? Blur the input field to activate view mode without entering any value
    fireEvent.blur(screen.getByRole("textbox"));

    //? Use a more specific selector to target the error message
    fireEvent.click(screen.getByTestId("error-message"));

    //? Ensure that handleEdit is not called with an empty value
    expect(handleEditMock).not.toHaveBeenCalled();

    //? Check if the error message is displayed
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });
});
