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
  removeTodoList: (todolistId: string) => void;
  updateTodoListTitle: (todolistId: string, newTitle: string) => void;
};

type AddTodoItemFormType = {
  addTodoList?: (value: string) => void;
};

type EditInputTaskNameType = {
  title: string;
  updateTodoListTitleHandler?: (newTitle: string) => void;
};

type ToDoItemType = {
  title: string;
};

export {
  AddRemoveTodoListsApiType,
  ReorderTodoListType,
  ToDoListType,
  ToDoListsType,
  AddTodoItemFormType,
  EditInputTaskNameType,
  ToDoItemType,
};
