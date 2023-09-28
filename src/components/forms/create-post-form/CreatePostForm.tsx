import { FC, MouseEvent, ChangeEvent } from "react";
import { connect } from "react-redux";

import { AvatarImgStyle } from "../../../rootStyles";
import { CreatePostFormStyle, TextareaStyle } from "./createPostFormStyle";

import { CreatePostBtn } from "../../UI/btns/create-post/CreatePostBtn";
import { currentProfilePageSelector } from "../../../utils/selectors/profileSelectors";

import {
  addNewPostAC,
  changePostAC,
} from "../../../redux/reducers/profile-reducer/profileReducer";
import { RootDispatch, RootState } from "../../../redux/store";

import { CreatePostFormProps } from "./createPostFormTypes";

// Container component
const mapStateToProps = (state: RootState) => {
  return {
    newPostText: state.profilePage.newPostText,
    currentProfilePage: currentProfilePageSelector(state),
  };
};

const mapDispatchToProps = (dispatch: RootDispatch) => {
  return {
    // Створюємо новий пост на сторінку profile
    addNewPostDispatch() {
      dispatch(addNewPostAC());
    },

    // Для динамічної поведінки onChange обробника подій
    changePostDispatch(newPostText: string) {
      dispatch(changePostAC(newPostText));
    },
  };
};

const CreatePostFormContainer = connect(mapStateToProps, mapDispatchToProps);

// Pure component
const CreatePostForm: FC<CreatePostFormProps> = (props) => {
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
      {props?.currentProfilePage?.userId === 29793 && (
        <AvatarImgStyle
          src={props.currentProfilePage?.photos?.small}
          alt=""
          width="50px"
          height="50px"
          position={false}
          bottom="0"
          left="0"
        />
      )}

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
