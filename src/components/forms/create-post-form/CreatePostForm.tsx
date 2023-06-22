import { ChangeEvent, MouseEvent, FC, useRef } from "react";

import { AvatarImgStyle } from "../../../rootStyles";
import { CreatePostFormStyle, TextareaStyle } from "./createPostFormStyle";

import { CreatePostBtn } from "../../UI/btns/CreatePostBtn";
import {
  changePostAC,
  addNewPostAC,
} from "../../../custom-redux/profileReducer";

export const CreatePostForm: FC<any> = ({ newText, dispatch }) => {
  let refElement = useRef<any>();

  const addNewPostFunc = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(addNewPostAC());
  };

  const changePostFunc = () => {
    if (refElement.current !== null) {
      dispatch(changePostAC(refElement.current.value));
    }
  };

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
        value={newText}
        placeholder="Add new post"
        onChange={changePostFunc}
        autoComplete="off"
      />

      <CreatePostBtn addNewPost={addNewPostFunc}>Add post</CreatePostBtn>
    </CreatePostFormStyle>
  );
};
