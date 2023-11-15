import { FC, ChangeEvent } from "react";

import { ToDoListType } from "./todoListsTypes";

import { ToDoListStyle } from "./todoListsStyle";

import AddTodoItemForm from "./AddTodoItemForm";
import { EditInputTaskName } from "./EditInputTaskName";

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
  changeEditTaskName,
  changeEditTodoTitle,
}) => {
  //? Функція-обгортка для додавання списків та задач
  function addTodoLayout(name: string) {
    addTodo(name, todoListId);
  }

  function handleEditTodoTitle(newTitle: string) {
    changeEditTodoTitle(todoListId, newTitle);
  }

  return (
    <ToDoListStyle>
      <button onClick={() => removeTodoList(todoListId)}>
        Remove todo list
      </button>
      {/* <h1 className="title"> {title} </h1> */}

      <EditInputTaskName name={title} handleEdit={handleEditTodoTitle} />

      <AddTodoItemForm addTodoLayout={addTodoLayout} />

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

          function handleEditTaskName(newValue: string) {
            changeEditTaskName(task.id, newValue, todoListId);
          }

          return (
            <div key={task.id} className={task.isDone ? "task isDone" : "task"}>
              <input
                type="checkbox"
                className="task__checkbox"
                checked={task.isDone}
                onChange={onChangeHandlerStatus}
              />

              <EditInputTaskName
                name={task.name}
                handleEdit={handleEditTaskName}
              />

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
