import { FC, useState, ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { ToDoListsStyle } from "./todoListsStyle";

import { instance } from "../../api/API";

import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { useFetching } from "../../hooks/useFetching";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";

type TasksType = {
  id: string;
  title: string;
  // addedDate: string;
  // order: number;
  isDone: boolean;
};

type FilteredTasksType = "all" | "checked" | "empty";

const ToDoLists: FC = () => {
  const [tasks, setTasks] = useState<TasksType[]>([
    { id: uuidv4(), title: "HTML&CSS", isDone: true },
    { id: uuidv4(), title: "JS", isDone: true },
    { id: uuidv4(), title: "React&Redux", isDone: false },
    { id: uuidv4(), title: "Rest API", isDone: false },
    { id: uuidv4(), title: "GraphQL", isDone: true },
  ]);
  const [todo, setTodo] = useState("");
  const [filterTasks, setFilterTasks] = useState<FilteredTasksType>("all");
  let filteredTasks = tasks;

  let { userId } = useParams() as any;
  const dispatch = useTypeDispatch();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };

  const addTodo = (title: string) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      isDone: false,
    };

    const newTasks = [...tasks, newTodo];

    setTasks(newTasks);
    setTodo("");
  };

  const removeTodo = (id: string) => {
    const filteredTasks = tasks.filter(
      (filteredTask) => filteredTask.id !== id,
    );

    setTasks(filteredTasks);
  };

  const onKeyPressHandler = (event: any) => {
    if (event.ctrlKey) {
    }
  };

  const handleCheckedChangeStatus = () => {};

  if (filterTasks === "checked") {
    filteredTasks = tasks.filter(
      (filteredTask) => filteredTask.isDone === true,
    );
  }

  if (filterTasks === "empty") {
    filteredTasks = tasks.filter(
      (filteredTask) => filteredTask.isDone === false,
    );
  }

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
      <input
        type="text"
        value={todo}
        onChange={handleTodoChange}
        placeholder="Type your todo"
        className="input"
        onKeyDown={onKeyPressHandler}
      />
      <button onClick={() => addTodo(todo)} className="btn">
        Send
      </button>

      <div className="tasks">
        {filteredTasks.map((task) => (
          <div key={task.id} className="task">
            <input
              type="checkbox"
              className="task__checkbox"
              checked={task.isDone}
              onChange={() => {}}
            />
            <p className="task__title"> {task.title} </p>
            <button onClick={() => removeTodo(task.id)} className="task__btn">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="filtered">
        <button className="filtered__btn" onClick={() => setFilterTasks("all")}>
          All
        </button>
        <button
          className="filtered__btn"
          onClick={() => setFilterTasks("checked")}
        >
          Checked
        </button>
        <button
          className="filtered__btn"
          onClick={() => setFilterTasks("empty")}
        >
          Empty
        </button>
      </div>
    </ToDoListsStyle>
  );
};

export default ToDoLists;
