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

const AddTodoItemForm: FC<AddTodoItemFormType> = ({ addTodoList }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState<string | null>(null);

  const addNewTodoList = () => {
    if (todo.trim() !== "") {
      if (addTodoList) {
        addTodoList(todo);

        setTodo("");
      } else {
        setError("This field is required");
      }
    }
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setTodo(e.currentTarget.value);
    setError(null);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey) addNewTodoList();
  };

  return (
    <Box>
      <TextField
        variant="filled"
        label="Type your todo"
        value={todo}
        error={!!error}
        helperText={error}
        color="secondary"
        onChange={handleTodoChange}
        onKeyUp={onKeyPressHandler}
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
        variant="contained"
        endIcon={<AddIcon />}
        onClick={addNewTodoList}
      />
    </Box>
  );
};

export default AddTodoItemForm;
