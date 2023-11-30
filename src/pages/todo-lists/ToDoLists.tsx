import { FC, useState, useEffect, ComponentType } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { compose } from "redux";

import { Grid, Box, Typography, useTheme } from "@mui/material";

import { TasksObjectType, ToDoListsType } from "./todoListsTypes";

import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { useFetching } from "../../hooks/useFetching";
import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";

import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";
import ToDoList from "./ToDoList";
import AddTodoItemForm from "./AddTodoItemForm";

const ToDoLists: FC = () => {
  const [todoLists, setTodoLists] = useState<Array<ToDoListsType>>([]);
  // const [tasksObject, setTasksObject] = useState<TasksObjectType>();

  let { userId } = useParams() as any;
  const dispatch = useTypeDispatch();
  const breakpoints = useTheme();

  if (!userId) {
    userId = 29793;
  }

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

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
        <AddTodoItemForm />
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
          todoLists.map((todoList) => {
            return (
              <Grid key={todoList.id}>
                <ToDoList />
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
