type TasksType = {
  id: string;
  name: string;
  isDone: boolean;
};

type TasksObjectType = {
  [key: string]: Array<TasksType>;
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
  changeEditTaskName: (
    taskId: string,
    newValue: string,
    todoListId: string,
  ) => void;
  changeEditTodoTitle: (taskId: string, newTitle: string) => void;
};

type AddTodoItemFormType = {
  addTodoLayout: (name: string) => void;
};

type EditInputTaskNameType = {
  name: string;
  handleEdit: (newValue: string) => void;
};

type ToDoItemType = {
  task: TasksType;
  handleChangeStatus: (
    taskId: string,
    isDone: boolean,
    todoListId: string,
  ) => void;
  changeEditTaskName: (
    taskId: string,
    newValue: string,
    todoListId: string,
  ) => void;
  todoListId: string;
  removeTodo: (id: string, todoListId: string) => void;
};

export {
  TasksType,
  FilteredTasksType,
  ToDoListType,
  ToDoListsType,
  AddTodoItemFormType,
  TasksObjectType,
  EditInputTaskNameType,
  ToDoItemType,
};
