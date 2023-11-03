import { Dispatch, SetStateAction } from "react";

interface IChatUsers {
  id: number;
  name: string;
}

interface IStateContext {
  chatUsers: IChatUsers[];
  setChatUsers: Dispatch<SetStateAction<IChatUsers[]>>;

  profileEditMode: boolean;
  setProfileEditMode: (profileEditMode: boolean) => void;

  localLoading: boolean;
  setLocalLoading: (profileEditMode: boolean) => void;

  // file: File | null;
  // setFile: (file: File | null) => void;
}

// DropDownContextProvider component
interface IDropdownContext {
  isOpenDropdown: boolean;
  toggleDropdownMode: () => void;
}

export { IStateContext, IChatUsers, IDropdownContext };
