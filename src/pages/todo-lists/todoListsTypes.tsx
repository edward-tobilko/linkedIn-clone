type TasksType = {
  id: string;
  name: string;
  // addedDate: string;
  // order: number;
  isDone: boolean;
};

type FilteredTasksType = "all" | "checked" | "empty";

type ToDoListsType = {
  id: string;
  title: string;
  filterTasks: FilteredTasksType;
};

type ToDoListType = {
  title: string;
  filteredTasks: Array<TasksType>;
  filterTasks: FilteredTasksType;
  todoListId: string;
  addTodo: (name: string, todoListId: string) => void;
  removeTodo: (id: string, todoListId: string) => void;
  handleChangeStatus: (
    taskId: string,
    isDone: boolean,
    todoListId: string,
  ) => void;
  changeFilterTasks: (
    filterTasks: FilteredTasksType,
    todoListId: string,
  ) => void;
  removeTodoList: (todoListId: string) => void;
};

export { TasksType, FilteredTasksType, ToDoListType, ToDoListsType };
