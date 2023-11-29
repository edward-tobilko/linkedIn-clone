import { FC } from "react";

import { ToDoListType } from "./todoListsTypes";

import { Button, styled, Box, Typography, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import AddTodoItemForm from "./AddTodoItemForm";
import { EditInputTaskName } from "./EditInputTaskName";
import ToDoItem from "./ToDoItem";

const CustomFilterBtn = styled(Button)(({ theme }) => ({
  margin: "0 10px",

  [theme.breakpoints.down("sm")]: {
    margin: "0 5px",
  },
}));

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
  const breakpoints = useTheme();

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
        width: "350px",
        height: "500px",
        textAlign: "center",
        background: "#1d2226",
        padding: "15px 10px",
        borderRadius: "10px",
        marginTop: "15px",
        marginLeft: "20px",

        [breakpoints.breakpoints.down("sm")]: {
          marginLeft: 0,
          width: "300px",
        },
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          maxHeight: "400px",
          height: "100%",
        }}
      >
        <AddTodoItemForm addTodoLayout={addTodoLayout} />

        <Box sx={{ overflow: "auto" }}>
          {filteredTasks.length === 0 ? (
            <Typography
              variant="h5"
              sx={{
                fontSize: "17px",
                textAlign: "center",
                fontWeight: 600,
                color: "red",
              }}
            >
              Todos are empty...
            </Typography>
          ) : (
            filteredTasks.map((task) => (
              <ToDoItem
                key={task.id}
                task={task}
                todoListId={todoListId}
                handleChangeStatus={handleChangeStatus}
                changeEditTaskName={changeEditTaskName}
                removeTodo={removeTodo}
              />
            ))
          )}
        </Box>

        <Box>
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
    </Box>
  );
};

export default ToDoList;
