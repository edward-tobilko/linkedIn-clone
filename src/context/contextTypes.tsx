import { Dispatch, ReactNode, SetStateAction } from "react";

interface IVoice {
  say: string;
}

interface IChatUsers {
  id: number;
  name: string;
}

interface IDialogUsers {
  id: number;
  name: string;
  voice: IVoice;
  dataTime: string;
}

interface IStateContext {
  dialogUsers: IDialogUsers[];
  setDialogUsers: Dispatch<SetStateAction<IDialogUsers[]>>;
  // setDialogUsers: (dialogUsers: Array<IDialogUsersType>) => void;

  chatUsers: IChatUsers[];
  setChatUsers: Dispatch<SetStateAction<IChatUsers[]>>;

  searchUsers: string;
  setSearchUsers: Dispatch<SetStateAction<string>>;
}

interface IDropdownContext {
  isOpenDropdown: boolean;
  setIsOpenDropdown: Dispatch<SetStateAction<boolean>>;
}

interface IDropDownContextProviderProps {
  children: ReactNode;
}

export {
  IDialogUsers,
  IStateContext,
  IChatUsers,
  IDropdownContext,
  IDropDownContextProviderProps,
};
