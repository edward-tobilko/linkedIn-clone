import { FC, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { SettingStyle } from "./settingStyle";

import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import {
  addTodoTC,
  removeTodoTC,
} from "../../redux/reducers/setting-reducer/settingReducer";
import { RootState } from "../../redux/store";
import { TodoItemType } from "../../redux/reducers/setting-reducer/settingReducerTypes";

type SettingProps = {
  todos: Array<TodoItemType>;
};

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.settingPage.todos,
  };
};

const Setting: FC<SettingProps> = ({ todos }) => {
  const dispatch = useTypeDispatch();
  console.log(todos);

  const [text, setText] = useState("");

  const handleAddTodo = () => {
    dispatch(addTodoTC(text));
    setText("");
  };

  return (
    <SettingStyle>
      <h1>Todo list</h1>

      <input
        type="text"
        value={text}
        onChange={(e: any) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p> {todo.text} </p>
            <button onClick={() => dispatch(removeTodoTC(todo.id))}>
              Remove todo
            </button>
          </li>
        ))}
      </ul>
    </SettingStyle>
  );
};

export default compose(
  connect(mapStateToProps, {
    addTodoTC,
    removeTodoTC,
  }),

  withAuthRedirectHOC,
)(Setting);
