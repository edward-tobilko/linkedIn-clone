import { Dispatch, SetStateAction } from "react";

interface IChatUsers {
  id: number;
  name: string;
}

interface IMessagesProps {
  obj: {
    userId: number;
    userName: string;
    message: string;
    photo: string;
  };
  time: string;
}

interface IStateContext {
  messages: IMessagesProps[];
  setMessages: (messages: Array<IMessagesProps>) => void;

  chatUsers: IChatUsers[];
  setChatUsers: Dispatch<SetStateAction<IChatUsers[]>>;

  profileEditMode: boolean;
  setProfileEditMode: (profileEditMode: boolean) => void;

  localLoading: boolean;
  setLocalLoading: (profileEditMode: boolean) => void;
}

// DropDownContextProvider component
interface IDropdownContext {
  isOpenDropdown: boolean;
  toggleDropdownMode: () => void;
}

export { IMessagesProps, IStateContext, IChatUsers, IDropdownContext };
