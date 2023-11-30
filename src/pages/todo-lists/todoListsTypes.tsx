type TasksType = {
  id: string;
  name: string;
  isDone: boolean;
};

type TasksObjectType = {
  [key: string]: Array<TasksType>;
};

type ToDoListsType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};

type ToDoListType = {};

type AddTodoItemFormType = {};

type EditInputTaskNameType = {};

type ToDoItemType = {};

export {
  TasksType,
  ToDoListType,
  ToDoListsType,
  AddTodoItemFormType,
  TasksObjectType,
  EditInputTaskNameType,
  ToDoItemType,
};
