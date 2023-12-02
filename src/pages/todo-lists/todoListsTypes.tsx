import { ResultCodesEnum } from "../../api/apiTypes";

type AddRemoveTodoListsApiType = {
  data: {
    item: ToDoListsType;
  };
  resultCode: ResultCodesEnum;
  messages: string[];
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
};

type AddTodoItemFormType = {
  addTodoList?: (value: string) => void;
};

type EditInputTaskNameType = {
  title: string;
};

type ToDoItemType = {
  title: string;
};

export {
  AddRemoveTodoListsApiType,
  ToDoListType,
  ToDoListsType,
  AddTodoItemFormType,
  EditInputTaskNameType,
  ToDoItemType,
};
