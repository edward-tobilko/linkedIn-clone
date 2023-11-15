import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { ToDoListsContainerStyle, ToDoListsStyle } from "./todoListsStyle";

import {
  FilteredTasksType,
  TasksObjectType,
  ToDoListsType,
} from "./todoListsTypes";

import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { useFetching } from "../../hooks/useFetching";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";
import ToDoList from "./ToDoList";
import AddTodoItemForm from "./AddTodoItemForm";

const ToDoLists: FC = () => {
  let todoListID1 = uuidv4();
  let todoListID2 = uuidv4();

  const [todoLists, setTodoLists] = useState<Array<ToDoListsType>>([
    { id: todoListID1, title: "What to learn", filterTasks: "all" },
    { id: todoListID2, title: "What to do", filterTasks: "all" },
  ]);
  const [tasksObject, setTasksObject] = useState<TasksObjectType>({
    [todoListID1]: [
      { id: uuidv4(), name: "HTML&CSS", isDone: true },
      { id: uuidv4(), name: "JS", isDone: true },
      { id: uuidv4(), name: "React&Redux", isDone: false },
      { id: uuidv4(), name: "Rest API", isDone: false },
      { id: uuidv4(), name: "GraphQL", isDone: true },
    ],
    [todoListID2]: [
      { id: uuidv4(), name: "Read tutorials", isDone: true },
      { id: uuidv4(), name: "A lot of practice", isDone: false },
      { id: uuidv4(), name: "Search for new information", isDone: false },
      { id: uuidv4(), name: "Never give up", isDone: true },
    ],
  });

  let { userId } = useParams() as any;
  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  const addTodo = (name: string, todoListId: string) => {
    const newTodo = {
      id: uuidv4(),
      name: name,
      isDone: false,
    };
    let tasks = tasksObject[todoListId];

    const newTasks = [...tasks, newTodo];
    tasksObject[todoListId] = newTasks;

    setTasksObject({ ...tasksObject });
  };

  const removeTodo = (id: string, todoListId: string) => {
    let tasks = tasksObject[todoListId];

    const filteredTasks = tasks.filter(
      (filteredTask) => filteredTask.id !== id,
    );
    tasksObject[todoListId] = filteredTasks;

    setTasksObject({ ...tasksObject });
  };

  const handleChangeStatus = (
    taskId: string,
    isDone: boolean,
    todoListId: string,
  ) => {
    //? Отримуємо потрібний нам масив по ключу, в якому ми будемо щось змінювати
    let tasks = tasksObject[todoListId];

    //? Отримуємо поточний об'єкт, який нам потрібен
    let task = tasks.find((checkedTask) => checkedTask.id === taskId);

    //? Перевіряємо на "псевдоістину чи псевдобрехню" та міняємо значення на протилежне собі.
    if (task) {
      task.isDone = isDone;

      //? React реагує тільки на змінені дані в массиві, тому нам потрібно завжди робити копію массива та вертати її.
      // setTasksObject(tasksObject); //! Don't do that.

      //? Сетаємо нові змінення в об'єкта tasksObject, щоб дані відобразилися потрібно зробити копію об'єкта, щоб React відреагував та відобразив новий масив з об'єктами.
      setTasksObject({ ...tasksObject }); //? Деструктуризація
    }
  };

  const changeFilterTasks = (
    filterTasks: FilteredTasksType,
    todoListId: string,
  ) => {
    let todoList = todoLists.find((todoList) => todoList.id === todoListId);

    if (todoList) {
      todoList.filterTasks = filterTasks;
      setTodoLists([...todoLists]);
    }
  };

  const removeTodoList = (todoListId: string) => {
    let filteredTodoLists = todoLists.filter(
      (todoList) => todoList.id !== todoListId,
    );

    setTodoLists(filteredTodoLists);

    //? Видаляємо свойство об'єкта
    delete tasksObject[todoListId];
    setTasksObject({ ...tasksObject });
  };

  const addTodoList = (title: string) => {
    let newTodoList: ToDoListsType = {
      id: uuidv4(),
      title: title,
      filterTasks: "all",
    };
    setTodoLists((prevTodoLists) => [...prevTodoLists, newTodoList]);
    setTasksObject({ ...tasksObject, [newTodoList.id]: [] });

    console.log(title);
  };

  const changeEditTaskName = (
    taskId: string,
    newValue: string,
    todoListId: string,
  ) => {
    let tasks = tasksObject[todoListId];

    let task = tasks.find((editedTask) => editedTask.id === taskId);

    if (task) {
      task.name = newValue;

      setTasksObject({ ...tasksObject });
    }
  };

  const changeEditTodoTitle = (taskId: string, newTitle: string) => {
    let todoList = todoLists.find((editedTodo) => editedTodo.id === taskId);

    if (todoList) {
      todoList.title = newTitle;

      setTodoLists([...todoLists]);
    }
  };

  useEffect(() => {
    fetching();
  }, [dispatch]);

  return (
    <ToDoListsContainerStyle>
      <h1 className="todoListsContainer__title">Add new Todo Item</h1>

      <AddTodoItemForm addTodoLayout={addTodoList} />

      <ToDoListsStyle>
        {todoLists.map((todoList) => {
          let filteredTasksById = tasksObject[todoList.id];

          if (todoList.filterTasks === "checked") {
            filteredTasksById = filteredTasksById.filter(
              (filteredTask) => filteredTask.isDone === true,
            );
          }

          if (todoList.filterTasks === "empty") {
            filteredTasksById = filteredTasksById.filter(
              (filteredTask) => filteredTask.isDone === false,
            );
          }
          return (
            <ToDoList
              key={todoList.id}
              title={todoList.title}
              filterTasks={todoList.filterTasks}
              todoListId={todoList.id}
              filteredTasks={filteredTasksById}
              addTodo={addTodo}
              removeTodo={removeTodo}
              handleChangeStatus={handleChangeStatus}
              changeFilterTasks={changeFilterTasks}
              removeTodoList={removeTodoList}
              changeEditTaskName={changeEditTaskName}
              changeEditTodoTitle={changeEditTodoTitle}
            />
          );
        })}
      </ToDoListsStyle>
    </ToDoListsContainerStyle>
  );
};

export default ToDoLists;
