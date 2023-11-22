import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ToDoListType } from "../todoListsTypes";

import ToDoList from "../ToDoList";

const mockToDoList: ToDoListType = {
  filteredTasks: [
    { id: "1", name: "Task 1", isDone: false },
    { id: "2", name: "Task 2", isDone: true },
  ],
  filterTasks: "all",
  title: "Test ToDo List",
  todoListId: "123",
  addTodo: jest.fn(),
  removeTodo: jest.fn(),
  handleChangeStatus: jest.fn(),
  changeFilterTasks: jest.fn(),
  removeTodoList: jest.fn(),
  changeEditTaskName: jest.fn(),
  changeEditTodoTitle: jest.fn(),
};

describe("ToDoList component", () => {
  it("renders the ToDoList component with tasks and buttons", () => {
    render(<ToDoList {...mockToDoList} />);

    //? Check if the title is rendered
    expect(screen.getByText("Test ToDo List")).toBeInTheDocument();

    //? Check if tasks are rendered
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    //? Check if buttons are rendered
    expect(
      screen.getByRole("button", { name: "Remove todo list" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Checked" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Empty" })).toBeInTheDocument();
  });

  it("call removeTodoList function when 'Remove todo list' button is clicked", () => {
    render(<ToDoList {...mockToDoList} />);

    fireEvent.click(screen.getByRole("button", { name: "Remove todo list" }));

    expect(mockToDoList.removeTodoList).toHaveBeenCalledWith("123");
  });

  it("call changeFilterTasks function when a filter button is clicked", () => {
    render(<ToDoList {...mockToDoList} />);

    fireEvent.click(screen.getByRole("button", { name: "Checked" }));

    expect(mockToDoList.changeFilterTasks).toHaveBeenCalledWith(
      "checked",
      "123",
    );
  });
});
