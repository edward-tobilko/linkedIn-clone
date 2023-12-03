import { FC, ChangeEvent } from "react";

import { Box, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ToDoItemType } from "./todoListsTypes";

import { EditInputTaskName } from "./EditInputTaskName";

const ToDoItem: FC<ToDoItemType> = ({
  title,
  filteredTask,
  todolistId,
  updateTodoTaskTitle,
  removeTodoTask,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        // opacity: task.isDone ? 0.6 : 1,
      }}
    >
      <Checkbox />

      <EditInputTaskName
        title={title}
        updateTodoTitleHandler={(newTitle: string) =>
          updateTodoTaskTitle(todolistId, filteredTask.id, newTitle)
        }
      />

      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => removeTodoTask(todolistId, filteredTask.id)}
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
