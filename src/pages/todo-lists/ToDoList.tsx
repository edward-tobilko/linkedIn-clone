import { FC, useState } from "react";

import { ReorderTodoListType, ToDoListType } from "./todoListsTypes";

import { Button, styled, Box, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import AddTodoItemForm from "./AddTodoItemForm";
import { EditInputTaskName } from "./EditInputTaskName";
import ToDoItem from "./ToDoItem";
import { todosAPI } from "./todosAPI";

const CustomFilterBtn = styled(Button)(({ theme }) => ({
  margin: "0 10px",

  [theme.breakpoints.down("sm")]: {
    margin: "0 5px",
  },
}));

const ToDoList: FC<ToDoListType> = ({
  title,
  todolistId,
  removeTodoList,
  updateTodoListTitle,
}) => {
  const [putAfterItemId, setPutAfterItemId] = useState<string>(""); //! todo /todo-lists/{todolistId}/reorder
  const [reorderTodoList, setReorderTodoList] =
    useState<ReorderTodoListType | null>(null); //! todo /todo-lists/{todolistId}/reorder

  const breakpoints = useTheme();

  const updateTodoListTitleHandler = (newTitle: string) => {
    updateTodoListTitle(todolistId, newTitle);
  };

  //! todo /todo-lists/{todolistId}/reorder
  const handleReorder = async () => {
    const response = await todosAPI.reorderTodoList(todolistId, putAfterItemId);

    setReorderTodoList(response);
  };

  return (
    <>
      {/* todo /todo-lists/{todolistId}/reorder */}

      {/* <Box>
        <label>
          Target TodoList ID to place after:
          <input
            type="text"
            value={putAfterItemId || ""}
            onChange={(e) => setPutAfterItemId(e.currentTarget.value)}
          />
        </label>
        <button onClick={handleReorder}>Reorder TodoList</button>

        {reorderTodoList && (
          <div>
            <h3>Reorder Result</h3>
            <p>Result Code: {reorderTodoList.resultCode}</p>
            <p>Messages: {reorderTodoList.messages?.join(", ")}</p>
            <p>Data: {JSON.stringify(reorderTodoList.data)}</p>
          </div>
        )}
      </Box> */}

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

        <EditInputTaskName
          title={title}
          updateTodoListTitleHandler={updateTodoListTitleHandler}
        />

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
    </>
  );
};

export default ToDoList;
