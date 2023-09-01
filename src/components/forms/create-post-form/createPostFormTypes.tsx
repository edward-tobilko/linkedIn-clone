type CreatePostFormProps = {
  changePostDispatch: (newPostText: string) => void;
  addNewPostDispatch(): void;
  newPostText: string;
  currentProfilePage: any;
};

export { CreatePostFormProps };
