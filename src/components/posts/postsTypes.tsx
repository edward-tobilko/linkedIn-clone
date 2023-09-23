import { ItemProps } from "../../redux/reducers/profile-reducer/profileReducerTypes";

// PostsList component
type PostsListProps = {
  postUsers?: ItemProps[];
};

// PostsItem component
type PostItemProps = {
  user: ItemProps;
};

export { PostsListProps, PostItemProps };
