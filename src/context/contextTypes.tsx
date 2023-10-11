import { Dispatch, SetStateAction } from "react";

// Context component
interface IVoice {
  say: string;
}

interface IChatUsers {
  id: number;
  name: string;
}

interface IDialogUsers {
  id: string;
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

export { IDialogUsers, IStateContext, IChatUsers, IDropdownContext };
