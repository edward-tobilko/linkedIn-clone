import { FC, useState, ChangeEvent } from "react";

import { EditInputTaskNameType } from "./todoListsTypes";

import { TextField } from "@mui/material";

export const EditInputTaskName: FC<EditInputTaskNameType> = ({ title }) => {
  const [editName, setEditName] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      {editName ? (
        <TextField
          variant="filled"
          value={editedValue}
          autoFocus={true}
          error={!!error}
          helperText={error}
          multiline={true}
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
          data-testid="error-message"
        />
      ) : (
        <p style={{ margin: "15px 0" }}> {title} </p>
      )}
    </>
  );
};
