import { ResultCodesEnum } from "../../api/apiTypes";

type AddRemoveTodoListsApiType = {
  data: {
    item: ToDoListsType;
  };
  resultCode: ResultCodesEnum;
  messages: string[];
};

type ReorderTodoListType = {
  resultCode: ResultCodesEnum;
  messages: string[];
  data: any;
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
  removeTodoList: (todolistId: string) => void;
  updateTodoListTitle: (todolistId: string, newTitle: string) => void;
  getTodoTasks: (todolistId: string) => void;
  addTodoTaskAsync: (todolistId: string, value: string) => void;
};

type AddTodoItemFormType = {
  addTodoLayout: (value: string) => void;
};

type EditInputTaskNameType = {
  title?: string;
  updateTodoListTitleHandler?: (newTitle: string) => void;
};

type ToDoItemType = {
  filteredTask: any;
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

type AddRemoveTodoTaskApiType = {
  data: {
    item: TodoTaskType;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

type TasksObjectType = {
  [key: string]: TodoTaskType[];
};

export {
  AddRemoveTodoListsApiType,
  AddRemoveTodoTaskApiType,
  ReorderTodoListType,
  ToDoListType,
  ToDoListsType,
  AddTodoItemFormType,
  EditInputTaskNameType,
  ToDoItemType,
  TodoTasksType,
  TodoTaskType,
  TasksObjectType,
};
