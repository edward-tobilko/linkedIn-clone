import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { ToDoListsStyle } from "./todoListsStyle";

import { TasksType, FilteredTasksType, ToDoListsType } from "./todoListsTypes";

import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { useFetching } from "../../hooks/useFetching";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";
import ToDoList from "./ToDoList";

const ToDoLists: FC = () => {
  let todoListID1 = uuidv4();
  let todoListID2 = uuidv4();

  const [todoLists, setTodoLists] = useState<Array<ToDoListsType>>([
    { id: todoListID1, title: "What to learn", filterTasks: "checked" },
    { id: todoListID2, title: "What to do", filterTasks: "empty" },
  ]);
  const [tasksObject, setTasksObject] = useState({
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
    let tasks = tasksObject[todoListId];

    let task = tasks.find((checkedTask) => checkedTask.id === taskId);

    //? Перевіряємо на "псевдоистинну или псевдоложь" та міняємо значення на протилежне собі.
    if (task) {
      task.isDone = isDone;

      //? React реагує тільки на змінені дані в массиві, тому нам потрібно завжди робити копію массива та вертати її.
      // setTasks(tasksObject); //! Don't do that.

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

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     await instance.get("todo-lists").then((res) => setTasks(res.data));
  //   };

  //   fetchTasks();
  // }, []);

  useEffect(() => {
    fetching();
  }, [dispatch]);

  return (
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
          />
        );
      })}
    </ToDoListsStyle>
  );
};

export default ToDoLists;
