import { FC } from "react";

import { ToDoListType } from "./todoListsTypes";

import { Button, styled, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import AddTodoItemForm from "./AddTodoItemForm";
import { EditInputTaskName } from "./EditInputTaskName";
import ToDoItem from "./ToDoItem";

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
        {filteredTasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            todoListId={todoListId}
            handleChangeStatus={handleChangeStatus}
            changeEditTaskName={changeEditTaskName}
            removeTodo={removeTodo}
          />
        ))}
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
