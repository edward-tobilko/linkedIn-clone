import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AddTodoItemForm from "../AddTodoItemForm";

describe("AddTodoItemForm component", () => {
  it("add a new todo when the button is clicked", () => {
    const addTodoLayoutMock = jest.fn();

    render(<AddTodoItemForm addTodoLayout={addTodoLayoutMock} />);

    //? Type a todo in the input
    fireEvent.change(screen.getByLabelText("Type your todo"), {
      target: { value: "Test Todo" },
    });

    //? Click the add todo button
    fireEvent.click(screen.getByTestId("custom-button"));

    //? Check if addTodoLayoutMock was called with the correct todo
    expect(addTodoLayoutMock).toHaveBeenCalledWith("Test Todo");
  });

  it("doesn't add a new todo when the input is empty", () => {
    const addTodoLayoutMock = jest.fn();

    render(<AddTodoItemForm addTodoLayout={addTodoLayoutMock} />);

    //? Click the add todo button without typing anything
    fireEvent.click(screen.getByTestId("custom-button"));

    //? Check if addTodoLayoutMock was not called
    expect(addTodoLayoutMock).not.toHaveBeenCalled();

    //? Check if the error message is displayed
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("adds a new todo when pressing Ctrl + Enter", () => {
    const addTodoLayoutMock = jest.fn();

    render(<AddTodoItemForm addTodoLayout={addTodoLayoutMock} />);

    //? Type a todo in the input
    fireEvent.change(screen.getByLabelText("Type your todo"), {
      target: { value: "Test Todo" },
    });

    //? Press Ctrl + Enter
    fireEvent.keyUp(screen.getByLabelText("Type your todo"), {
      key: "Enter",
      ctrlKey: true,
    });

    //? Check if addTodoLayoutMock was called with the correct todo
    expect(addTodoLayoutMock).toHaveBeenCalledWith("Test Todo");
  });
});
