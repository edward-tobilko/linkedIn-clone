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

const ToDoList: FC<ToDoListType> = ({ title, todolistId, removeTodoList }) => {
  const breakpoints = useTheme();

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
        onClick={() => removeTodoList(todolistId)}
      >
        Remove todo list
      </Button>

      <EditInputTaskName title={title} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          maxHeight: "400px",
          height: "100%",
        }}
      >
        <AddTodoItemForm />

        <Box sx={{ overflow: "auto" }}>
          <ToDoItem title={title} />
        </Box>

        <Box>
          <CustomFilterBtn>All</CustomFilterBtn>
          <CustomFilterBtn>Checked</CustomFilterBtn>
          <CustomFilterBtn>Empty</CustomFilterBtn>
        </Box>
      </Box>
    </Box>
  );
};

export default ToDoList;
