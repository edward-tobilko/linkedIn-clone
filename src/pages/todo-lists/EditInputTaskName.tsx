import { FC, useState, ChangeEvent } from "react";

import { EditInputTaskNameType } from "./todoListsTypes";

import { TextField } from "@mui/material";

export const EditInputTaskName: FC<EditInputTaskNameType> = ({
  title,
  updateTodoListTitleHandler,
}) => {
  const [editTitle, setEditTitle] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const activatedEditMode = () => {
    setEditTitle(true);
    setEditedValue(title);
  };

  const changeEditModeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setEditedValue(e.currentTarget.value);
    setError(null);
  };

  const activateViewChangedMode = () => {
    if (editedValue.trim() !== "") {
      if (updateTodoListTitleHandler) {
        updateTodoListTitleHandler(editedValue);
      }
      setEditedValue("");
      setEditTitle(false);
    } else {
      setError("This field is required");
    }
  };

  return (
    <>
      {editTitle ? (
        <TextField
          data-testid="error-message"
          variant="filled"
          value={editedValue}
          autoFocus={true}
          error={!!error}
          helperText={error}
          multiline={true}
          onChange={changeEditModeHandler}
          onBlur={activateViewChangedMode}
          sx={{
            "& .MuiInputBase-input": {
              background: "#ffffff",
              color: "#000000",
              borderRadius: "2px",
              height: "20px",
              margin: "15px 0",
            },
            "& .MuiFormHelperText-root": {
              textAlign: "center",
              marginBottom: "5px",
              marginTop: 0,
              fontSize: "13px",
            },
            "& .MuiInputBase-root": {
              padding: 0,

              "&:before, &:after": {
                display: "none",
              },
            },
          }}
        />
      ) : (
        <p style={{ margin: "15px 0" }} onDoubleClick={activatedEditMode}>
          {title}
        </p>
      )}
    </>
  );
};
