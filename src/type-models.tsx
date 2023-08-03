import { Dispatch, SetStateAction } from "react";

// Context component
export interface IDialogUsers {
  id: number;
  name: string;
  voice: IVoice;
  dataTime: string;
}

interface IVoice {
  say: string;
}
export interface IChatUsers {
  id: number;
  name: string;
}

export interface IStateContext {
  dialogUsers: IDialogUsers[];
  setDialogUsers: Dispatch<SetStateAction<IDialogUsers[]>>;
  // setDialogUsers: (dialogUsers: Array<IDialogUsersType>) => void;

  chatUsers: IChatUsers[];
  setChatUsers: Dispatch<SetStateAction<IChatUsers[]>>;
  // setChatUsers: (chatUsers: Array<IChatUsersType>) => void;

  searchUsers: string;
  setSearchUsers: Dispatch<SetStateAction<string>>;
}

// PostsList component
export interface IPostUserState {
  postUsers: IPostsUser[];
  newText: string;
  addNewPostState: () => void;
  updatePostState: (newtext: string) => void;
}
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
