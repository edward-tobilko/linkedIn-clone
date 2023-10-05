import { CurrentProfilePageType } from "../../../pages/profile/profileTypes";

type CreatePostFormPropsType = {
  changePostDispatch: (newPostText: string) => void;
  addNewPostDispatch(): void;
  newPostText: string;
  currentProfilePage: CurrentProfilePageType;
};

type CreatePostFormDispatchType = {
  addNewPostDispatch: () => void;
  changePostDispatch: (newPostText: string) => void;
};

type MyOwnPropsType = {};

export { CreatePostFormPropsType, CreatePostFormDispatchType, MyOwnPropsType };
