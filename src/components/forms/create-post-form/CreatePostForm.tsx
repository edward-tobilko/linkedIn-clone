import { MouseEvent, FC, useRef } from "react";
import { useDispatch } from "react-redux";

import { AvatarImgStyle } from "../../../rootStyles";
import { CreatePostFormStyle, TextareaStyle } from "./createPostFormStyle";

import { CreatePostBtn } from "../../UI/btns/CreatePostBtn";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

import {
  addNewPostAC,
  changePostAC,
} from "../../../redux/reducers/profileReducer";

// Container component
export const CreatePostFormContainer: FC<any> = () => {
  const state = useTypeSelector((state) => state.profilePage);

  const refElement = useRef<any>();

  const dispatch = useDispatch();

  const addNewPost = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(addNewPostAC());
  };

  const changePost = () => {
    if (refElement.current !== null) {
      dispatch(changePostAC(refElement.current.value));
    }
  };

  return (
    <CreatePostForm
      addNewPost={addNewPost}
      changePost={changePost}
      state={state}
      refElement={refElement}
    />
  );
};

// Pure component
const CreatePostForm: FC<any> = ({
  addNewPost,
  changePost,
  state,
  refElement,
}) => {
  return (
    <CreatePostFormStyle>
      <AvatarImgStyle
        src="./images/avatar.png"
        alt="Avatar"
        width="50px"
        height="50px"
      />
      <TextareaStyle
        ref={refElement}
        type="text"
        name="text"
        value={state.newText}
        placeholder="Add new post"
        onChange={changePost}
        autoComplete="off"
      />

      <CreatePostBtn addNewPost={addNewPost}>Add post</CreatePostBtn>
    </CreatePostFormStyle>
  );
};
