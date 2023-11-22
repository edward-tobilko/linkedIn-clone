import { FC, ChangeEvent } from "react";

import { Box, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ToDoItemType } from "./todoListsTypes";

import { EditInputTaskName } from "./EditInputTaskName";

const ToDoItem: FC<ToDoItemType> = ({
  task,
  todoListId,
  handleChangeStatus,
  changeEditTaskName,
  removeTodo,
}) => {
  const onChangeHandlerStatus = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(
      task.id + event.currentTarget.checked + todoListId + " changed",
    );

    handleChangeStatus(task.id, event.currentTarget.checked, todoListId);
  };

  function handleEditTaskName(newValue: string) {
    changeEditTaskName(task.id, newValue, todoListId);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        opacity: task.isDone ? 0.6 : 1,
      }}
    >
      <Checkbox checked={task.isDone} onChange={onChangeHandlerStatus} />

      <EditInputTaskName name={task.name} handleEdit={handleEditTaskName} />

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
};

export default ToDoItem;
