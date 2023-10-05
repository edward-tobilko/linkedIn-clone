import { ReactNode, MouseEvent } from "react";

type CreatePostBtnProps = {
  children: ReactNode;
  addNewPost: (event: MouseEvent<HTMLButtonElement>) => void;
};

export { CreatePostBtnProps };
