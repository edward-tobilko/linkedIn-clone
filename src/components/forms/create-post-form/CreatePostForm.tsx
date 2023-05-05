import { AvatarImgStyle } from "../../../rootStyles";
import { CreatePostFormStyle, TextareaStyle } from "./createPostFormStyle";

export const CreatePostForm = () => {
  return (
    <CreatePostFormStyle>
      <AvatarImgStyle
        src="./images/avatar.png"
        alt="Avatar"
        width="50px"
        height="50px"
      />
      <TextareaStyle type="text" />
    </CreatePostFormStyle>
  );
};
