import { FC } from "react";

import { CreatePostBtnStyle } from "./createPostBtnStyle";

import { CreatePostBtnProps } from "./createPostBtnTypes";

export const CreatePostBtn: FC<CreatePostBtnProps> = ({
  addNewPost,
  children,
}) => {
  return (
    <CreatePostBtnStyle onClick={addNewPost} disabled={false}>
      {children}
      <div className="hoverEffect">
        <div></div>
      </div>
    </CreatePostBtnStyle>
  );
};
