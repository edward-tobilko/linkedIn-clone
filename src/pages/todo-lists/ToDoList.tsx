import { FC, ChangeEvent } from "react";

import { ToDoListType } from "./todoListsTypes";

import { Button, Checkbox, IconButton, styled, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import AddTodoItemForm from "./AddTodoItemForm";
import { EditInputTaskName } from "./EditInputTaskName";

const CustomFilterBtn = styled(Button)({
  margin: "0 10px",
});

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
    <Box
      sx={{
        margin: "0 30px",
        maxWidth: "350px",
        width: "100%",
        textAlign: "center",
        background: "#1d2226",
        padding: "15px 30px",
        borderRadius: "10px",
      }}
    >
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="warning"
        onClick={() => removeTodoList(todoListId)}
      >
        Remove todo list
      </Button>

      <EditInputTaskName name={title} handleEdit={handleEditTodoTitle} />

      <AddTodoItemForm addTodoLayout={addTodoLayout} />

      <Box sx={{ paddingTop: "25px" }}>
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
            <Box
              key={task.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px",
                opacity: task.isDone ? 0.6 : 1,
              }}
            >
              <Checkbox
                checked={task.isDone}
                onChange={onChangeHandlerStatus}
              />

              <EditInputTaskName
                name={task.name}
                handleEdit={handleEditTaskName}
              />

              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => removeTodo(task.id, todoListId)}
              >
                <DeleteIcon
                  sx={{
                    "& path": {
                      color: "#ff0000",

                      "&:hover": {
                        color: "#ff00007f",
                      },
                    },
                  }}
                />
              </IconButton>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ paddingTop: "20px" }}>
        <CustomFilterBtn
          variant={filterTasks === "all" ? "contained" : "outlined"}
          onClick={() => changeFilterTasks("all", todoListId)}
        >
          All
        </CustomFilterBtn>
        <CustomFilterBtn
          variant={filterTasks === "checked" ? "contained" : "outlined"}
          onClick={() => changeFilterTasks("checked", todoListId)}
        >
          Checked
        </CustomFilterBtn>
        <CustomFilterBtn
          variant={filterTasks === "empty" ? "contained" : "outlined"}
          onClick={() => changeFilterTasks("empty", todoListId)}
        >
          Empty
        </CustomFilterBtn>
      </Box>
    </Box>
  );
};

export default ToDoList;
