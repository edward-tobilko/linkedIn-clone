import { FC, MouseEvent, ChangeEvent } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../redux/store";

import { AvatarImgStyle } from "../../../rootStyles";
import { CreatePostFormStyle, TextareaStyle } from "./createPostFormStyle";

import { CreatePostBtn } from "../../UI/btns/create-post/CreatePostBtn";

import {
  addNewPostAC,
  changePostAC,
} from "../../../redux/reducers/profileReducer";

import avatarIcon from "../../../img/images/avatar.png";

// Container component
const mapState = (state: RootState) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    addNewPostDispatch() {
      dispatch(addNewPostAC());
    },

    changePostDispatch(newPostText: string) {
      dispatch(changePostAC(newPostText));
    },
  };
};

const CreatePostFormContainer = connect(mapState, mapDispatch);

// Pure component
const CreatePostForm: FC<any> = (props) => {
  const changePost = (event: ChangeEvent<HTMLInputElement>) => {
    props.changePostDispatch(event.target.value);
  };

  const addNewPost = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (props.newPostText.trim() !== "") {
      props.addNewPostDispatch();
    }
  };

  return (
    <CreatePostFormStyle>
      <AvatarImgStyle src={avatarIcon} alt="" width="50px" height="50px" />
      <TextareaStyle
        type="text"
        name="text"
        value={props.newPostText}
        placeholder="Add new post"
        onChange={changePost}
        autoComplete="off"
      />

      <CreatePostBtn addNewPost={addNewPost}>Add post</CreatePostBtn>
    </CreatePostFormStyle>
  );
};

export default CreatePostFormContainer(CreatePostForm);
