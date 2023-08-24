import { ReactNode, Dispatch, SetStateAction } from "react";

type CreatePostBtnProps = {
  children: ReactNode;
  addNewPost: Dispatch<SetStateAction<any>>;
};

export { CreatePostBtnProps };
