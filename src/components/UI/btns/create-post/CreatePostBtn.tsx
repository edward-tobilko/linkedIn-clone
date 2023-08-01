import { FC, ReactNode, Dispatch, SetStateAction } from "react";

import { CreatePostBtnStyle } from "./createPostBtnStyle";

type CreatePostBtnProps = {
  children: ReactNode;
  addNewPost: Dispatch<SetStateAction<any>>;
};

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
