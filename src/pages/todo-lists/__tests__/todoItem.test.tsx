import { render, fireEvent, screen } from "@testing-library/react";

import { ToDoItemType } from "../todoListsTypes";

import ToDoItem from "../ToDoItem";

const mockToDoItem: ToDoItemType = {
  task: { id: "1", name: "Task 1", isDone: false },
  todoListId: "123",
  handleChangeStatus: jest.fn(),
  changeEditTaskName: jest.fn(),
  removeTodo: jest.fn(),
};

describe("ToDoItem component", () => {
  it("call handleChangeStatus when task status changes", () => {
    render(<ToDoItem {...mockToDoItem} />);

    //? Find the checkbox by role
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockToDoItem.handleChangeStatus).toHaveBeenCalledWith(
      "1",
      true,
      "123",
    );
  });

  it("call removeTodo when 'Delete' button is clicked", () => {
    render(<ToDoItem {...mockToDoItem} />);

    //? Find the button by role
    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(mockToDoItem.removeTodo).toHaveBeenCalledWith("1", "123");
  });
});
