type CreatePostFormProps = {
  changePostDispatch: (newPostText: string) => void;
  addNewPostDispatch(): void;
  newPostText: string;
};

export { CreatePostFormProps };
