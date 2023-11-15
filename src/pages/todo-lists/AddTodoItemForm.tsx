import { ChangeEvent, KeyboardEvent, useState, FC } from "react";

import { AddTodoItemFormType } from "./todoListsTypes";

import { AddTodoItemFormStyle } from "./todoListsStyle";

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
      <AddTodoItemFormStyle>
        <input
          type="text"
          value={todo}
          onChange={handleTodoChange}
          placeholder="Type your todo"
          className={error ? "error__input" : "input"}
          onKeyUp={onKeyPressHandler}
        />

        {error && <p className="error"> {error} </p>}

        <button onClick={addTodoHandler} className="btn">
          Send
        </button>
      </AddTodoItemFormStyle>
    </>
  );
};

export default AddTodoItemForm;
