import { FC, useState, useEffect, ComponentType } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { ToDoListsType } from "./todoListsTypes";

import { Grid, Box, Typography, useTheme } from "@mui/material";

import { todosAPI } from "./todosAPI";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";

import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { useFetching } from "../../hooks/useFetching";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";

import ToDoList from "./ToDoList";
import AddTodoItemForm from "./AddTodoItemForm";
import { ResultCodesEnum } from "../../api/apiTypes";

const ToDoLists: FC = () => {
  const [todoLists, setTodoLists] = useState<Array<ToDoListsType>>([]);
  // const [tasksObject, setTasksObject] = useState();
  console.log(todoLists);

  let { userId } = useParams() as any;
  const dispatch = useTypeDispatch();
  const breakpoints = useTheme();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  const addTodoList = async (value: string) => {
    try {
      const newTodoListApi = await todosAPI.addTodoListApi(value);

      if (newTodoListApi.resultCode === ResultCodesEnum.ResultCodeSuccess) {
        const newTodoList = newTodoListApi.data.item;
        setTodoLists([...todoLists, newTodoList]);
      } else {
        console.error("Some error occured:", newTodoListApi.messages);
      }
    } catch (error) {
      console.error("Error adding todo list:", error);
    }
  };

  const removeTodoList = async (todolistId: string) => {
    try {
      const response = await todosAPI.removeTodoListApi(todolistId);

      if (response.resultCode === ResultCodesEnum.ResultCodeSuccess) {
        setTodoLists(
          todoLists.filter((todoList) => todoList.id !== todolistId),
        );
      } else {
        console.error("Some error occured:", response.messages);
      }
    } catch (error) {
      console.error("Error removing todo list:", error);
    }
  };

  const updateTodoListTitle = async (todolistId: string, newTitle: string) => {
    try {
      await todosAPI.updateTodoList(todolistId, newTitle);

      const todoList = todoLists.find(
        (editedTodo) => editedTodo.id === todolistId,
      );

      if (todoList) {
        todoList.title = newTitle;

        setTodoLists([...todoLists]);
      }
    } catch (error) {
      console.error("Error updating todo list:", error);
    }
  };

  useEffect(() => {
    const getTodoLists = async () => {
      try {
        const todoListsApi = await todosAPI.fetchTodoListsApi();
        setTodoLists(todoListsApi);
      } catch (error) {
        if (error instanceof Error) {
          console.log("Server error", error.message);
        }
      }
    };

    getTodoLists();
  }, []);

  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          fontSize: "23px",
          textAlign: "center",
          paddingBottom: "10px",
          fontWeight: 600,

          [breakpoints.breakpoints.down("sm")]: {
            fontSize: "17px",
          },
        }}
      >
        Add new Todo Item
      </Typography>

      <Box sx={{ textAlign: "center", paddingBottom: "30px" }}>
        <AddTodoItemForm addTodoList={addTodoList} />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",

          [breakpoints.breakpoints.between("xs", "lg")]: {
            justifyContent: "center",
          },
        }}
      >
        {todoLists.length === 0 ? (
          <Typography
            variant="h1"
            sx={{
              textTransform: "uppercase",
              fontSize: "23px",
              fontWeight: 600,
              color: "#f10d0d",
              width: "100%",
              textAlign: "center",
            }}
          >
            Lists are empty...
          </Typography>
        ) : (
          todoLists?.map((todoList) => {
            return (
              <Grid key={todoList?.id}>
                <ToDoList
                  todolistId={todoList.id}
                  title={todoList.title}
                  removeTodoList={removeTodoList}
                  updateTodoListTitle={updateTodoListTitle}
                />
              </Grid>
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default compose(
  connect(null, { fetchCurrentUserPageTC }),

  //? HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(ToDoLists) as ComponentType;
