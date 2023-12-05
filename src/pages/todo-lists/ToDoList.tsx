import { FC, useEffect, useState } from "react";

import { ReorderTodoListApiType, ToDoListType } from "./todoListsTypes";

import { Button, styled, Box, useTheme, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { todosAPI } from "./todosAPI";

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
  title,
  todolistId,
  filteredTasks,
  removeTodoList,
  updateTodoListTitle,
  getTodoTasks,
  addTodoTaskAsync,
  updateTodoTaskTitle,
  removeTodoTask,
}) => {
  const [putAfterItemId, setPutAfterItemId] = useState<string>(""); //! todo /todo-lists/{todolistId}/reorder
  const [reorderTodoList, setReorderTodoList] =
    useState<ReorderTodoListApiType | null>(null); //! todo /todo-lists/{todolistId}/reorder

  const breakpoints = useTheme();

  const updateTodoListTitleHandler = (newTitle: string) => {
    updateTodoListTitle(todolistId, newTitle);
  };

  //! todo /todo-lists/{todolistId}/reorder
  const handleReorder = async () => {
    const response = await todosAPI.reorderTodoListApi(
      todolistId,
      putAfterItemId,
    );

    setReorderTodoList(response);
  };

  const addTodoTask = async (newTask: string) => {
    await addTodoTaskAsync(todolistId, newTask);
    await getTodoTasks(todolistId);
  };

  useEffect(() => {
    getTodoTasks(todolistId);
  }, [todolistId]);

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
          updateTodoTitleHandler={updateTodoListTitleHandler}
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
          <AddTodoItemForm addTodoLayout={addTodoTask} />

          <Box sx={{ overflow: "auto" }}>
            {filteredTasks?.length === 0 ? (
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
              filteredTasks?.map((filteredTask, index) => {
                return (
                  <ToDoItem
                    key={filteredTask.id || index}
                    filteredTask={filteredTask}
                    todolistId={todolistId}
                    updateTodoTaskTitle={updateTodoTaskTitle}
                    removeTodoTask={removeTodoTask}
                  />
                );
              })
            )}
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
