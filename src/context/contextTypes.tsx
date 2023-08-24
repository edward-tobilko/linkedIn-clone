import { Dispatch, SetStateAction } from "react";

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
  // setChatUsers: (chatUsers: Array<IChatUsersType>) => void;

  searchUsers: string;
  setSearchUsers: Dispatch<SetStateAction<string>>;
}

export { IDialogUsers, IStateContext, IChatUsers };
