import { ResultCodesEnum } from "../../api/apiTypes";

type FilteredTasksType = "all" | "checked" | "empty";

type AddRemoveTodoListsApiType = {
  data: {
    item: ToDoListsType;
  };
  resultCode: ResultCodesEnum;
  messages: string[];
};

type AddRemoveTodoTaskApiType = {
  data: {};
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

type ReorderTodoListApiType = {
  resultCode: ResultCodesEnum;
  messages: string[];
  data: Object;
};

type ToDoListsType = {
  id: string;
  title: string;
  addedDate: Date;
  order: number;
};

type ToDoListType = {
  title: string;
  todolistId: string;
  filteredTasks: Array<TodoTaskType>;
  filterTasks: string;
  removeTodoList: (todolistId: string) => void;
  removeTodoTask: (todolistId: string, taskId: string) => void;
  updateTodoListTitle: (todolistId: string, newTitle: string) => void;
  updateTodoTaskTitle: (
    todolistId: string,
    taskId: string,
    newTitle: string,
    completed?: boolean,
  ) => void;
  getTodoTasks: (todolistId: string) => void;
  addTodoTaskAsync: (todolistId: string, value: string) => void;
  changeFilterTasks: (
    todolistId: string,
    filterTasks: FilteredTasksType,
  ) => void;
};

type AddTodoItemFormType = {
  addTodoLayout: (value: string) => void;
};

type EditInputTaskNameType = {
  title: string;
  updateTodoTitleHandler: (newTitle: string) => void;
};

type ToDoItemType = {
  todolistId: string;
  filteredTask: TodoTaskType;
  updateTodoTaskTitle: (
    todolistId: string,
    taskId: string,
    newTitle: string,
    completed?: boolean,
  ) => void;
  removeTodoTask: (todolistId: string, taskId: string) => void;
};

type TodoTaskType = {
  description: string;
  title: string;
  completed: boolean;
  status: number;
  priority: number;
  startDate: Date;
  deadline: Date;
  id: string;
  todoListId?: string;
  order: number;
  addedDate: Date;
};

type TodoTasksType = {
  items: Array<TodoTaskType>;
  totalCount: number;
  error: string;
};

type TasksObjectType = {
  [key: string]: TodoTaskType[];
};

export {
  FilteredTasksType,
  AddRemoveTodoListsApiType,
  AddRemoveTodoTaskApiType,
  ReorderTodoListApiType,
  ToDoListType,
  ToDoListsType,
  AddTodoItemFormType,
  EditInputTaskNameType,
  ToDoItemType,
  TodoTasksType,
  TodoTaskType,
  TasksObjectType,
};
