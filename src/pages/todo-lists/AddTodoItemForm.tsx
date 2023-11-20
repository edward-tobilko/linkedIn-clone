import { ChangeEvent, KeyboardEvent, useState, FC } from "react";

import { Button, TextField, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

import { AddTodoItemFormType } from "./todoListsTypes";

const CustomButton = styled(Button)({
  height: "48px",
  marginLeft: "10px",

  "& span": {
    marginLeft: "0",
    marginRight: "0",
  },
});

const AddTodoItemForm: FC<AddTodoItemFormType> = ({ addTodoLayout }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setTodo(event.currentTarget.value);
    setError(null);
  };

  function addTodoHandler() {
    if (todo.trim() !== "") {
      addTodoLayout(todo);
      setTodo("");
    } else {
      setError("This field is required");
    }
  }

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey) addTodoHandler();
  };

  return (
    <>
      <Box sx={{ textAlign: "center", paddingBottom: "50px" }}>
        <TextField
          variant="filled"
          label="Type your todo"
          value={todo}
          error={!!error}
          helperText={error}
          color="secondary"
          onKeyUp={onKeyPressHandler}
          onChange={handleTodoChange}
          sx={{
            "& .MuiInputBase-input": {
              background: "#ffffff",
              color: "#000000",
              borderRadius: "4px",
              height: "15px",
            },
            "& label": {
              fontSize: "14px",
              lineHeight: 1,
              color: "rgba(0, 0, 0, 0.7)",
            },
            "& .MuiFormHelperText-root": {
              textAlign: "center",
              paddingTop: "5px",
              fontSize: "13px",
            },
          }}
        />

        <CustomButton
          data-testid="custom-button"
          onClick={addTodoHandler}
          variant="contained"
          endIcon={<AddIcon />}
        />
      </Box>
    </>
  );
};

export default AddTodoItemForm;
