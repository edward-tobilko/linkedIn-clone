import { FC, useState, ChangeEvent } from "react";

import { EditInputTaskNameType } from "./todoListsTypes";

export const EditInputTaskName: FC<EditInputTaskNameType> = ({
  name,
  handleEdit,
}) => {
  const [editName, setEditName] = useState(false);
  const [editedValue, setEditedValue] = useState("");

  function activateEditMode() {
    setEditName(true);
    setEditedValue(name);
  }

  function activateViewMode() {
    setEditName(false);
    handleEdit(editedValue);
  }

  return (
    <>
      {editName ? (
        <input
          type="text"
          className="editMode__field"
          value={editedValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEditedValue(e.currentTarget.value)
          }
          onBlur={activateViewMode}
          autoFocus={true}
        />
      ) : (
        <p className="task__title" onDoubleClick={activateEditMode}>
          {name}
        </p>
      )}
    </>
  );
};
