import { FC, ChangeEvent, KeyboardEvent, useState } from "react";

import { ToDoListType } from "./todoListsTypes";

import { ToDoListStyle } from "./todoListsStyle";

const ToDoList: FC<ToDoListType> = ({
  filteredTasks,
  filterTasks,
  title,
  todoListId,
  addTodo,
  removeTodo,
  handleChangeStatus,
  changeFilterTasks,
  removeTodoList,
}) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState<string | null>(null);

  function addTodoHandler() {
    if (todo.trim() !== "") {
      addTodo(todo, todoListId);
      setTodo("");
    } else {
      setError("This field is required");
    }
  }

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey) addTodoHandler();
  };

  const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setTodo(event.currentTarget.value);
    setError(null);
  };

  return (
    <ToDoListStyle>
      <button onClick={() => removeTodoList(todoListId)}>
        Remove todo list
      </button>
      <h1 className="title"> {title} </h1>

      <form className="form">
        <input
          type="text"
          value={todo}
          onChange={handleTodoChange}
          placeholder="Type your todo"
          className={error ? "error__input" : "input"}
          onKeyUp={onKeyPressHandler}
        />

        {error && <p className="error"> {error} </p>}

        <button onClick={addTodoHandler} className="btn">
          Send
        </button>
      </form>

      <div className="tasks">
        {filteredTasks.map((task) => {
          const onChangeHandlerStatus = (
            event: ChangeEvent<HTMLInputElement>,
          ) => {
            console.log(task.id + event.currentTarget.checked + " changed");

            handleChangeStatus(
              task.id,
              event.currentTarget.checked,
              todoListId,
            );
          };

          return (
            <div key={task.id} className={task.isDone ? "task isDone" : "task"}>
              <input
                type="checkbox"
                className="task__checkbox"
                checked={task.isDone}
                onChange={onChangeHandlerStatus}
              />
              <p className="task__title"> {task.name} </p>
              <button
                onClick={() => removeTodo(task.id, todoListId)}
                className="task__btn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <div className="filtered">
        <button
          className={filterTasks === "all" ? "active" : "filtered__btn"}
          onClick={() => changeFilterTasks("all", todoListId)}
        >
          All
        </button>
        <button
          className={filterTasks === "checked" ? "active" : "filtered__btn"}
          onClick={() => changeFilterTasks("checked", todoListId)}
        >
          Checked
        </button>
        <button
          className={filterTasks === "empty" ? "active" : "filtered__btn"}
          onClick={() => changeFilterTasks("empty", todoListId)}
        >
          Empty
        </button>
      </div>
    </ToDoListStyle>
  );
};

export default ToDoList;
