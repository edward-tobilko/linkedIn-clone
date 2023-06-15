import { Dispatch, SetStateAction } from "react";

// Context component
export interface IDialogUsersType {
  id: number;
  name: string;
  say: string;
  dataTime: string;
}

export interface IChatUsersType {
  id: number;
  name: string;
}

export interface IState {
  dialogUsers: IDialogUsersType[];
  setDialogUsers: Dispatch<SetStateAction<IDialogUsersType[]>>;
  // setDialogUsers: (dialogUsers: Array<IDialogUsersType>) => void;

  chatUsers: IChatUsersType[];
  setChatUsers: Dispatch<SetStateAction<IChatUsersType[]>>;
  //   setChatUsers: (chatUsers: Array<IChatUsersType>) => void;
}

// PostsList component
export interface IPostsUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: string;
  lng: string;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

// PostsItem component
export interface IPostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
